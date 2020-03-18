def centered_average(nums):
  mn=min(i for i in nums)
  mx=max(i for i in nums)
  s=0
  for i in nums:
    s=s+i
  s=s-mn-mx
  return s/(len(nums)-2)
