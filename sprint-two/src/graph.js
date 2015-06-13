var Graph = function(){
  this.storage = {};
};

Graph.prototype.addNode = function(value){
  // store value in a node, and then add that node to graph's storage
  this.storage[value] = [];

};

Graph.prototype.contains = function(node){
  if (this.storage.hasOwnProperty(node)) {
    return true;
  } else {
    return false;
  }
};

Graph.prototype.removeNode = function(node){
  if (this.storage.hasOwnProperty(node)) {
    delete this.storage[node];
  }
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  for (var i = 0; i < this.storage[fromNode].length; i++) {
     if (this.storage[fromNode][i] === toNode) {
      return true;
   }
  }

  return false;

};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.storage[fromNode].push(toNode);
  this.storage[toNode].push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){

  this.storage[fromNode].splice(toNode); // but remove this node somehow
  this.storage[toNode].splice(fromNode); // same as above

};

Graph.prototype.forEachNode = function(cb){
  for (var key in this.storage) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
