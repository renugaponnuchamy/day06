var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    // Day 06 :OOPS TASK
    // Write a “person” class to hold all the details.
    class Person{
       
        constructor(name,age,qualificatio){
            this.name=name;
            this.age=age;
            this.qualification=qualificatio;
        }
    
      introduceSelf() {
    console.log(`Hi! I'm ${this.name}  ${this.age} ${this.qualification}`);
  }
   }
  var p1=new Person("senthil","31","B.E civil");
  p1.introduceSelf();


    // write a class to calculate the uber price.
    class Uper{
        constructor(name,km){
            this.name=name;
            this.km=km;

        }
        calculate(){
         const amount=18*this.km;
         console.log(`${this.name} rides ${this.km} km.The final amount is ${amount}`);
        }
    }
var u1=new Uper("guvi","32");

u1.calculate();