import { TreeNode } from './../TreeNode';
import { Tree } from './../interface/Tree';

export class BinaryTree<T> implements Tree<T> {
    root: TreeNode<T> | null;
    totalNode: number;
    constructor() {
        this.root = null;
        this.totalNode = 0;
    }
    getSize(): number {
        return this.totalNode

    }
    inoder(node: TreeNode<T>): void {
        if(node){
            console.log(node.data);
            if(node.left){
                this.inoder(node.left);
            }
            if(node.right){
                this.inoder(node.right);
            }
        }
    }
    insert(data: T): TreeNode<T> | undefined{
        if (!this.root) {
            this.root = new TreeNode<T>(data);
            this.totalNode++;
        }
        else {
            let node = new TreeNode<T >(data);
            let currentNode = this.root

            while (currentNode) {
                if (data < currentNode.data) {
                    if (!currentNode.left) {
                        currentNode.left = node;
                        break;
                    }
                    currentNode = currentNode.left;
                }
                else if (data > currentNode.data) {
                    if (!currentNode.right) {
                        currentNode.right = node;
                        break;
                    }
                    currentNode = currentNode.right;

                }
            }
            this.totalNode++;
            return currentNode;
        }
    }
}