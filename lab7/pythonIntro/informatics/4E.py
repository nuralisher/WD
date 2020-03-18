import array
n = int(input())
ar = input().split()
r = 0
for i in range(1,n):
    if( int(ar[i-1])*int(ar[i])>=0):
        r =1
        print('YES')
        break
if(r==0):