import math
#3A
# a = int(input())
# b = int(input())
# for i in range(a,b+1):
#     if(i%2==0):
#         print(i)

# 3B
# a = int(input())
# b = int(input())
# c = int(input())
# d = int(input())
# for i in range(a ,b+1):
#     if(i%d==c):
#         print(i)

#3C
# a = int(input())
# b = int(input())
# for i in range(a ,b+1):
#     if(math.sqrt(i)==int(math.sqrt(i))):
#         print(i)

#3G
# a = int(input())
# for i in range(2,a+1):
#     if(a%i==0):
#         print(i)
#         break

# 3H
# a = int(input())
# for i in range(1,a+1):
#     if(a%i==0):
#         print(i)

# 3I
# a = int(input())
# b =  int(math.sqrt(a))
# c = 0
# for i in range(1,b+1):
#     if(a%i==0):
#         c=c+1
# if(b==math.sqrt(a)):
#     print(c*2-1)
# else:
#     print(c*2)

#3J
# c = 0
# for i in range(0,100):
#     c = c + int(input())
# print(c)

#3K
c = 0
a = int(input())
for i in range(0,a):
    b = int(input())
    if(b==0):
        c=c+1
print(c)