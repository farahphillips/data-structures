var Queue = function() {
 this.storage  = {};
 this.counter = 0;
};

Queue.prototype.enqueue = function (value) {
  this.storage[this.counter] = value;
  this.counter++;
};

Queue.prototype.dequeue = function () {
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

Queue.prototype.size = function  () {
  return this.counter;
};
