import compare from "../../data_structures/binary_trees/CompareBinaryTrees";

describe(compare, () => {
  it("should pass", () => {
    const firstTree = {
      value: 10,
      left: {
        value: 7,
      },
      right: {
        value: 6,
      },
    };

    const secondTree = {
      value: 10,
      left: {
        value: 7,
      },
      right: {
        value: 6,
      },
    };

    const thirdTree = {
      value: 10,
      left: {
        value: 7,
      },
      right: {
        value: 4,
      },
    };

    const fourthTree = {
      value: 10,
      left: {
        value: 7,
        left: {
          value: 6,
        },
      },
    };

    expect(compare(firstTree, secondTree)).toEqual(true);
    expect(compare(firstTree, thirdTree)).toEqual(false);
    expect(compare(firstTree, fourthTree)).toEqual(false);
  });
});
