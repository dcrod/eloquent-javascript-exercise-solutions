var box = {
  locked: true,
  unlock: function() { this.locked = false; },
  lock: function() { this.locked = true;  },
  _content: [],
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;
  }
};

function withBoxUnlocked(body) {
  // Your code here.
  var initiallyLocked = box.locked;
  if (initiallyLocked) {
    box.unlock();
  }
  try {
    return body();
  } finally {
    if(initiallyLocked) {
      box.lock();
    }
  }
}

// Tests
box.lock();
withBoxUnlocked(function() {
  box.content.push("gold piece");
});

try {
  withBoxUnlocked(function() {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised:", e);
}
console.log(box.locked);
// → true

// Extra test to make sure when box is already unlocked, it stays unlocked

box.unlock();
withBoxUnlocked(function() {
  box.content.push("silver piece");
});
console.log(box.locked);
// → false
try {
  withBoxUnlocked(function() {
    thisIsNotDefined();
  });
} catch (e) {
  console.log("Error raised:", e);
}
console.log(box.locked);
// → false;
