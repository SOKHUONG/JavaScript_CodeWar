function solution(list) {
  let str = "";
  let temp = [];

  for (let i = 0; i < list.length; i++) {
    if (list[i] - list[i + 1] === -1) {
      str += `${list[i]}x${list[i + 1]}x`;
    } else {
      str += `${list[i]} `;
    }
  }

  temp = str.split(" ").slice(0, -1);

  for (let i = 0; i < temp.length; i++) {
    if (temp[i].length > 2) {
      temp[i] = temp[i].split("x");
      if (temp[i].length > 3) {
        temp[i] = `${temp[i][0]}-${temp[i][temp[i].length - 1]}`;
      } else {
        temp[i] = `${temp[i][0]},${temp[i][temp[i].length - 1]}`;
      }
    }
  }
  temp = temp.join(",").split(",");

  temp = temp.filter((value, index) => temp.indexOf(value) === index);

  return temp.join(",");
}
