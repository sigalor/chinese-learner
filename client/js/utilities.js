function sleep(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), ms);
  });
}

function tagClass(t, c) {
  return $(`<${t}></${t}>`).addClass(c);
}

function divClass(c) {
  return tagClass('div', c);
}

function faIcon(c) {
  return tagClass('i', `fa ${c}`).attr('aria-hidden', true);
}

function getRandomEntry(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function popRandomElement(x) {
  if (x instanceof Array) {
    let idx = Math.floor(Math.random() * x.length);
    let elmt = x[idx];
    x.splice(idx, 1);
    return elmt;
  } else if (x instanceof Object) {
    let keys = Object.keys(x);
    let idx = Math.floor(Math.random() * keys.length);
    let elmt = [keys[idx], x[keys[idx]]];
    delete x[keys[idx]];
    return elmt;
  }
}

function shuffleArray(array) {
  //from https://stackoverflow.com/a/12646864
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function shuffleArrayCopy(array) {
  let arrayCopy = JSON.parse(JSON.stringify(array));
  return shuffleArray(arrayCopy);
}

function uniquifyArray(array) {
  return [...new Set(array)]; //from https://stackoverflow.com/a/33121880
  //return array.filter((val, idx, self) => self.indexOf(val) === idx);
}

function diffArray(left, right) {
  return left.filter(x => right.indexOf(x) == -1);
}
