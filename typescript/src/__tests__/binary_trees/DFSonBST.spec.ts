import dfs from "../../data_structures/binary_trees/DFSonBST";

const ordered_tree = {
  value: 5,
  left: {
    value: 3,
    left: {
      value: 2,
      left: {
        value: 1,
      },
    },
    right: {
      value: 4,
    },
  },
  right: {
    value: 10,
    left: {
      value: 7,
      left: {
        value: 6,
      },
      right: {
        value: 8,
        right: {
          value: 9,
        },
      },
    },
    right: {
      value: 12,
      left: {
        value: 11,
      },
      right: {
        value: 13,
      },
    },
  },
} as BinaryNode<number>;

describe(dfs, () => {
  it("should pass", () => {
    // Found
    expect(dfs(ordered_tree, 1)).toEqual(true);
    expect(dfs(ordered_tree, 2)).toEqual(true);
    expect(dfs(ordered_tree, 3)).toEqual(true);
    expect(dfs(ordered_tree, 4)).toEqual(true);
    expect(dfs(ordered_tree, 5)).toEqual(true);
    expect(dfs(ordered_tree, 6)).toEqual(true);
    expect(dfs(ordered_tree, 7)).toEqual(true);
    expect(dfs(ordered_tree, 8)).toEqual(true);
    expect(dfs(ordered_tree, 9)).toEqual(true);
    expect(dfs(ordered_tree, 10)).toEqual(true);
    expect(dfs(ordered_tree, 11)).toEqual(true);
    expect(dfs(ordered_tree, 12)).toEqual(true);
    expect(dfs(ordered_tree, 13)).toEqual(true);

    // Not found
    expect(dfs(ordered_tree, 100)).toEqual(false);
    expect(dfs(ordered_tree, -1)).toEqual(false);
  });
});
