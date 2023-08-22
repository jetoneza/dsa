import { BinaryNode } from "./PreOrderTree";

function post_order_search(root: BinaryNode<number>): number[] {
  return walk([], root);
}

function walk(path: number[], curr: BinaryNode<number> | undefined) {
  if (!curr) {
    return path;
  }

  walk(path, curr.left);
  walk(path, curr.right);

  path.push(curr.value);

  return path;
}

export default post_order_search;
