export declare class Node<T> {
  public value: T;
  public next: Node<T> | null;
  constructor(value: T, next: Node<T> | null);
}

export declare class LinkedList<T> {
  public head: Node<T> | null;
  public count: number;
  constructor();
  insertAt(index: number, data: T): void;
  insertLast(data: T): void;
  deleteAt(index: number): void;
  deleteLast(): void;
  getNodeAt(index: number): Node<T> | null;
  printAllValue(): void;
  clear(): void;
}

export declare class Stack<T> {
  linkedList: LinkedList<T>;
  constructor();
  push(value: T): void;
  pop(): T | null;
  peek(index: number): Node<T> | null;
  isEmpty(): boolean;
}
