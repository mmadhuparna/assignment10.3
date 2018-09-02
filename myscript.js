//creating class
class Dog {
  constructor(name){
  this.name = name;  
  }
  //defining method
  speak(){
    return "woof";
  }
} 
//creating extended class of class Dog 
class Labrador extends Dog {
  constructor(color, breedWeight){
  //super keyword to call functions and properties from parent class
  super(name);
  this.color = color;
  this.breedWeight = breedWeight;
  }
  //override method speak
  speak(){
    return "Labrador says WOOF"
  }
}
var y = new Dog("pomerian")//creating object of parent class
 console.log(y.speak());// give output "woof"
 console.log(y.name);
 
 var x = new Labrador("white", 5);// class of extended class
 console.log(x.speak()); //gives "Labrador says WOOF".
 console.log(x.color);  // gives color white
 
