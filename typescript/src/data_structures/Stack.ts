class Stack<T> {
  public length: number;
  private head?: SNode<T>;

  constructor() {
    this.head = undefined;
    this.length = 0;
  }

  push(item: T): void {
    const node = { value: item, next: undefined } as SNode<T>;

    this.length++;

    if (!this.head) {
      this.head = node;
      return;
    }

    node.prev = this.head;
    this.head = node;
  }

  pop(): T | undefined {
    if (!this.head) {
      return undefined;
    }

    this.length--;

    const temp = this.head;
    this.head = temp.prev;

    temp.prev = undefined;

    return temp.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}

export default Stack;
