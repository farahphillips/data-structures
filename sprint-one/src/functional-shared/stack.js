var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.counter = 0;
  extend(someInstance, stackMethods);

  return someInstance;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var stackMethods = {
  push : function(value) {
    this.storage[this.counter] = value;
    this.counter++
  },
  pop : function() {
    var result = this.storage[this.counter-1];
    delete this.storage[this.counter-1];

    if (this.counter > 0) {
      this.counter--;
    }

    return result;
  },
  size: function() {
    return this.counter;
  }
};


