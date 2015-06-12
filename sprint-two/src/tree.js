var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);
  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};


treeMethods.addChild = function(value){
  var newTree = Tree(value);
  this.children.push(newTree);
};

treeMethods.contains = function(target){
  if (this.value === target) {
    return true;
  }

  if (this.children) {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        return true;
      }
    }
  }

  return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
