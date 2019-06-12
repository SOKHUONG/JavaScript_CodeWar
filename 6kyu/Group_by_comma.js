function groupByCommas(n) {
   return ("" + n).split('').reverse().map(function(v,i) {
    return i % 3 == 0 && i > 0 ? v + ',' : v;
  }).reverse().join('');
  }