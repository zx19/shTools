
#!/usr/bin/env python
#coding=utf-8

class Solution(object) :
    def l(self,s):
        res = 0
        start = 0
        dict = {}

        for end, ch in enumerate(s):
            if ch in dict and d[ch] >= start:
                start = dict[ch] + 1

            dict[ch] = end

            res = max(res, end - start + 1)
        return  res

    def expandAroundCenter(self, s, left, right):

          while left >= 0 and right <= len(s) - 1 and s[left] == s[right]:
              left -= 1
              right += 1

          return s[left + 1:right]

    def longestPali(self, s):

        if len(s) == 0:
            return ""

        longest = s[0:1]

        for center in xrange(0,len(s)):
            p1 = self.expandAroundCenter(s, center, center)
            # print p1
            if len(p1) > len(longest):
                longest = p1

            p2 = self.expandAroundCenter(s, center, center + 1)
            if len(p2) > len(longest):
                longest = p2

        return longest
                
    def lengthOfLongestSubstring(self, s) :

        res     = 0
        start   = 0
        d       = {}

        for end, ch in enumerate(s) : 

        
            if ch in d and d[ch] >= start :


                start = d[ch] + 1


            d[ch] = end

            #print "[%d, %d] -=> %s, length = %d" % (start, end, s[start:end + 1], end - start + 1)


            res = max(res, end - start + 1)

        return res


if __name__ == "__main__" :


    solution = Solution()
    print solution.longestPali("bbcefecbabdgc")