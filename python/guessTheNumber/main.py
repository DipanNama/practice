# -*- coding: utf-8 -*-
# @Author: Dipan Nama
# @Date:   2023-05-12 22:20:15
# @Last Modified by:   Dipan Nama
# @Last Modified time: 2023-05-12 23:11:43

import random
while True:
	ans = input("Would you like to play? [yes/no]: ")
	target = random.randint(1,100)
	count = 5
	start = 1
	end = 100
	if ans.lower().strip() == "yes":
		for i in range(1,count+1):
			print(f"You have {count} guesses left!")
			guess = int(input(f"Guess the number between [{start} to {end}]: "))
			if guess == target:
				print(f"you have gusseed the right number in {i} guesses")
				break
			else:
				print("Wrong guess!!!")
				count -= 1
				if count == 0:
					print("You have no more guesses left!")
				if guess < target:
					start = guess
				else:
					end = guess
	else:
		break
		print("Exiting...")