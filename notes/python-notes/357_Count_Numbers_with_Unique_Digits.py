

class Solution(object):
	"""docstring for Solution"""
	def countnumberswithuniquedigits(self,n):
		n = min(10, n)
		dp = [1] + [9]*n
		for k in range(2, n+1):
			for i in range(9, 9-k+1, -1):
				dp[k] *= i


		return sum(dp)
		

if __name__ == '__main__':
	s = Solution()
	re = s.countnumberswithuniquedigits(9)
	print(re)