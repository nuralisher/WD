def xyz_there(str):
  if(len(str)==3):
    if(str[0]=='x' and str[1]=='y'and str[2]=='z'):
        return True
  for i in range(len(str)-3):
    if(i!=0):
      if(str[i]!='.' and str[i+1]=='x'and str[i+2]=='y' and str[i+3]=='z'):
        return True
    else:
      if(str[i]=='x' and str[i+1]=='y'and str[i+2]=='z'):
        return True
  return False
