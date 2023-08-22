import in_order_search from "../../data_structures/binary_trees/InOrderTree";
import pre_order_search, {
  BinaryNode,
} from "../../data_structures/binary_trees/PreOrderTree";

const tree = {
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

describe("Binary tree traversal", () => {
  it(`should traverse in pre order`, () => {
    const path = pre_order_search(tree);

    expect(path).toEqual([50, 21, 11, 9, 1, 4, 2, 3, 32, 13, 7, 6, 8, 5, 2]);
  });

  it(`should traverse in in order`, () => {
    const path = in_order_search(tree);

    expect(path).toEqual([9, 11, 1, 21, 2, 4, 3, 50, 7, 13, 6, 32, 5, 8, 2]);
  });
});
