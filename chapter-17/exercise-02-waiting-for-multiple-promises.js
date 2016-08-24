function all(promises) {
  return new Promise(function(success, fail) {
    // Your code here.
    var results = [], 
        waiting = promises.length;
    if (waiting == 0) {
      success(results);
    } else {
      promises.forEach(function (promise, i) {
        promise.then(function (result) {
          results[i] = result;
          waiting--; 
          // checking results length doesn't work b/c
          // the last promise doesn't necessarily return last
          if (waiting == 0) {
            success(results);
          }
        }).catch(function(error) {
          fail(error);
        });
      });  
    }       
/* Alternate, recursive solution:
   This is slower b/c promises do not run concurrently,
   i.e. first promise called, second called after first resolves,
        third called after second reloves, etc.

    function runAll(results, promises) {
      if (promises.length == 0) {
        success(results);
      } else {
        var promise = promises.shift();
        promise.then(function (result) {
          runAll(results.concat([result]), promises);
        }).catch(function (error) {
          fail(error);
        });
      }
    }
    runAll([], promises);
*/
  });
}

// Test code.
all([]).then(function(array) {
  console.log("This should be []:", array);
});
function soon(val) {
  return new Promise(function(success) {
    setTimeout(function() { success(val); },
               Math.random() * 500);
  });
}
all([soon(1), soon(2), soon(3)]).then(function(array) {
  console.log("This should be [1, 2, 3]:", array);
});
function fail() {
  return new Promise(function(success, fail) {
    fail(new Error("boom"));
  });
}
all([soon(1), fail(), soon(3)]).then(function(array) {
  console.log("We should not get here");
}, function(error) {
  if (error.message != "boom")
    console.log("Unexpected failure:", error);
  else if (error.message == "boom")
    console.log("This is correctly", error);
});
