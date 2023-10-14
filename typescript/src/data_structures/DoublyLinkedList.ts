class DoublyLinkedList<T> {
  public length: number;
  private head?: ListNode<T>;
  private tail?: ListNode<T>;

  constructor() {
    this.length = 0;
    this.head = this.tail = undefined;
  }

  debug() {
    let out = "";
    let curr = this.head;
    for (let i = 0; curr && i < this.length; ++i) {
      out += `(${i}: ${curr.value}) => `;
      curr = curr.next;
    }
    console.log(out);
  }

  prepend(item: T): void {
    const node = {
      value: item,
    } as ListNode<T>;

    this.length++;

    if (!this.head) {
      this.head = this.tail = node;
      return;
    }

    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }

  insertAt(item: T, idx: number): void {
    if (idx > this.length) {
      throw new Error("Index out of bounds.");
    }

    if (idx == this.length) {
      this.append(item);
      return;
    } else if (idx == 0) {
      this.prepend(item);
      return;
    }

    this.length++;

    const curr = this.getAt(idx) as ListNode<T>;
    const node = { value: item } as ListNode<T>;

    node.next = curr;
    node.prev = curr.prev;
    curr.prev = node;

    if (node.prev) {
      node.prev.next = node;
    }
  }

  append(item: T): void {
    this.length++;

    const node = { value: item } as ListNode<T>;

    if (!this.tail) {
      this.tail = this.head = node;
      return;
    }

    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
  }

  remove(item: T): T | undefined {
    let curr = this.head;

    for (let i = 0; curr && i < this.length; i++) {
      if (curr.value == item) {
        break;
      }

      curr = curr.next;
    }

    if (!curr) {
      return undefined;
    }

    return this.removeNode(curr);
  }

  get(idx: number): T | undefined {
    return this.getAt(idx)?.value;
  }

  removeAt(idx: number): T | undefined {
    if (idx < 0) {
      throw new Error("Index out of bounds.");
    }

    const node = this.getAt(idx);

    if (!node) {
      return undefined;
    }

    return this.removeNode(node);
  }

  private removeNode(node: ListNode<T>): T | undefined {
    this.length--;

    if (this.length == 0) {
      const out = this.head?.value;
      this.head = this.tail = undefined;
      return out;
    }

    if (node == this.head) {
      this.head = node.next;
    }

    if (node == this.tail) {
      this.head = node.prev;
    }

    if (node.prev) {
      node.prev.next = node.next;
    }

    if (node.next) {
      node.next.prev = node.prev;
    }

    node.next = node.prev = undefined;

    return node.value;
  }

  private getAt(idx: number): ListNode<T> | undefined {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Out of bounds.");
    }

    if (idx == 0) {
      return this.head;
    }

    if (idx == this.length - 1) {
      return this.tail;
    }

    let curr = this.head;
    for (let i = 0; curr && i < idx; i++) {
      curr = curr.next;
    }

    return curr;
  }
}

export default DoublyLinkedList;
