/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
      if (root === null) {
        return 0;
    }

    if (low <= root.val && root.val <= high) {
        return root.val + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high);
    } else if (root.val < low) {
        return rangeSumBST(root.right, low, high);
    } else {
        return rangeSumBST(root.left, low, high);
    }
};s
console.log(rangeSumBST([10,5,15,3,7,null,18],  7,  15))