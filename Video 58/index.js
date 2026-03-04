// function Good(Name) {
//     console.log("Hey "+ Name + "I Love You")
//     console.log("Hey "+ Name + "Your Smile is Charming")
// console.log("Hey " + Name + "Your T Shirt looks good")
// console.log("Hey " + Name +  "You are such a poet!")
// }

function sum(a, b, c = 3) {
    // console.log(a+b)
    return a + b + c
}

result1 = sum (3,5)
result2 = sum (3,1)
result3 = sum (3,10)

console.log("The Sum of these two numbers are:", result1)
console.log("The Sum of these two numbers are:", result2)
console.log("The Sum of these two numbers are:", result3)

const func1 = (x) =>{ 
    console.log("I am an Arrow Function", x)
} 

func1(34)
func1(68)
func1(89)