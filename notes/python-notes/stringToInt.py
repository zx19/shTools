#!/usr/bin/env python
#coding=utf-8
import sys
class Solution:
	"""docstring for Solution"""
	
	def strtoi(self, s):
		if s == None:
			return None
		minus = False
		s = s.strip()
		if s[:1] == '+':
			s = s[1:]

		if s[:1] == '-':
			s = s[1:]
			minus = True

		value = 0l
		for ch in s:
			if ch >= '0' and ch <= '9':
				value *= 10
				value += ord(ch)-ord('0')
			# else:
				

			if (minus and value > sys.maxint + 1l) or (minus == False and value > sys.maxint) :
				break
		if minus == True:
			value = -value

		if value > sys.maxint:
			value = sys.maxint

		if value < -sys.maxint - 1:
			value = -sys.maxint - 1
			pass
		return value



sl = Solution()
# print sys.maxint
# print int('100dd34')
print sl.strtoi()