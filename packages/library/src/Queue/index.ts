import { LinkedList } from '../LinkedList';

export class Queue<T> {
  linkedList: LinkedList<T>;
  constructor() {
    this.linkedList = new LinkedList();
  }

  enqueue(data: T) {
    this.linkedList.insertAt(0, data);
  }

  dequeue() {
    try {
      return this.linkedList.deleteLast();
    } catch (error) {
      return null;
    }
  }

  front() {
    try {
      return this.linkedList.getNodeAt(this.linkedList.count - 1);
    } catch (error) {
      return null;
    }
  }

  isEmpty() {
    return !this.linkedList.count;
  }

  printAllValue() {
    this.linkedList.printAllValue();
  }
}
