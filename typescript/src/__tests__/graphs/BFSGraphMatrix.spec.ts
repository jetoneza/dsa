import bfs from "../../data_structures/graphs/BFSGraphMatrix";

//      (1) --- (4) ---- (5)
//    /  |       |       /|
// (0)   | ------|------- |
//    \  |/      |        |
//      (2) --- (3) ---- (6)
const matrix: WeightedAdjacencyMatrix = [
  [0, 3, 1, 0, 0, 0, 0], // 0
  [0, 0, 0, 0, 1, 0, 0],
  [0, 0, 7, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 5, 0, 2, 0],
  [0, 0, 18, 0, 0, 0, 1],
  [0, 0, 0, 1, 0, 0, 1],
];

describe(bfs, () => {
  it("should pass", () => {
    expect(bfs(matrix, 0, 6)).toEqual([0, 1, 4, 5, 6]);
    expect(bfs(matrix, 6, 0)).toEqual(null);
  });
});
