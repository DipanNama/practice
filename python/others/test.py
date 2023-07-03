# HOW XOR OPERATOIN ACTUALLY WORKS SHOWN BELOW 
import itertools
import pwn
# strings as input
one = "abcde"
two = "pqrs"

_string1 = bytes(one, "utf-8")
_string2 = bytes(two, "utf-8")
output = pwn.xor(_string1,_string2)
print(output)

original = pwn.xor(output,_string1)
print(original)
original = pwn.xor(output,_string2)
print(original)


# print(int(one,16))
# print(int(two,16))
print([ord(a) for a in one])
print([ord(a) for a in two])
print(list(zip(one,two)))

print()
_product_of_the_input = itertools.zip_longest(list(one),list(two),fillvalue=0)
print(list(_product_of_the_input))
result = [(ord(a) ^ ord(b)) for a,b in itertools.zip_longest(list(one),list(two),fillvalue='0')]
print(result)


print(bin(97)[2:])
print(bin(112)[2:])
print(int(bin(97)[2:]) ^ int(bin(112)[2:]))
print("output")
print(int("10001",2))
print("output")


print (97 ^ 112)
print ( 108 ^ 113)
result = [(ord(a) ^ ord(b)) for a,b in zip(one, two)]

print(result)

# Final thoughts : My final thoughts are that pwntools xor function can't work with different length of strings and for that reason it repeats characters of the lower length string to equally balance the two strings length