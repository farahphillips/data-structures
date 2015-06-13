var BinarySearchTree = function(val){
  var newTree = Object.create(treeMethods);

  newTree.value = val;
  newTree.left = null;
  newTree.right = null;

  return newTree;
};

var treeMethods = {};
treeMethods.insert = function (val) {
  var childTree = BinarySearchTree(val);

  var recursion = function(parent) {
    if (val < parent.value) {
      if (parent.left === null) {
        parent.left = childTree;
      } else {
        recursion(parent.left);
      }
    } else {
      if (parent.right === null) {
        parent.right = childTree;
      } else {
        recursion(parent.right);
      }
    }
  }
  recursion(this);
};

treeMethods.contains = function(val) {
var result = false;

var recursion = function(parent) {
 if (val === parent.value) {
   result = true;
 } else {
   if (val < parent.value) {
     if (parent.left) {
       recursion(parent.left);
     }
   }
   if (val > parent.value) {
     if (parent.right) {
       recursion(parent.right);
     }
   }
 }
}

recursion(this);
return result;

// go through each level and see if key in object === true, return true, else return false
};

treeMethods.depthFirstLog = function (cb) {

var recursion = function(parent) {
  cb(parent.value);

  if (parent.left) {

  }

}

recursion(this);

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
