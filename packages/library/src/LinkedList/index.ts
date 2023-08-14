import { Node } from '../Node';

export class LinkedList<T> {
  public head: Node<T> | null;
  public count: number;
  constructor() {
    this.head = null;
    this.count = 0;
  }

  insertAt(index: number, data: T) {
    if (index < 0 || index > this.count) {
      throw new Error('Index is out of range');
    }

    const newNode = new Node(data);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let currentNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        if (currentNode) {
          currentNode = currentNode.next;
        }
      }
      if (currentNode) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
      }
    }
    this.count++;
  }

  insertLast(data: T) {
    this.insertAt(this.count, data);
  }

  deleteAt(index: number) {
    if (index < 0 || index >= this.count) {
      throw new Error('Index is out of range');
    }

    if (index === 0) {
      if (this.head) {
        this.head = this.head.next;
      }
    } else {
      let currentNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        if (currentNode) {
          currentNode = currentNode.next;
        }
      }
      if (currentNode) {
        currentNode.next = currentNode.next?.next || null;
      }
    }
    this.count--;
  }

  deleteLast() {
    this.deleteAt(this.count - 1);
  }

  getNodeAt(index: number) {
    if (index < 0 || index >= this.count) {
      throw new Error('Index is out of range');
    }

    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      if (currentNode) {
        currentNode = currentNode.next;
      }
    }
    return currentNode;
  }

  printAllValue() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }

  clear() {
    this.head = null;
    this.count = 0;
  }
}