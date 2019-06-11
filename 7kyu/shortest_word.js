

function findShort(str) {
  return str.split(' ').sort((a, b) => {
    return a.length < b.length ? -1 : 1;
  })[0].length;
}
