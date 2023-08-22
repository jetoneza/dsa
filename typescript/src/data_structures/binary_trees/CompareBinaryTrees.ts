/**
 * Problem:
 * Compare two binary trees if they are equal in both shape and structure
 */
export default function compare(
  a: BinaryNode<number> | undefined,
  b: BinaryNode<number> | undefined
): boolean {
  if (!a && !b) {
    return true;
  }

  if (!a || !b) {
    return false;
  }

  if (a.value !== b.value) {
    return false;
  }

  return compare(a.left, b.left) && compare(a.right, b.right);
}
