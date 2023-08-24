import MinHeap from "../../data_structures/heap/MinHeap";

describe(MinHeap, () => {
  it("should pass", () => {
    const heap = new MinHeap();
    heap.insert(10);
    heap.insert(6);
    heap.insert(3);
    heap.insert(2);
    heap.insert(1);

    expect(heap.length).toEqual(5);
    expect(heap.delete()).toEqual(1);
    expect(heap.length).toEqual(4);
    expect(heap.delete()).toEqual(2);
    expect(heap.length).toEqual(3);
    expect(heap.delete()).toEqual(3);
    expect(heap.length).toEqual(2);
    expect(heap.delete()).toEqual(6);
    expect(heap.length).toEqual(1);

    heap.insert(5);
    expect(heap.length).toEqual(2);

    expect(heap.delete()).toEqual(5);
    expect(heap.length).toEqual(1);
    expect(heap.delete()).toEqual(10);
    expect(heap.length).toEqual(0);
    expect(heap.delete()).toEqual(-1);
    expect(heap.length).toEqual(0);
  });
});
