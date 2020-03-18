import math
a = int(input())
b =  int(math.sqrt(a))
c = 0
for i in range(1,b+1):
    if(a%i==0):
        c=c+1
if(b==math.sqrt(a)):
    print(c*2-1)
else:
    print(c*2)