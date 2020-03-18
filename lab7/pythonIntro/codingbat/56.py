def lucky_sum(a, b, c):
  ar = [a,b,c]
  s=0
  for i in ar:
    if(i==13):
      return s
    s=s+i
  return s
