function in_order_search(root: BinaryNode<number>): number[] {
  return walk([], root);
}

function walk(path: number[], curr: BinaryNode<number> | undefined) {
  if (!curr) {
    return path;
  }

  walk(path, curr.left);

  path.push(curr.value);

  walk(path, curr.right);

  return path;
}

export default in_order_search;
