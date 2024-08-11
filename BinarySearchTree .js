class Node {
  // left < root < right
  constructor(val) {
    this.value = val;
    this.right = null;
    this.left = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    var newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    if (val === current.value) return undefined;
    while (true) {
      if (val < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(value) {
    if (this.root === null) return false;
    let current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }
}
