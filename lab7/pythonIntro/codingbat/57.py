def no_teen_sum(a, b, c):
  s=0
  ar=[a,b,c]
  for i in ar:
    if(fix_teen(i)):
      continue
    else:
      s=s+i
  return s
  
def fix_teen(n):
  if(n>=13 and n<=19 and n!=15 and n!=16):
    return True
  return False
