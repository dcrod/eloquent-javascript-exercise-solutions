// This is the old skipSpace. Modify it...
function skipSpace(string) {
  /*
  var first = string.search(/\S/);
  if (first == -1) return "";
  return string.slice(first).replace(/#.*\n/, "");
  */
 // var toSkip = string.match(/^(\s|#.*)*/);
  //console.log(toSkip);
 // return string.slice(toSkip[0].length);
  return string.replace(/^(\s|#.*)*/, "");
}

// Tests and expected output
console.log(parse("# hello\nx"));
// → {type: "word", name: "x"}

console.log(parse("a # one\n   # two\n()"));
// → {type: "apply",
//    operator: {type: "word", name: "a"},
//    args: []}
