import { Node } from '@jaydenlee/mini-data-structure';

const node1 = new Node(1);
console.log(node1.value); // 1
console.log(node1.next); // null

const node2 = new Node(2, node1);
console.log(node2.value); // 2
console.log(node2.next); // Node { value: 1, next: null }
