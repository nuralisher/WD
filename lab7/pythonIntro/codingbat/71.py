def sum67(nums):
  s=0
  b=True
  for i in nums:
    if(i!=6 and b):
      s=s+i
    elif(i==7):
      b=True
    elif(i==6):
      b=False
  return s
