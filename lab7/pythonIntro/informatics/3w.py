# A
# i = 1
# a = int(input())
# while(i*i<=a):
#     print(i*i)
#     i=i+1

#B
# a = int(input())
# i = 2
# while(a%i!=0):
#     i=i+1
# print(i)

#C
# a = int(input())
# i = 1
# while(i<=a):
#     print(i)
#     i = i*2

#D
# a = int(input())
# i = 1
# while(i<a):
#     i = i*2
# if(i==a):
#     print('YES')
# else:
#     print('NO')

#D
n = int(input())
k = 0
while(2**k<n):
    k=k+1
print(k)