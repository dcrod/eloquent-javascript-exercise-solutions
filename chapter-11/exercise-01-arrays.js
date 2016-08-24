// Modify these definitions...

topEnv["array"] = function() {
  // Use Array's slice method to convert arguments to an array
  var items = Array.prototype.slice.call(arguments, 0);
  return items; // allowing empty arrays
}

topEnv["length"] = function(array) {
  // Instructions didn't specify support for strings
  if (!Array.isArray(array)) {
    throw new TypeError("Non-array passed to 'length.'");
  }
  return array.length;
}


topEnv["element"] = function(array, n) {
    // Could add support for strings but instructions don't specify this
  if (!Array.isArray(array)) {
    throw new TypeError("Non-array passed to 'length'");
  } else if (array[n] === undefined) {
    throw new ReferenceError("Index " + n + " of [" +
                             array + "] is undefined.");
  }
  return array[n];
}

// Test and expected output
run("do(define(sum, fun(array,",
    "     do(define(i, 0),",
    "        define(sum, 0),",
    "        while(<(i, length(array)),",
    "          do(define(sum, +(sum, element(array, i))),",
    "             define(i, +(i, 1)))),",
    "        sum))),",
    "   print(sum(array(1, 2, 3))))");
// → 6
