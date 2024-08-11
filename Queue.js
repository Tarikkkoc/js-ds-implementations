class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;
    var temp = this.first;
    if (this.first === this.last) this.last = null;
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

var queue1 = new Queue();
queue1.enqueue("1");
queue1.enqueue("2");
queue1.enqueue("3");
queue1.enqueue("4");

console.log("First Element: " + JSON.stringify(queue1.first, null, 2));
var queueDeq = queue1.dequeue(); // 1
console.log("queueDeq: " + queueDeq);
