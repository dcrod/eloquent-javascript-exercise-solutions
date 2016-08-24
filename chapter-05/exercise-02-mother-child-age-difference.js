function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

// Your code here.

// First soloution
var ageDifferences = [];
ancestry.forEach(function(person) {
  if (byName[person.mother]) {
    ageDifferences.push(person.born - byName[person.mother].born);
  }
});
console.log(average(ageDifferences));

// Solution using filter and map
var ageDifferentials = ancestry
  .filter(function(person) {
    return byName[person.mother] != undefined;
  })
  .map(function(personWithMother) {
    return personWithMother.born - byName[personWithMother.mother].born;
  });
console.log(average(ageDifferentials));
// → 31.2
