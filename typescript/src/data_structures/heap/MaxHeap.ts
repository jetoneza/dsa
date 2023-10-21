export class MaxHeap {
  public length: number;
  private data: number[];

  constructor() {
    this.length = 0;
    this.data = [];
  }

  debug() {
    console.log("length: ", this.length);
    console.log("data: ", this.data);
  }

  insert(value: number) {
    this.data.push(value);

    if (this.length > 0) {
      this.hepifyUp(this.length);
    }

    this.length++;
  }

  delete(): number {
    if (this.length == 0) {
      throw new Error("Can't delete in an empty heap.");
    }

    const value = this.peek();

    this.length--;

    if (this.length == 0) {
      this.data = [];

      return value;
    }

    this.data[0] = this.data[this.length];

    this.data.pop();

    this.hepifyDown(0);

    return value;
  }

  peek() {
    return this.data[0];
  }

  private hepifyUp(index: number) {
    const parentIndex = this.getParentIndex(index);
    const value = this.data[index];
    const parentValue = this.data[parentIndex];

    if (parentValue < value) {
      this.data[index] = parentValue;
      this.data[parentIndex] = value;

      this.hepifyUp(parentIndex);
    }
  }

  private hepifyDown(index: number) {
    const value = this.peek();
    const leftChildIndex = this.getLeftChildIndex(index);
    const rightChildIndex = this.getRightChildIndex(index);

    const leftValue = this.data[leftChildIndex];
    const rightValue = this.data[rightChildIndex];

    let maxChildIndex = leftChildIndex;

    if (leftValue < rightValue) {
      maxChildIndex = rightChildIndex;
    }

    if (value < this.data[maxChildIndex]) {
      this.data[index] = this.data[maxChildIndex];
      this.data[maxChildIndex] = value;

      this.hepifyDown(maxChildIndex);
    }
  }

  private getLeftChildIndex(index: number): number {
    return index * 2 + 1;
  }

  private getRightChildIndex(index: number): number {
    return index * 2 + 2;
  }

  private getParentIndex(index: number): number {
    return Math.floor((index - 1) / 2);
  }
}
