//let a=30;
//function abc(){
  //  let a=40;
    //console.log(a);
//}

//abc();
//console.log(a);


//const a={
  //  "name":"Geet",
  //  "age":10

//}

//a.email="Geetikapant0805@gnmail.com";
//a.age=20;

//console.log(a);

//var name="geetika";
////var age=10;
//console.log("Hii %s you are %s years old",name,age);
//console.log("Hii" +name+ "you are" +age+ " years old");
//templating script
//console.log(`Hii ${name} you are ${age} years old`);

class Users{
    constructor(){
        this.name="Geetika";
        this.age=28;
    }

    getName(){
        return this.name;
    }
}

var user=new Users();
console.log(user.getName());