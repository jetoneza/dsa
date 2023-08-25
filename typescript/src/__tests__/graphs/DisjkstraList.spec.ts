import dijkstra_list from "../../data_structures/graphs/DijkstraList";

export const list: WeightedAdjacencyList = [];

//      (1) --- (4) ---- (5)
//    /  |       |       /|
// (0)   | ------|------- |
//    \  |/      |        |
//      (2) --- (3) ---- (6)
list[0] = [
  { to: 1, weight: 3 },
  { to: 2, weight: 1 },
];
list[1] = [
  { to: 0, weight: 3 },
  { to: 2, weight: 4 },
  { to: 4, weight: 1 },
];
list[2] = [
  { to: 1, weight: 4 },
  { to: 3, weight: 7 },
  { to: 0, weight: 1 },
];
list[3] = [
  { to: 2, weight: 7 },
  { to: 4, weight: 5 },
  { to: 6, weight: 1 },
];
list[4] = [
  { to: 1, weight: 1 },
  { to: 3, weight: 5 },
  { to: 5, weight: 2 },
];
list[5] = [
  { to: 6, weight: 1 },
  { to: 4, weight: 2 },
  { to: 2, weight: 18 },
];
list[6] = [
  { to: 3, weight: 1 },
  { to: 5, weight: 1 },
];

describe(dijkstra_list, () => {
  it("should pass", () => {
    expect(dijkstra_list(0, 6, list)).toEqual([0, 1, 4, 5, 6]);
  });
});
