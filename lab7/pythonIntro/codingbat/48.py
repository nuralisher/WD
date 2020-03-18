def caught_speeding(speed, is_birthday):
  a=0
  if(is_birthday):
    a=5
  if(speed<=60+a):
    return 0
  elif(speed<=80+a):
    return 1
  else:
    return 2
