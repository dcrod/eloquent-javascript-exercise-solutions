// Your code here.
function reverseArray(array) {
  var newArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}
/*
function reverseArrayInPlace(array) {
  for (var i = 1; i < array.length; i++) {
    console.log(i);
    array = [array[i]].concat(array.slice(0, i))
                      .concat(array.slice(i + 1));
    console.log(array);
  }
  return array;
}
*/
function reverseArrayInPlace(array) {
  var temp;
  for (var i = 0; i <= Math.floor(array.length / 2); i++) {
    temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }
  return array;
}
// End my code

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
