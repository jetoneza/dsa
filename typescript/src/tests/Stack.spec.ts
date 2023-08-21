import Stack from "../data_structures/Stack";

describe(Stack, () => {
  const stack = new Stack();

  it("should peek", () => {
    stack.push(1);

    expect(stack.length).toBe(1);
    expect(stack.peek()).toBe(1);
  });

  it("should push", () => {
    stack.push(2);
    stack.push(3);

    expect(stack.length).toBe(3);
    expect(stack.peek()).toBe(3);
  });

  it("should pop", () => {
    const val1 = stack.pop();
    const val2 = stack.pop();

    expect(val1).toBe(3);
    expect(val2).toBe(2);
    expect(stack.length).toBe(1);
    expect(stack.peek()).toBe(1);
  });

  it("should handle empty", () => {
    const s = new Stack();

    expect(s.peek()).toBe(undefined);
    expect(s.length).toBe(0);

    const val = s.pop();

    expect(val).toBe(undefined);
    expect(s.length).toBe(0);
  });
});
