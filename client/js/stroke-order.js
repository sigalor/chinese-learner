function drawCharacterGridSVG(svg, gridType) {
  let w = 200,
    h = 200; //all relative to viewbox
  let w3 = Math.round(w / 3),
    h3 = Math.round(h / 3);

  let pathBase = $('<path/>').addClass('character-grid').css('stroke', '#ccc').css('stroke-dasharray', '10,2,2,2');
  let newPath = d => pathBase.clone().attr('d', d);
  let allPaths = [];

  switch (gridType) {
    case 'star':
      allPaths = [newPath(`M0,0 L${w},${h}`), newPath(`M${w},0 L0,${h}`)];

    case 'foursquare':
      allPaths = allPaths.concat([newPath(`M${w / 2},0 L${w / 2},${h}`), newPath(`M0,${h / 2} L${w},${h / 2}`)]);
      break;

    case 'ninesquare':
      allPaths = [
        newPath(`M${w3},0 L${w3},${h}`),
        newPath(`M${2 * w3},0 L${2 * w3},${h}`),
        newPath(`M0,${h3} L${w},${h3}`),
        newPath(`M0,${2 * h3} L${w},${2 * h3}`),
      ];
      break;
  }

  allPaths.forEach(gridPath => svg.svg.append(gridPath));
}

function pointsToPath(points) {
  let actualPointToStr = pt => `${pt.x * 200},${pt.y * 200}`;
  let pointToStr = n => actualPointToStr(points[n]);
  let path = `M${pointToStr(0)}`;
  for (let i = 1; i <= points.length; i++) {
    let currPointIdx = i % points.length;
    let nextPointIdx = (i + 1) % points.length;

    if (points[currPointIdx].q) path += ` L${pointToStr(currPointIdx)}`;
    else {
      if (points[nextPointIdx].q) {
        path += ` Q${pointToStr(currPointIdx)} ${pointToStr(nextPointIdx)}`;
        i++;
      } else {
        let targetPoint = {
          x: (points[currPointIdx].x + points[nextPointIdx].x) / 2,
          y: (points[currPointIdx].y + points[nextPointIdx].y) / 2,
        };
        path += ` Q${pointToStr(currPointIdx)} ${actualPointToStr(targetPoint)}`;
      }
    }
  }
  return path;
}

function createCharOverlay() {
  let playButtonIcon = $('<i></i>').addClass('fa').addClass('fa-play').attr('aria-hidden', 'true');
  let currTimeout;
  let playButton = divClass('reload-button')
    .append(playButtonIcon)
    .click(async function () {
      let g = $(this).parent().parent().find('g.animated');
      let animDuration = parseInt(g.attr('data-anim-duration'));
      let icon = $(this).children('i').first();
      clearTimeout(currTimeout);

      if (g.hasClass('shown')) {
        if (icon.hasClass('fa-stop')) {
          icon.removeClass('fa-stop').addClass('fa-play');
          g.removeClass('shown');
        } else {
          icon.removeClass('fa-play').removeClass('fa-repeat').addClass('fa-stop');
          g.removeClass('shown');
          await sleep(400);
          g.addClass('shown');
          currTimeout = setTimeout(() => icon.removeClass('fa-stop').addClass('fa-repeat'), animDuration + 200);
        }
      } else {
        icon.removeClass('fa-play').addClass('fa-stop');
        await sleep(400);
        g.addClass('shown');
        currTimeout = setTimeout(() => icon.removeClass('fa-stop').addClass('fa-repeat'), animDuration + 200);
      }
    });
  return divClass('char-overlay').append(playButton);
}

function getStrokeOrder(chars, charCacheFile, useCacheOnly) {
  return new Promise((resolve, reject) => {
    if (!charCacheFile && useCacheFile) {
      console.warn(
        `ignored all characters ${chars}, because no character cache file is specified and only cache is allowed`,
      );
      resolve([]);
      return;
    }

    if (charCacheFile) {
      $.getJSON(charCacheFile)
        .then(cacheRes => {
          let ret = [],
            missingChars = [];
          chars.split('').forEach(currChar => {
            let currCharObj = cacheRes.find(resChar => currChar == resChar.character);
            if (currCharObj == undefined) {
              if (!useCacheOnly) {
                ret.push(null);
                missingChars.push({ character: currChar, index: ret.length - 1 });
              } else {
                console.warn(`ignored character ${currChar}, because it's not in the cache and only cache is allowed`);
              }
            } else {
              ret.push(currCharObj);
              //console.log(`got character ${currChar} from cache (${charCacheFile})`);
            }
          });

          if (missingChars.length != 0) {
            $.getJSON('/strokeorder/' + missingChars.reduce((a, b) => a + b.character, '')).then(serverRes => {
              serverRes.forEach((currCharObj, currCharIdx) => {
                ret[missingChars[currCharIdx].index] = currCharObj;
                //console.log(`got character ${currCharObj.character} from server`);
              });
              resolve(ret);
            });
          } else resolve(ret);
        })
        .catch(reason => {
          console.warn(`character cache file ${charCacheFile} is invalid: ${reason.statusText} (${reason.status})`);
          if (!useCacheOnly) $.getJSON('/strokeorder/' + chars).then(res => resolve(res));
          else {
            console.warn(`ignored all characters ${chars}, character cache file is invalid and only cache is allowed`);
            resolve([]);
          }
        });
    } else {
      $.getJSON('/strokeorder/' + chars).then(res => resolve(res));
    }
  });
}

function displayStrokeOrderCharacters(chars, sizeVW, charCacheFile, useCacheOnly) {
  let size = $(window).width() * (sizeVW / 100.0);

  return new Promise((resolve, reject) => {
    getStrokeOrder(chars, charCacheFile, useCacheOnly).then(res => {
      $('#all-stroke-order-characters-container').empty();
      res.forEach(character => {
        let strokeOrderSVGContainerOuter = divClass('char-container-outer')
          .css('width', `${sizeVW}vw`)
          .css('height', `${sizeVW}vw`);
        let strokeOrderSVGContainer = divClass('char-container');
        let strokeOrderSVG = createSVG(strokeOrderSVGContainer, size, size);
        drawCharacterGridSVG(strokeOrderSVG, 'ninesquare');

        let strokeOrderOverlay = createCharOverlay();

        let groupElmt = $('<g></g>').addClass('stroke-order');
        let currAnimDelay = 0;
        character.strokes.forEach((strokeGroup, idx) => {
          strokeGroup.forEach(stroke => {
            let pathElmt = $('<path/>')
              .attr('d', pointsToPath(stroke.points, size))
              .addClass(
                ['dir-left-right', 'dir-top-bottom', 'dir-right-left', 'dir-bottom-top'][
                  ['leftToRight', 'topToBottom', 'rightToLeft', 'bottomToTop'].indexOf(stroke.direction)
                ],
              )
              .css('transition-duration', `${stroke.duration * 800}ms`)
              .css('transition-delay', `${currAnimDelay}ms`);
            groupElmt.append(pathElmt);
            currAnimDelay += stroke.duration * 800;
          });
          if (idx != character.strokes.length - 1) currAnimDelay += 200;
        });
        groupElmt.attr('data-anim-duration', currAnimDelay);

        strokeOrderSVG.svg.append(groupElmt.clone().addClass('preset'));
        strokeOrderSVG.svg.append(groupElmt.addClass('animated'));
        //strokeOrderSVGContainer.click(function() { $(this).find("g.animated").addClass("shown"); });
        strokeOrderSVGContainerOuter.append(strokeOrderSVGContainer);
        strokeOrderSVGContainerOuter.append(strokeOrderOverlay);
        $('#all-stroke-order-characters-container').append(strokeOrderSVGContainerOuter);
        strokeOrderSVG.update();
      });
      resolve();
    });
  });
}
