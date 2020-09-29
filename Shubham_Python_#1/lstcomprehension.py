#short method list comprehension
odd_square = [x**2 for x in range(1,11) if x % 2==1]
print(odd_square)
#[1,4,9,16,25,36,49,64,81,100]

#method no.2 long method
odd_sq = []
for i in range(1,11):
    if i % 2==1:
       odd_sq.append(i**2)

print(odd_sq)




