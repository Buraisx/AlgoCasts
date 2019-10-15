// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  // Linked list only knows about the first node
  // it needs to crawl the nodes through its methods
  constructor() {
    this.head = null;
  }
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }
  size() {
    let numNodes = 0;
    let currNode = this.head;
    while(currNode != null) {
      currNode = currNode.next;
      numNodes += 1;
    }
    return numNodes;
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    if(!this.head) {
      return;
    }

    let currNode = this.head;
    while (currNode.next != null) {
      currNode = currNode.next;
    }
    return currNode;
  }
  clear() {
    this.head = null;
  }
  removeFirst() {
    if(!this.head){
      return;
    }
    this.head = this.head.next;
  }
  removeLast() {
    if (!this.head) {
      return;
    }

    if(!this.head.next) {
      this.head = null;
      return;
    }

    let prevNode = this.head;
    let node = this.head.next;
    while (node.next) {
      prevNode = node;
      node = node.next;
    }
    prevNode.next = null;
  }
  insertLast(data) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    let currNode = this.head;
    while (currNode.next != null) {
      currNode = currNode.next;
    }
    // currNode is now last node
    currNode.next = new Node(data);
  }
  getAt(index){
    if (!this.head) {
      return null;
    }

    if (this.size() < index + 1) {
      return null;
    }

    let node = this.head;
    for(let i = 0; i < index; i++) {
      node = node.next;
    }
    return node;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }

    if (this.size() < index + 1 || Math.sign(index) === -1) {
      return null;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    // go to given index
    // [1,2,3,4,5]
    // delete 2 index = 1
    let prevNode = this.head;
    let node = this.head.next;
    for (let i = 0; i < index; i++) {
      prevNode = node;
      node = node.next;
    }
    prevNode = node.next;
  }
}

module.exports = { Node, LinkedList };
