var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    // if no head then set madeNode as the head
    // if it has a tail then set tail.next as madeNode
    // now set tail to madeNode

    var madeNode = Node(value);

    if (!list.head) {
      list.head = madeNode;
    }

    if (list.tail) {
      list.tail.next = madeNode;
    }

    list.tail = madeNode;
  };

  list.removeHead = function(){
      var current = list.head;
      list.head = current.next;
      return current.value;
  };

  list.contains = function(target){
    // should contain a value that was added
    // should not contain a value that was removed

    var current = list.head;

    while (current) {
      if (current.value === target) {
        return true;
      }

      current = current.next;
    }
    return false;
  };

  return list;
};




var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
