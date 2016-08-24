function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

// Your code here.

var agesByCentury = {};
ancestry.forEach(function(person) {
  var century = Math.ceil(person.died / 100);
  if (!agesByCentury[century]) {
    agesByCentury[century] = [];
  }
  agesByCentury[century].push(person.died - person.born);
});
for (var century in agesByCentury) {
  console.log(century, ":", average(agesByCentury[century]));
}
// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94
