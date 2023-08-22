import DoublyLinkedList from "../data_structures/DoublyLinkedList";

describe(DoublyLinkedList, () => {
  const list = new DoublyLinkedList();

  it("should append", () => {
    expect(list.length).toBe(0);

    list.append(1);
    list.append(2);
    list.append(3);

    // List: [1, 2, 3]

    expect(list.length).toBe(3);
  });

  it("should get", () => {
    const item1 = list.get(0);
    const item2 = list.get(1);
    const item3 = list.get(2);

    expect(item1).toBe(1);
    expect(item2).toBe(2);
    expect(item3).toBe(3);
    expect(list.length).toBe(3);
  });

  it("should prepend", () => {
    list.prepend(-1);

    // List: [-1, 1, 2, 3]

    const item1 = list.get(0);
    const item2 = list.get(1);

    expect(item1).toBe(-1);
    expect(item2).toBe(1);
    expect(list.length).toBe(4);
  });

  it("should insert at", () => {
    list.insertAt(10, 2);

    // List: [-1, 1, 10, 2, 3]

    const item = list.get(2);

    expect(item).toBe(10);
    expect(list.length).toBe(5);
  });

  it("should remove", () => {
    list.remove(10);

    // List: [-1, 1, 2, 3]

    const item = list.get(2);

    expect(item).toBe(2);
    expect(list.length).toBe(4);
  });

  it("should remove at", () => {
    const removed = list.removeAt(2);

    // List: [-1, 1, 2, 3]

    const item = list.get(2);

    expect(removed).toBe(2);
    expect(item).toBe(3);
    expect(list.length).toBe(3);
  });
});
