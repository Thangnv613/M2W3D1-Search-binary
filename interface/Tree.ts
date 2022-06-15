import { TreeNode } from '../TreeNode';
export interface Tree<T>{
    insert(data: T): TreeNode<T>|undefined;
    inoder(node: TreeNode<T>): void;
    getSize(): number ;
}