function count(array){
return array.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {})}
