age=20 

# if(<conditions>){

#}
if age>18: #end of for loop or if <>
    print("you can drink")
    print("something Else")
    if age==23:
        print("this is awesome")
    print("another line")
#else if 
elif age ==44:
    print("you are not that young")
else:
    print("last else")


k=0


while k<30:
    k=k+1
    print("k is",k)


# range(start,stop,step)
for i in range(0,5,1):
    print("I is",i)

ar=[23,helo,67,45,40]#5
#for(let i=0;i=0;i<ar.length;i++){0-99}
for i in range(0,len(ar)):  
    single_item=ar[i]
    print(single_item)

#for(let single item of ar)
for single_item in ar:
    print("single item",single_item)
              