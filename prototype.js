var student=function(){
    this.name="Geetika";
    this.age=27;
    this.email="geetika@gmail.com";

}

student.prototype={
    add:"Haldwani",
    getName:function(){
        return this.name;

    }
}

var stud=new student();


console.log(stud.getName());