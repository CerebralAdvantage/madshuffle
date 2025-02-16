import random

r=[0,1,2,3,4,5,6,7,8,9]
deck = list(range(10000))

# first, shuffle the 10 different thousands digits
for _ in range(20000):
  [a,b] = random.choices(r,k=2)
  c=random.randint(0,999)
  a = a * 1000 + c  # so, 6947
  b = b * 1000 + c  # and 1947
  deck[a], deck[b] = deck[b], deck[a]

# next, shuffle 100's within a given cell of 1000
for _ in range(20000):
  [a,b] = random.choices(r,k=2)
  z=random.randint(0,9) * 1000   # first, pick a cell of 1000 (0,1000,2000, etc)
  c=random.randint(0,99) # this is the tens and units (last two digits)
  a = z + (a * 100) + c  # for instance 9204 next time 5897
  b = z + (b * 100) + c  # and          9704    and    5397
  deck[a], deck[b] = deck[b], deck[a]

# finally, shuffle each cell of 100
for i in range(0, 10000, 100): # make sure to hit every group of 100
  for j in range(99, -1, -1):  # shuffle each group using Fisher-Yates
    a = random.randint(0,j)
    deck[a+i], deck[j+i] = deck[j+i], deck[a+i]

# and that's it!  Seems shorter, somehow.

#showoff
for j in range(0,10000,100):
  for v in range(0,100,20):
    for i in range(0,20):
      num = deck[j+v+i]
      if num < 10: print("  ",num,end=" "); continue
      if num < 100: print(" ",num,end=" "); continue
      if num < 1000: print("",num,end=" "); continue
      print                  (num,end=" ")
    print("")
  print("\n")
