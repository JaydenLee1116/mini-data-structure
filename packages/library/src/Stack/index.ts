import { LinkedList } from '../LinkedList';

export class Stack<T> {
  linkedList: LinkedList<T>;
  constructor() {
    this.linkedList = new LinkedList();
  }

  push(data: T) {
    this.linkedList.insertAt(0, data);
  }

  pop() {
    try {
      return this.linkedList.deleteAt(0);
    } catch (error) {
      return null;
    }
  }

  peek() {
    try {
      return this.linkedList.getNodeAt(0);
    } catch (error) {
      return null;
    }
  }

  isEmpty() {
    return !this.linkedList.count;
  }
}
