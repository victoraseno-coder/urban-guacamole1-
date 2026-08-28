# Example variables 
x=10 #integer
y=3.14 #float
z="hello" #string
a=true #boolean<true,false>
b=[1,2,3,4] #list <array> mutable <by value>
c={1,2,3} #set
d=(1,2,3)  #tuple <list>  immutable
e={"key":"value"}
#dictionary <object:js>
#for dictionary use bracket notation

#determining the types 
#'y is ${}'
print("x is",x"its type",type(x)) #output:<class 'int'>
print(f"y is{y} its type is {type(y)}") #output:<class 'float'>
print(type(z))  #output: <class 'string'>
print(type(a))  #output: <class 'bool'>
print(type(b))  #output: <class 'list'>
print(type(c))  #output: <class 'set'>
print(type(d))  #output: <class 'tuple'>
print(type(e))  #output: <class 'dict'>
