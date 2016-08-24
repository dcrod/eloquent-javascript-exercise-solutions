var arrays = [[1, 2, 3], [4, 5], [6]];
console.log(arrays.reduce(function(a, b) {
  return b.reduce(function(c, d) {
    return c.concat(d);
  }, a);
}, []));
