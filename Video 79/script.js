let a = prompt("Enter first number")

let b = prompt("Enter Second  Number")
if(isNaN(a)||isNaN(b)){
    throw SyntaxError("Sorry this action is invalid")
}

let sum = parseInt(a) + parseInt(b)
function main(){
try {
    let x = 2
    console.log("The sum is", sum*x)
    return true
} catch (error) {
    console.log("There is an Error")
    return false
} finally{
    console.log("files are being closed and db connection is being closed")
}
}

let c = main()
