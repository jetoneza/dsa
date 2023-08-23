export default function dfs(
  head: BinaryNode<number> | undefined,
  needle: number
): boolean {
  if (!head) {
    return false;
  }

  if (head.value === needle) {
    return true;
  }

  if (head.value < needle) {
    return dfs(head.right, needle);
  }

  return dfs(head.left, needle);
}
