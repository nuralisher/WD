def sum13(nums):
  s=0
  b=False
  for i in nums:
    if(i!=13 and not b):
      s=s+i
      b=False
    elif(b):
      b=False
    else:
      b=True
  return s
