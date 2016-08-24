// Your code here.
/* 
---- Interface Design ----
  * iterate(count, action) : performs action on first count of elements) 
  * isEnd(index) : returns true if end of sequence 
*/
function logFive(sequence) {
  var count = Math.min(4, sequence.lastItem()) + 1;
  sequence.iterate(count, console.log);
}

function ArraySeq(array) {
  this.elements = array;
}
ArraySeq.prototype.lastItem = function () {
  return this.elements.length - 1;
}
ArraySeq.prototype.iterate = function (count, action) {
  for (var i = 0; i < count; i++) {
    action(this.elements[i]);
  }
}

function RangeSeq(from, to) {
  this.from = from;
  this.to = to;
}
RangeSeq.prototype.lastItem = function () {
  return this.to - this.from;
}
RangeSeq.prototype.iterate = function (count, action) {
  for (var i = this.from; i < this.from + count; i ++) {
    action(i);
  }
}

logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104
