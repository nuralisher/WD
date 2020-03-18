def lone_sum(a, b, c):
  s = 0
  if(a!=b and a!=c):
    s = s +a
  if(b!=c and b!=a):
    s=s+b
  if(c!=a and c!=b):
    s = s+c
  return s
