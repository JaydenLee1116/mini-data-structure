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
    if (index >= this.count || index < 0) {
      throw new Error('Index is out of range');
    }

    if (index === 0) {
      const deletedNode = this.head;
      this.head = this.head!.next;
      this.count--;
      return deletedNode;
    } else {
      let currentNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        if (currentNode) {
          currentNode = currentNode.next;
        }
      }
      if (currentNode && currentNode.next) {
        const deletedNode = currentNode.next;
        currentNode.next = currentNode.next.next;
        this.count--;
        return deletedNode;
      }
    }
  }

  deleteLast() {
    return this.deleteAt(this.count - 1);
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
    const resultForPrint: T[] = [];
    let currentNode = this.head;
    while (currentNode) {
      resultForPrint.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(resultForPrint.join(' -> '));
  }

  clear() {
    this.head = null;
    this.count = 0;
  }
}
