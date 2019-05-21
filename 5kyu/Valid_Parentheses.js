var validParentheses = function(str) {
  let arr = [];
  for(let i = 0; i < str.length; i+=1) {
    if(str[i] === ")") {
      if(arr.length <= 0) {
        return false;
      } else {
        arr.shift();
      }
    }
    if(str[i] === "(") {
      arr.push(")")
    }
  }
  
  return arr.length ? false : true;
}
