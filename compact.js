
'use strict';

const array1 = [0, 1, false, 2, '', 3];


function compact(array) {
  if (array.length > 0) {
    return array.filter((element) => element !== false &&
        element !== null &&
        element !== 0 &&
        element !== '' &&
        element !== 'NAN' &&
        element !== undefined);
  } else {
    return 'too short';
  }
}
const res = compact(array1);
console.log(res);
