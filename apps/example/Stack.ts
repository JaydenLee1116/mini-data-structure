import { Stack } from '@jaydenlee/mini-data-structure';

const stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log(stack.peek());
console.log(stack.peek());
console.log(stack.peek());
stack.pop();
stack.pop();
console.log(stack.pop());
stack.pop();
stack.pop();
console.log(stack.isEmpty());
console.log(stack.pop());
console.log(stack.peek());
