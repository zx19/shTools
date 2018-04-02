import sys
sys.path.appenduser('./')
import TreeNode 

class Solution(object):
    """docstring for Solution"""
    def convertToBST(self, array):
        if array is None or len(array) == 0:
            return None

        return self.helper(array, 0, len(array) - 1)
        
    def helper(self, array, start, end):
        if start > end:
            return None
        mid = start + (end - start)/2
        root = TreeNode(array[mid])
        root.left = self.helper(array, start, mid - 1)
        root.right = self.helper(array, mid + 1, end)
        return root

if __name__ == '__main__':

    s = Solution()
    r = s.convertToBST([1,2])
    print(r)
