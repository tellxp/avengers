import {TreeNode} from "./treenode";
export interface TreeView {
  name: string;
  width?: any;
  height?: any;
  backgroundColor?: any;
  borderStyle?: any;
  cursor?: any;
  nodes: TreeNode[];
}
