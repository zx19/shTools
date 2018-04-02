from ListNode import ListNode

class Solution(object):
    def oddEvenList(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        if head is None: 
            return head
            
        odd = oddHead = head
        even = evenHead = head.next
        
        while even and even.next:
            odd.next = odd.next.next
            even.next = even.next.next
            odd = odd.next
            even = even.next
        odd.next = evenHead
        
        return oddHead

if __name__ == '__main__':

    list = ListNode(1)
    list.cons(2).cons(3).cons(4).cons(3).cons(4)
    s = Solution()
    r = s.oddEvenList(list)
    print(r)