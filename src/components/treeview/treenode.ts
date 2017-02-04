export interface TreeNode {
  text: string;
  children?: TreeNode[];
  expanded?: boolean;
  expandedIcon?: any;
  collapsedIcon?: any;
}
