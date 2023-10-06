# LinkedList

The LinkedList class is a data structure that consists of nodes. Each node has a value and a pointer to the next node.

## head

The first node in the list

## count

The number of nodes in the list

## insertAt(index, data)

Inserts a new node at the given index

## insertLast(data)

Inserts a new node at the end of the list

## deleteAt(index)

Deletes the node at the given index

## deleteLast()

Deletes the last node in the list

## getNodeAt(index)

Returns the node at the given index

## printAll()

Prints all the nodes in the list

## clear()

Clears the list

## Example

```ts
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
```
