import pre_order_search, {
  BinaryNode,
} from "../../data_structures/binary_trees/PreOrderTree";

const head = {
  value: 50,
  left: {
    value: 21,
    left: {
      value: 11,
      left: {
        value: 9,
      },
      right: {
        value: 1,
      },
    },
    right: {
      value: 4,
      left: {
        value: 2,
      },
      right: {
        value: 3,
      },
    },
  },
  right: {
    value: 32,
    left: {
      value: 13,
      left: {
        value: 7,
      },
      right: {
        value: 6,
      },
    },
    right: {
      value: 8,
      left: {
        value: 5,
      },
      right: {
        value: 2,
      },
    },
  },
} as BinaryNode<number>;

describe(pre_order_search, () => {
  it("should traverse", () => {
    const nums = pre_order_search(head);

    expect(nums).toEqual([50, 21, 11, 9, 1, 4, 2, 3, 32, 13, 7, 6, 8, 5, 2]);
  });
});
