import random

# first_four_digits = '700'

# def digit_gen():
# 	return random.randint(0,9)
# for x in range(0,100000):
# 	number = f"{first_four_digits}{digit_gen()}{digit_gen()}{digit_gen()}{digit_gen()}{digit_gen()}{digit_gen()}{digit_gen()}"
# 	print(number)
# 	with open('numbers.txt','a') as f:
# 		f.write(number+'\n')

# print("File writen Successfully")

with open('final.txt','r') as f:
	contents = f.read()
	print(contents)