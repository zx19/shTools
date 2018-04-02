#give a triangle, find the minimum path sum from top to bottom. each step you may move to adjacent
#numbers on the row below 

#for example ,give the following triangle
"""
[
[2],
[1,2,3],
[1,2,3,4]
]

"""

class Solution(object):
	"""docstring for Solution"""
	def minimumTotal(self, triangle):
		n = len(triangle)
		dp = triangle[n-1]
		for i in range(n-2,-1,-1):
			for j in range(i+1):
				dp[j] = min(dp[j], dp[j+1]) + triangle[i][j]

		return dp[0]


if __name__ == '__main__':
	s = Solution()
	re = s.minimumTotal([[2],[3,4,3],[1,2,3,5]])
	print(re)