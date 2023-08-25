function createNode<V>(value: V): ListNode<V> {
  return { value };
}

// Least Recently Used
export default class LRU<K, V> {
  private length: number;
  private head?: ListNode<V>;
  private tail?: ListNode<V>;

  private lookup: Map<K, ListNode<V>>;
  private reverseLookup: Map<ListNode<V>, K>;

  constructor(private capacity: number = 10) {
    this.length = 0;
    this.head = this.tail = undefined;
    this.lookup = new Map<K, ListNode<V>>();
    this.reverseLookup = new Map<ListNode<V>, K>();
  }

  update(key: K, value: V) {
    let node = this.lookup.get(key);

    if (!node) {
      node = createNode(value);

      this.length++;
      this.prepend(node);
      this.trimCache();

      this.lookup.set(key, node);
      this.reverseLookup.set(node, key);
    } else {
      this.detach(node);
      this.prepend(node);
      node.value = value;
    }
  }

  get(key: K): V | undefined {
    // Check cache for existence
    const node = this.lookup.get(key);

    if (!node) {
      return undefined;
    }

    // Update the value we found and move it to the front
    this.detach(node);
    this.prepend(node);

    // Return out the value or undeinfed if not exist;
    return node.value;
  }

  private detach(node: ListNode<V>): void {
    if (node.prev) {
      node.prev.next = node.next;
    }

    if (node.next) {
      node.next.prev = node.prev;
    }

    if (this.head === node) {
      this.head = this.head.next;
    }

    if (this.tail === node) {
      this.tail = this.tail.prev;
    }

    node.next = undefined;
    node.prev = undefined;
  }

  private prepend(node: ListNode<V>): void {
    if (!this.head) {
      this.head = this.tail = node;
      return;
    }

    node.next = this.head;
    this.head.prev = node;

    this.head = node;
  }

  private trimCache(): void {
    if (this.length <= this.capacity) {
      return; 
    }

    const tail = this.tail as ListNode<V>;
    this.detach(tail);

    const key = this.reverseLookup.get(tail) as K;

    this.lookup.delete(key);
    this.reverseLookup.delete(tail);
    this.length--;
  }
}
