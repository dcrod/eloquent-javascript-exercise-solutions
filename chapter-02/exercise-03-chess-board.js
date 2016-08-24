var output = "";
var size = 8;
for (var x = 1; x <= size; x++) {
  for (var y = 1; y <= size; y++) {
    if ((x+y) % 2 === 0) {
      output += " ";
    } else {
      output += "#";
    }
  }
  if (x < size) {
    output += "\n"
  }
}
console.log(output);
