// Your code here.
function arrayToList(array) {
  var list = {};
  var current = list;
  for (var i = 0; i < array.length; i ++) {
    current.value = array[i];
    current.rest = i < array.length - 1 ? {} : null;
    current = current.rest;
  }  
  current = null;
  return list;
}
function listToArray(list) {
  var array = [];
  while (list !== null) {
    array.push(list.value);
    list = list.rest;
  }
  return array;
}
function prepend(element, list) {
  return {value: element,
          rest: list
         };
}
function nth(list, number) {
  if (!list) {
    return undefined;
  } else  if (number === 0) {
    return list.value;
  } else {
    return nth(list.rest, number - 1);
  }
}
// End my code
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
