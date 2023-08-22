export default function bfs(head: BinaryNode<number>, val: number): boolean {
  const q: (BinaryNode<number> | undefined)[] = [head];

  while (q.length) {
    const curr = q.shift();

    if (!curr) {
      continue;
    }

    if (curr.value === val) {
      return true;
    }

    q.push(curr.left);
    q.push(curr.right);
  }

  return false;
}
