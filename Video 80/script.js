// let obj = {
// a: 1, 
// b: "Mohit"
// }

// console.log(obj)

// let animal = {
//     eats: true
// };
// let rabbit = {
//     jumps: true
// };

// rabbit._proto_ = animal


class Animal{
    constructor(name) {
        this.name = name
        console.log("Object is created ...")
    }

    eats(){
        console.log("I am Eating")
    }
    jumps(){
        console.log("I am jumping")
    }
}

class Lion extends Animal {
constructor(name){
    super(name)
    console.log("Object is created and he is a Lion ...")
}
eats() {
    super.eats()
    console.log("Sher khaa raha hai")
}
}

let a = new Animal("Bunny")
console.log(a)

let l = new Lion ("Shera")
console.log(l)

