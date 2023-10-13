import { Node } from '.';

describe('Node는 본인의 값인 value를 가질 수 있다.', () => {
  test('Node의 value는 5이다.', () => {
    const node = new Node(5);
    expect(node.value).toEqual(5);
  });
});

describe('Node는 그 다음 Node를 참조할 수 있다.', () => {
  test('Node의 value는 3이고 그 다음 Node의 value는 6이다.', () => {
    const nextNode = new Node(2);
    const currentNode = new Node(1, nextNode);
    if (currentNode.next) {
      expect(currentNode.next.value).toEqual(nextNode.value);
    }
  });
});
