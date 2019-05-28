function digital_root(n) {
  var a = 0
  var b = n.toString().split("").map((str)=> { return parseInt(str) } );
  while(b.length>1)
    {
       a = b.reduce((c,d) => {return c+d;});
       b = a.toString().split("").map(str => parseInt(str));
    }
    return parseInt(b);
}