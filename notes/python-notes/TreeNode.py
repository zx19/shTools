class TreeNode(object):
    """docstring for Solution"""
    def __init__(self, value):
        super(TreeNode, self).__init__()
        self.value = value
        self.left = None
        self.right = None

    def __str__(self):
        node = self
        return self.recurstr(node)

    def recurstr(self,node):
        if node is None:
            return "None"

        str1 = str(node.value) + "--"
        if node.left :
            str1 = self.recurstr(node.left) + str1
        if node.right :
            str1 = str1 + self.recurstr(node.right)

        return str1