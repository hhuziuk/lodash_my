
'use strict';
const array1 = ['a', 'b', 'c', 'd', 'e', 'f'];

function chunk(array, size) {
  const result = [];
  if (array && array.length) {
    const counts = Math.ceil(array.length / size);
    for (let i = 0; i < counts; i++) {
      const start = i * size;
      const end = (i + 1) * size;
      result.push(array.slice(start, end));
    }
  }
  return result;
}

const res = chunk(array1, 4);
console.log(res);
