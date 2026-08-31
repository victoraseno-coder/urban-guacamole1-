#kwargs and printing out when a function is called 

def log_deco(func):
    def wrapper(*args,**kwargs):
        print("-------------")
        print("Args",args)
        print("kwargs",kwargs)
        result= func(*args,**kwargs)
        print(f"function called was {func._name_}")
        print("results",results)
        print("---------")
    return wrapper

    @log_deco
    def hello():
        print("hello world")
        return 123

    @log_deco
    def sum(a,b):
        ans=a+b
        return ans 

    sum(a=20,b=30) #kwargs

    sum(1,5)# args       