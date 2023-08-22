export type BinaryNode<T> = {
  value: T;
  left?: BinaryNode<T>;
  right?: BinaryNode<T>;
};

function pre_order_search(root: BinaryNode<number>): number[] {
  return walk([], root);
}

function walk(path: number[], curr: BinaryNode<number> | undefined) {
  if (!curr) {
    return path;
  }

  path.push(curr.value);

  walk(path, curr.left);
  walk(path, curr.right);

  return path;
}

export default pre_order_search;
