def make_chocolate(small, big, goal):
  goal = goal-5*big
  for i in range(1,big+2):
    if(goal>=0 and goal<=small):
      return goal
    goal=goal+5
  return -1
