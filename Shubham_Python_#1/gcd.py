def gcd(a,b):
    if a==0:
        return b
    if b==0:
        return a
    if a==b:
        return a
    if a > b:
        return gcd(a-b,b)
    else:
        return gcd(a,b-a)
    
print(gcd(36,60))
print(gcd(60,36))
    
