var Stack = function() {
  this.storage = {};
  this.counter = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.counter] = value;
  this.counter++;
};

Stack.prototype.pop = function() {
  var result = this.storage[this.counter-1];
  delete this.storage[this.counter-1];

  if (this.counter > 0) {
    this.counter--;
  }

  return result;
};

Stack.prototype.size = function() {
  return this.counter;
};

