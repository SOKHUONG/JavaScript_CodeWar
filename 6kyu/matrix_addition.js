function matrixAddition(a, b) {
  "use strict";
  var res = [];
  a.forEach((t, n1) => {
    let sums = [];
    t.forEach((num, n2) => {
      sums.push(num + b[n1][n2]);
    });
    res.push(sums);
  });
  return res;
}
