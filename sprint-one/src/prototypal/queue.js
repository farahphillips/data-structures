var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = Object.create(queueMethods);
  someInstance.counter = 0;
  someInstance.storage = {};
  return someInstance;

};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this.storage[this.counter] = value;
  this.counter++;
};

queueMethods.dequeue = function () {
  var result = this.storage[0];
    delete this.storage[0];

    for (var i = 0; i < this.counter; i++) {
      this.storage[i] = this.storage[i+1];
    }

    if (this.counter > 0) {
      this.counter--;
    }

    return result;
};

queueMethods.size = function () {
  return this.counter;
};

