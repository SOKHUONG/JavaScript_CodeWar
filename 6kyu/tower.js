function towerBuilder(nFloors) {
  var space = "";
  var star = "";
  var result = [];
  for (var i = 1; i <= nFloors; i++) {
    space = (" ").repeat(nFloors - i);
    star = ("*").repeat((2 * i) - 1);
    result.push(space + star + space);
  }
  return result;
}
