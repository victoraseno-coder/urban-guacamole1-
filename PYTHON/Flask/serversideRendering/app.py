from flask import Flask,send_file,render_template

#app=Flask(_name_,template_folder="customer_template")
app=Flask (__name__)

@app.route("/")
def home():
    #link ai model <>
    return render_template("home.html")


if _name_ =="_main_":
    #app.run(debug=true,port=4040)
    app.run(debug=True)
    