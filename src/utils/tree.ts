interface TreeNode {
  id: number | string;
  children?: TreeNode[];
  [key: string]: any;
}

export function flattenTree(tree: TreeNode[]): TreeNode[] {
  const result: TreeNode[] = [];

  function traverse(nodes: TreeNode[]) {
    for (const node of nodes) {
      const { children, ...rest } = node;
      result.push(rest);
      if (children && Array.isArray(children)) {
        traverse(children);
      }
    }
  }

  traverse(tree);
  return result;
}
