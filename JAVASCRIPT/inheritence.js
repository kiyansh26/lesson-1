class Animal {
    speak(){
        console.log("Animal makes noise")

    }
}
class dog extends Animal{
    bark(){
        console.log("Dog is barking")
    }
}

let d = new dog()
d.speak()
d.bark()

class Human {
    constructor(name) {
        this.name = name;
    }
}

class Dog extends Human {
    constructor(name, breed) {
        super(name);        
        this.breed = breed;
    }

    show() {
        console.log("Name: " + this.name);
        console.log("Breed: " + this.breed);
    }
}
