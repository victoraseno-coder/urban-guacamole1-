def args_kwargs (*args,**kwargs):
    print("__________")
    print("all args",args)
    print("all kwags",kwargs)
    printr("______________-")


# Error 
#args_kwargs(a=2,b=30,45,39)
args_kwargs(45,39,a=2,b=30,)    