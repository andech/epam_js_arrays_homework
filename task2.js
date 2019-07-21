// const matrix = [
//   ['E', '.', '.', '.', '.', '.', 'S'],
//   ['#', '.', '.', '.', '.', '.', '#'],
//   ['#', '.', '#', '#', '#', '.', '#'],
//   ['#', '.', '#', '.', '#', '.', '#'],
//   ['#', '#', '#', '.', '#', '#', '#']
// ];

const matrix = [
  ['#', '#', '#', '.', '.', '.', '.', '.'],
  ['E', '.', '#', '#', '.', '.', '.', '.'],
  ['.', '.', '.', '#', '.', '.', '.', '.'],
  ['.', '.', '.', '#', '#', '#', '#', '.'],
  ['.', '.', '.', '.', '.', '.', '#', '#'],
  ['.', '.', '.', '#', '#', '#', '.', '#'],
  ['.', '.', '#', '#', '.', '#', '.', '#'],
  ['.', '.', 'S', '.', '.', '#', '#', '#']
];

const result = [];
const currentCell = {};

matrix.forEach((row, rowIndex) => {

  if (row.includes('S')) {
    const columnIndex = row.indexOf('S');
    result.push([columnIndex, rowIndex]);
    currentCell.x = columnIndex;
    currentCell.y = rowIndex;
  }

});

const pattern = [[-1, 0], [0, -1], [1, 0], [0, 1]];

while (matrix[currentCell.y][currentCell.x] !== 'E') {

  for (let row of pattern) {
    
    const x = currentCell.x + row[1];
    const y = currentCell.y + row[0];

    if (matrix[y]
      && (matrix[y][x] === '#' || matrix[y][x] === 'E')
    ) 
    {

      if (result.length > 1
        && x === result[result.length - 2][0]
        && y === result[result.length - 2][1]
      ) {
        continue;
      }

      result.push([x, y])
      currentCell.x = x;
      currentCell.y = y;
      break;

    }

  }
}

console.log(result);