let student = {
    name: "John",
    speak: function(){
        console.log("My name is " + this.name)
    }
}

student.speak()

class student {
    constructor(name, age){
        this.name = name
        this.age = age
    }
}

let s1 = new student("Peter",14)
console.log(s1.name)
console.log(s1.age)

