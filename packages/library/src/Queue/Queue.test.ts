import { Queue } from './index';

describe('Queue의 enqueue()를 호출하여 데이터를 삽입할 수 있다.', () => {
  const queue = new Queue();
  it('enqueue(0)을 호출하면 0이 삽입된다.', () => {
    queue.enqueue(0);
    expect(queue.front()!.value).toEqual(0);
  });
  it('enqueue(1)을 호출하면 1이 삽입되고 0은 tail에 위치한다.', () => {
    queue.enqueue(1);
    expect(queue.front()!.value).toEqual(0);
  });
});

describe('Queue의 dequeue()를 호출하여 데이터를 제거할 수 있다.', () => {
  const queue = new Queue();
  queue.enqueue(3);
  queue.enqueue(6);
  it('dequeue()을 호출하면 3이 제거되며 반환된다.', () => {
    expect(queue.dequeue()!.value).toEqual(3);
  });
  it('dequeue()을 호출하면 6이 제거되며 반환된다.', () => {
    expect(queue.dequeue()!.value).toEqual(6);
  });
});
