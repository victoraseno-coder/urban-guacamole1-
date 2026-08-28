# testing kwargs 
#
#list of kwargs 
#the list of kwargs 
def mykwargs(**kwargs):
    print("kwargs is ",type(kwargs))
    print(kwargs)
    #print("b is ",kwargs["b"])


#scenario a=23,b=30=? {a:23,b:30}
mykwargs(a=23,b:30)

#scenario bno 3
#name ="samson" email="samson@gmail.com"
#mykwargs({"name":"samson,"})
mykwargs(name="samson",email="sam@sam.com",dict={"a":"a"})