import math

def areaTriangle(a,b,c):
    s = (a+b+c)/2
    area = math.sqrt(s*(s-a)*(s-b)*(s-c))
    return area

X = 5
Y = 7
Z = 8
print(areaTriangle(X,Y,Z))