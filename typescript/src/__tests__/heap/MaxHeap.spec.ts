import { MaxHeap } from "../../data_structures/heap/MaxHeap";

describe(MaxHeap, () => {
  const heap = new MaxHeap() 
  
  it("should insert", () => {
    heap.insert(1);
    heap.insert(2);

    expect(heap.length).toEqual(2);
    expect(heap.peek()).toEqual(2);
  })

  it("should delete", () => {
    heap.delete();

    expect(heap.length).toEqual(1);
  })

  it("should delete and hepify up", () => {
    heap.insert(2);
    heap.insert(10);
    heap.insert(5);
    heap.insert(3);
    heap.insert(20);
    heap.insert(14);
    heap.insert(7);

    expect(heap.length).toEqual(8);
    expect(heap.peek()).toEqual(20);

    heap.delete();

    expect(heap.length).toEqual(7);
    expect(heap.peek()).toEqual(14);

    heap.delete();

    expect(heap.length).toEqual(6);
    expect(heap.peek()).toEqual(10);

    heap.delete();
    heap.delete();
    heap.delete();
    heap.delete();

    expect(heap.length).toEqual(2);
    expect(heap.peek()).toEqual(2);

    heap.delete();
    heap.delete();

    expect(heap.length).toEqual(0);
  })
})
