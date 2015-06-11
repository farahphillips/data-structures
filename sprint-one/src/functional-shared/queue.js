var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.counter = 0;
  extend(someInstance, queueMethods);

  return someInstance;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.counter] = value;
    this.counter++;
  },
  dequeue: function() {

    var result = this.storage[0];
    delete this.storage[0];

    for (var i = 0; i < this.counter; i++) {
      this.storage[i] = this.storage[i+1];
    }

    if (this.counter > 0) {
      this.counter--;
    }

    return result;
  },
  size: function () {
    return this.counter;
  }
};



