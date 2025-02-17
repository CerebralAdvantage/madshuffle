import random

r=[0,1,2,3,4,5,6,7,8,9]
deck = list(range(10000))

# isolate and swap random pairs of 1000's digits
for _ in range(20000):
  [a,b] = random.choices(r,k=2)
  c=random.randint(0,999)
  a = a * 1000 + c
  b = b * 1000 + c
  deck[a], deck[b] = deck[b], deck[a]

# isolate and swap random pairs of 100's digits
for _ in range(20000):
  [a,b] = random.choices(r,k=2)
  z=random.randint(0,9) * 1000   # first, pick a cell of 1000 (0,1000,2000, etc)
  c=random.randint(0,99) # this is the tens and units (last two digits)
  a = z + (a * 100) + c  # for instance 9204
  b = z + (b * 100) + c  # and          9704
  deck[a], deck[b] = deck[b], deck[a]

# isolate and swap random pairs of 10's digits
for _ in range(20000):
  [a,b] = random.choices(r,k=2)
  z=random.randint(0,9)  # first, pick the last digit
  c=random.randint(0,99) # this is the thousands and hundreds (first two digits)
  a = c*100 + a*10 + z  # for instance 7287
  b = c*100 + b*10 + z  # and          7207
  deck[a], deck[b] = deck[b], deck[a]

# finally, triple shuffle (Fisher-Yates) each group of 10
for i in range(0, 10000, 10):
  for t in range(3):
    for j in range(9, -1, -1):
      a = random.randint(0,j)
      deck[a+i], deck[j+i] = deck[j+i], deck[a+i]

#showoff
for j in range(0,10000,100):
  for v in range(0,100,10):
    for i in range(0,10):
      num = deck[j+v+i]
      if num < 10: print("  ",num,end=" "); continue
      if num < 100: print(" ",num,end=" "); continue
      if num < 1000: print("",num,end=" "); continue
      print                 (num, end=" ")
    print("")
  print("\n")
