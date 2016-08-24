// Your code here.
function isEven(num) {
  if (num == 0) {
    return true;
  } else if (num == 1) {
    return false;
  } else if (num < 0) {
    return isEven(num * -1);
  } else {
    return isEven(num - 2);
  }
}
// End my code
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??
