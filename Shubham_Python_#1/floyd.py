# 1
# 2     3
# 4     5     6
# 7     8     9     10
# 11     12     13     14     15
n = int(input("enter a number :"))
w = 1

for i in range(1,n):
    for j in range(i):
        print(w,end=" ")
        w = w+1
    print()