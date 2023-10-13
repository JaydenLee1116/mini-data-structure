# @jaydenlee/mini-data-structure

## Install

Using npm:

```bash
$ npm install @jaydenlee/mini-data-structure
```

Using yarn:

```bash
$ yarn add @jaydenlee/mini-data-structure
```

## Usage Preview

### Node

```ts
import { Node } from '@jaydenlee/mini-data-structure';

const node1 = new Node(1);

console.log(node.value); // 1
console.log(node.next); // null

const node2 = new Node(2, node1);

console.log(node2.value); // 2
console.log(node2.next); // node1
```

> More Information => [Jayden's Mini Data Structure](https://mini-data-structure-docs.vercel.app/)
