class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}
function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
  let count = 0;

    return count;
};

console.log(rangeSumBST([10,5,15,3,7,null,18],  7,  15))