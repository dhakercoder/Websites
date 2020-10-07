import math

def area_of_triangle(a,b,c):
    if a <= 0 or b <= 0 or c <= 0:
        print('Negative/Zero Value of side is not acceptable')
        return 0 
    
    if a+b < c or b+c < a or c+a < b:
        print('Sum of two sides is always greater than third side in a Triangle')
        return 0 

    s = (a+b+c)/2
    area = math.sqrt(s*(s-a)*(s-b)*(s-c))
    return area 


# a = float(input('Please enter first side : '))
# b = float(input('Please enter second side : '))
# c = float(input('Please enter third side : '))

a,b,c = map(int, input('Enter three sides of triangle with 1 space : ').split())
print(area_of_triangle(a,b,c))