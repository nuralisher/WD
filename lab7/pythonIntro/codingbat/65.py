def end_other(a, b):
  a=a.lower()
  b=b.lower()
  a1=a[-len(b)::]
  b1=b[-len(a)::]
  return a1==b or b1==a
