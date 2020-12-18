function getSVG(id) {
  let svg = $(id);
  return {
    svg: svg,
    width: parseInt(svg.attr('width')),
    height: parseInt(svg.attr('height')),
    update: () => svg.parent().html(svg.parent().html()), // from https://stackoverflow.com/a/13654655
  };
}

function createSVG(container, width, height) {
  let svgElement = $('<svg></svg>')
    .attr('xmlns:svg', 'http://www.w3.org/2000/svg')
    .attr('xmlns', 'http://www.w3.org/2000/svg')
    .attr('viewBox', `0 0 200 200`)
    .attr('width', `${width}px`)
    .attr('height', `${height}px`);
  let svg = {
    svg: svgElement,
    width: width,
    height: height,
    update: () => container.html(container.html()),
  };
  container.append(svg.svg);
  return svg;
}
