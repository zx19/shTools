from ListNode import ListNode

class Solution(object):
    def rotateRight(self, head, k):
        
        if head is None or head.next is None or k == 0:
            return head

        dummy = ListNode(0)
        dummy.next = head       


        p = dummy    
        length = 0
        while p.next:      
            length += 1
            p = p.next
        

        p.next = head
        

        step = length - k % length

        while step > 0:    
            p = p.next
            step -= 1
            
        dummy.next = p.next
        p.next = None
        
        return dummy.next

if __name__ == '__main__':
    list = ListNode(1)
    list.cons(2).cons(3).cons(4).cons(3).cons(4)
    s = Solution()
    print(list)
    r = s.rotateRight(list, 3)
    print(r)