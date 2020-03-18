import array
n = int(input())
ar = input().split()
r = 0
for i in range(1,n):
    if(int(ar[i-1])<int(ar[i])):
        r = r+1
print(r)