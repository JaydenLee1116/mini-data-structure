import { Queue } from '@jaydenlee/mini-data-structure';

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.printAllValue();
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.front());
console.log(queue.dequeue());
console.log(queue.isEmpty());
console.log(queue.dequeue());
console.log(queue.isEmpty());
