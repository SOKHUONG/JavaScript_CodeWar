function binToDec(bin){
    return parseInt((bin + '').replace(/[^01]/gi, ''),2);
  
  }
