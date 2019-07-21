let flag = [];

for (let row = 0; row < 4; row++) {
  let tempArr = [];
  if (row !== 3) {
    tempArr = new Array(8).fill('.');
    tempArr.splice(row * 2, 2, '#', '#');
    tempArr.splice(7, 1, '#');
  } else {
    tempArr = new Array(8).fill('#');
  }
  flag = [...flag, [...tempArr, ...[...tempArr].reverse()]];
}

flag = [...flag, ...[...flag].reverse()];

flag.forEach(item => console.log(item.join(' ')));