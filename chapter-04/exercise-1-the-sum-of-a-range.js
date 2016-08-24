// Your code here.
function range(start, end, step) {
  var array = [];
  var min = Math.min(start, end);
  var max = Math.max(start, end);
  var step = step ? Math.abs(step) : 1;
  for (var i = min; i <= max; i += step) {
    if (start === min) {
      array.push(i);
    } else {
      array.unshift(i);
    }
  }
  return array;
}
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function sum(array) {
  var sum = array[0];
  for (var i = 1; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
// End of my code

console.log(sum(range(1, 10)));
// → 55
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
