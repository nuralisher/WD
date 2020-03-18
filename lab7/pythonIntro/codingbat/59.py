def close_far(a, b, c):
  if(abs(b-a)<=1 or abs(a-c)<=1):
    if(abs(b-a)<=1 and abs(c-a)>1 and abs(c-b)>1):
      return True
    if(abs(c-a)<=1 and abs(b-a)>1 and abs(b-c)>1):
      return True
  return False
      
