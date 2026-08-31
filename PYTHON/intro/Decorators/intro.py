""
#are powerfull for modifying or extending the behaviour of functions
or methods without changing their code#
"
##a decorator function should take another function
as an argument/parameter##
##it should have a wrapper function this should be able to call the passed function

def my_deco(func):
    def wrapper():
        print("before we call the function")#change this bit out
        func()#try when coments are turned off and on
        print("after we call the function")#change this bit out 
    return wrapper 

def hello():
    print("helo world function executes") 
    print("hello world")


@my_deco 
def french hello():
    print("french hello function")
    print("bonjuor world")           

#->french hello->my_deco(french_hello)->wrapper()->french_helo
#->hello()->hello
french_hello()    