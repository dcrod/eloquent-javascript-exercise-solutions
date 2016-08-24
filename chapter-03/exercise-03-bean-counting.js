// Your code here.
// Original countBs from part 1 of exercise:
/*function countBs(str) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === "B") {
      count++;
    }
  }
  return count;
}
*/
// Part 2 of exercise
function countChar(str, char) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}
// Final countBs from part 2 of exercise:
function countBs(str) {
  return countChar(str, "B");
}
// End my code
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
