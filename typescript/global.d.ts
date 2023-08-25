declare type QNode<T> = {
  value: T;
  next?: QNode<T>;
};

declare type SNode<T> = {
  value: T;
  prev?: SNode<T>;
};

declare type ListNode<T> = {
  value: T;
  next?: ListNode<T>;
  prev?: ListNode<T>;
};

declare type BinaryNode<T> = {
  value: T;
  left?: BinaryNode<T>;
  right?: BinaryNode<T>;
};

declare type GraphEdge = { to: number; weight: number };
declare type WeightedAdjacencyList = GraphEdge[][];
declare type WeightedAdjacencyMatrix = number[][];
