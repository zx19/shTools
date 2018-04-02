
=begin
In Ruby, classes are never closed: you can always add methods to an existing class. 
This applies to the classes you write as well as the standard, built-in classes.
All you have to do is open up a class definition for an existing class,
and the new contents you specify will be added to whatever's there.
	
=end
# class Dog
# 	def wang
# 		puts "awa"
# 	end
	
	
# end

# class Dog
# 	def wang
# 		puts "awa------"
# 	end
	
	
# end

# Dog.new.wang
#awa------

puts File.basename('/Users/xizhang/Documents/XingShuLin/XSLUser/Example/Pods/Local Podspecs/SDWebImage.podspec.json', '.podspec.json')