def cat_dog(str):
  return count_cat(str)==count_dog(str)
  
def count_cat(str):
  r = 0
  for i in range(len(str)-2):
    if(str[i]=='c' and str[i+1]=='a' and str[i+2]=='t'):
      r=r+1
  return r

def count_dog(str):
  r = 0
  for i in range(len(str)-2):
    if(str[i]=='d' and str[i+1]=='o' and str[i+2]=='g'):
      r=r+1
  return r

