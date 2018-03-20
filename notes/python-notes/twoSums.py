#! /usr/bin/env python
#coding=utf-8

class Solution(object):
	"""docstring for ClassName"""
	def __init__(self):
		super(Solution, self).__init__()

	def twoSum(self, num, target):
		dict = {}

		for i in xrange(0,len(num)):
			if dict.get(target - num[i], None) == None:
				dict[num[i]] = i
			else:

				return (dict[target - num[i]]+1, i+ 1)


if __name__ == '__main__':
	num = [3, 2, 4]
	target = 7
	solution = Solution()
	print solution.twoSum(num, target)