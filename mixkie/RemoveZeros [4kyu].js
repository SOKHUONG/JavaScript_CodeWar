function removeZeros(array) {
  var str = "",
    index = 0;

  //Take non-zeros elment to the front and store zeros in "str"
  for (var i = 0; i < array.length; i++)
    if (array[i] === 0) str += 0;
    else if (array[i] === "0") str += "x";
    else array[index++] = array[i];

  //Insert "str" value to the array
  for (var i = 0; i < str.length; i++)
    if (str[i] === "0") array[index++] = 0;
    else array[index++] = "0";

  return array;
}
