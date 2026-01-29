/* Given a 2D array, update the value at second row first item to 99 and print the updated array.

input:

[
  [1, 2],
  [3, 4],
  [5, 6]
]
Expected Array:

[
  [1, 2],
  [99, 4],
  [5, 6]
] */

let a = [
  [1, 2],
  [3, 4],
  [5, 6],
];

a[1][0] = 99;
a[2][0] = 100;
a[2][1] = 102;
console.log(a);