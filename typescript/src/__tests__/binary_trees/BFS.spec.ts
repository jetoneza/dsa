import bfs from "../../data_structures/binary_trees/BFS";
import { tree } from "./BinaryTreeTraversal.spec";

describe(bfs, () => {
  it("should pass", () => {
    // Found
    expect(bfs(tree, 50)).toEqual(true);
    expect(bfs(tree, 8)).toEqual(true);
    expect(bfs(tree, 5)).toEqual(true);
    expect(bfs(tree, 32)).toEqual(true);
    expect(bfs(tree, 13)).toEqual(true);

    // Not found
    expect(bfs(tree, 100)).toEqual(false);
    expect(bfs(tree, -1)).toEqual(false);
  })
})
