# Queue

The Queue class is a data structure that follows the FIFO (First In First Out) principle.

## list

The doubly-list of nodes in the stack

## enqueue(data)

Enqueues a new node to the end of the queue

## dequeue()

Dequeues the first node from the queue

## front()

Returns the first node from the queue

## isEmpty()

Returns true if the queue is empty

## Example

```ts
import { Queue } from '@jaydenlee/mini-data-structure';

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.printAllValue(); // 1 2 3 4
console.log(queue.dequeue()); // 1
console.log(queue.dequeue()); // 2
console.log(queue.front()); // 3
console.log(queue.dequeue()); // 3
console.log(queue.isEmpty()); // false
console.log(queue.dequeue()); // 4
console.log(queue.isEmpty()); // true
```
