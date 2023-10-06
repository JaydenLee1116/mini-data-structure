# Stack

The Stack class is a data structure that follows the LIFO (Last In First Out) principle.

## list

The list of nodes in the stack

## push(data)

Pushes a new node to the top of the stack

## pop()

Pops the top node from the stack

## peek()

Returns the top node from the stack

## isEmpty()

Returns true if the stack is empty

## Example

```ts
import { Stack } from '@jaydenlee/mini-data-structure';

const stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log(stack.peek()); // 5
console.log(stack.peek()); // 5
console.log(stack.peek()); // 5
stack.pop(); // 5
stack.pop(); // 4
console.log(stack.pop()); // 3
stack.pop(); // 2
stack.pop(); // 1
console.log(stack.isEmpty()); // true
console.log(stack.pop()); // undefined
console.log(stack.peek()); // undefined
```
