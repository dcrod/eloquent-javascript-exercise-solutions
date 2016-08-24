// Your code here.
function deepEqual(value_1, value_2) {
  if (value_1 == value_2) {
    return true;
  } else if (typeof value_1 == "object" && typeof value_2 == "object") {
      for (var prop in value_1) {
        if (!deepEqual(value_1[prop], value_2[prop])) {
          return false;
        }
      }    
      return true;
  }
}
// End my code
var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
