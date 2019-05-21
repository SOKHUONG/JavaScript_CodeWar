let phone = function(str, num) {
    let line = str.split("\n").filter(a => a.indexOf(num) > -1);
    
    if(line.length !== 1)
      return (line.length > 1) ? `Error => Too many people: ${num}` : `Error => Not found: ${num}`
    
    let name = /\<([\w|\s|\']+)\>/g.exec(line[0])[1],
        address = line[0].replace(RegExp(num), "")
                         .replace(/\<([\w|\s\']+)\>|([\:\;\,\?\!\*\+\;\$\/])/g, "")
                         .replace(/[\s\_]+/g, " ")
                         .trim();
                         
    return `Phone => ${num}, Name => ${name}, Address => ${address}`;
}
