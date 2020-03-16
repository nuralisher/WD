import array
# from numpy import *
#A
# input()
# ar = input().split()
# ar = ar[::2]
# print(*ar)

#B
# input()
# ar = input().split()
# for i in ar:
#     if(int(i)%2==0):
#         print(i)

#C
# input()
# ar = input().split()
# r = 0
# for i in ar:
#     if(int(i)>0):
#         r = r+1
# print(r)

#D
# n = int(input())
# ar = input().split()
# r = 0
# for i in range(1,n):
#     if(int(ar[i-1])<int(ar[i])):
#         r = r+1
# print(r)

#E
# n = int(input())
# ar = input().split()
# r = 0
# for i in range(1,n):
#     if( int(ar[i-1])*int(ar[i])>=0):
#         r =1
#         print('YES')
#         break
# if(r==0):

#F
# n = int(input())
# ar = input().split()
# r = 0
# for i in range(1,n-1):
#     if( int(ar[i-1])<int(ar[i]) and int(ar[i+1])<int(ar[i]) ):
#         r = r+1
        
# print(r)

#G
n = int(input())
ar = input().split()
ar = ar[-1::-1]
print(*ar)