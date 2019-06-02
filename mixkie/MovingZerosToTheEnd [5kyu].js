var moveZeros = function(arr) {
  let result = [];

  let zeros = arr.filter(x => x === 0);
  let noZeros = arr.filter(x => x !== 0);

  for (let i = 0; i < noZeros.length; i++) {
    result.push(noZeros[i]);
  }

  for (let j = 0; j < zeros.length; j++) {
    result.push(zeros[j]);
  }

  return result;
};
