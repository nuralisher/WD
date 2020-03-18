def count_hi(str):
  r = 0
  for i in range(len(str)-1):
    if(str[i]=='h' and str[i+1]=='i'):
      r=r+1
  return r
