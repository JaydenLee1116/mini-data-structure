import { LinkedList } from '@jaydenlee/mini-data-structure';

const linkedList = new LinkedList<number>();
linkedList.insertAt(0, 1);
linkedList.insertAt(1, 2);
linkedList.printAllValue(); // 1 2

linkedList.insertLast(3);
linkedList.printAllValue(); // 1 2 3

linkedList.deleteAt(1);
linkedList.printAllValue(); // 1 3

linkedList.deleteLast();
linkedList.printAllValue(); // 1

linkedList.insertLast(2);
linkedList.insertLast(3);
linkedList.clear();
linkedList.printAllValue(); // (nothing)

linkedList.insertLast(0);
console.log(linkedList.getNodeAt(0)); // Node { value: 0, next: null }
