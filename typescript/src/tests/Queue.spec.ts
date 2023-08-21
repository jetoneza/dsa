import Queue from "../data_structures/Queue";

describe("Queue", () => {
  const queue = new Queue();

  it("should peek", () => {
    queue.enqueue(1);

    expect(queue.length).toBe(1);
    expect(queue.peek()).toBe(1);
  });

  it("should enqueue", () => {
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.length).toBe(3);
    expect(queue.peek()).toBe(1);
  });

  it("should deque", () => {
    const val1 = queue.deque();
    const val2 = queue.deque();

    expect(val1).toBe(1);
    expect(val2).toBe(2);
    expect(queue.length).toBe(1);
    expect(queue.peek()).toBe(3);
  });
});
