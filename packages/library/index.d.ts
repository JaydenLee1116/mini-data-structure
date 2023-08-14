export declare class Node<T> {
  public value: T;
  public next: Node<T> | null;
  constructor(value: T, next: Node<T> | null);
}
