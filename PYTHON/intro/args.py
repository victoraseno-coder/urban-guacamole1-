#Tuple 
#

def my_args(*args):
    print (f"Args type of args{type(args)}")
    print (args)
    print (f"first arg {args[0]}")
    print ("____________")

#a=30,b
my_args(30,67,97,100)
my_args("hello",True,34) 

def area of a rectangle(length,width):
    area= length*width
    print("__________")
    print(f"for rectangle with legnth{length} and width{width}are is {area}")
    print("___________-")

area_rectangle(20,10)

#function to sum numbers
def sum(a,b):
    ans=a+b

def sum2(*args):
    #tupple
    ans=0
    for n in args:
        print(f"n is in{n}")
        ans=ans+n
    print (f"sum is{ans}")

sum2(29,49,34,40,69,98)            