type QNode<T> = {
  value: T;
  next?: QNode<T>;
};

class Queue<T> {
  public length: number;
  private head?: QNode<T>;
  private tail?: QNode<T>;

  constructor() {
    this.head = this.tail = undefined;
    this.length = 0;
  }

  enqueue(item: T): void {
    const node = {
      value: item,
      next: undefined,
    } as QNode<T>;

    this.length++;

    if (!this.head || !this.tail) {
      this.head = this.tail = node;
      return;
    }

    this.tail.next = node;
    this.tail = node;
  }

  deque(): T | undefined {
    if (!this.head) {
      return undefined;
    }

    this.length--;

    let temp = this.head;
    this.head = temp.next;

    temp.next = undefined;

    return temp.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}

export default Queue;
