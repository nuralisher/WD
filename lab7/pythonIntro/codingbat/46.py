def date_fashion(you, date):
  mx = max(you ,date)
  mn = min(you ,date)
  if(mn<=2):
    return 0
  elif(mx>=8):
    return 2
  else:
    return 1
  
