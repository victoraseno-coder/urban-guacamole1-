"""
Object oriented programming 
<JS ,Python,C++,JAVA,etc>
------------------------
concept in programming to make work easy. by using principles
1.Enscapulation
      -keeping data and methods <functions>inside a class while restricting direct acces to internal data 
2.Abstraction
      -hiding unnecesarry complexity or implementation of details
3.Inheritance
      -one class to re use or extend properties and methods of another class 
4.Polymorphism
      -appearing in different forms.Method can have different behaviours
------------------------------------------

JS and Python are object oriented.
-->number.tostring() ,string.toLowercase()

->class ->
- this is the blueprint  for an object.<>

-> class coould be an architectural drwaing of ahouse
object ->implementation of the drwawing 

"""
#it has to have the name capitalised
#fields<properties>
class House:
    bedrooms=3
    bathrooms=2
    floors=1
    area=120
    owner=""
    location="'"
    architect="Mbeja"

    def config(self,owner,location):
        self.owner=owner
        self.location=location

    def print_self(self):
        #this<the object itself>:self<object>
        print(self)
        print(self.__dict__)#dictionary<prints all properties>    

#when access object properties use dot notation
#bracket notation is for dictionary
macrine_house=House()
macrine_house.owner="Macrine"
macrine_house.location="kikuyu"
print(f"Macrines House Owner{macrine_house.owner}")
print(f"Macrines location{macrine_house.location}")
print(f"Macrines House Bedrooms{macrines_house.bedrooms}")
print(f"Macrines House Bathrooms{macrines_house.bathrooms}")
print(f"Macrines House Floors{macrines_house.floors}")
print(f"Macrines House Area{macrines_house.area}")
print(f"Macrines House Bedrooms{macrines_house.architect}")
macrine_house.print_self()
print("End of print macrines")

Victor_house=House()
#victor_house.owner="victor"
#victor_house.location="Ruaka"
victor_house.config(owner="Victor",location="Ruaka")
Victor_house.owner="Victor"
Victor_house.location="Ruaka"
print(f"Victors House Owner{victors_house.owner}")
print(f"Victors location{victors_house.location}")
print(f"Victors House Bedrooms{victors_house.bedrooms}")
print(f"Victors House Bathrooms{victors_house.bathrooms}")
print(f"Victors House Floors{victors_house.floors}")
print(f"Victors House Area{victors_house.area}")
print(f"Victors House Bedrooms{victors_house.architect}")
print(f"printing victors house")
victor_house.print_self()
print("End of print victors")