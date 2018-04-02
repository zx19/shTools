class ListNode(object):
    """docstring for ListNode"""
    def __init__(self, value):
        super(ListNode, self).__init__()
        self.value = value
        self.next = None

    def cons(self, value):
        self.next = ListNode(value)
        return self.next

    def __str__(self):
        loca = self
        str1 = str(self.value)
        while loca.next:
            loca = loca.next
            str1 += "->"
            str1 += str(loca.value)
            
        return str1