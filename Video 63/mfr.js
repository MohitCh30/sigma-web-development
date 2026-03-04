let arr = [1,13,15, 17, 9]
// let Newarr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     Newarr.push(element**2)
// }
let Newarr = arr.map((e)=>{
    return e**2
})
console.log(Newarr)
const GreaterthanSeven = (e)=>
{
    if (e>7){
        return true
    }
    return false
}
console.log(Newarr.filter(GreaterthanSeven))

let arr2= [1,2,3,4,5,6]
const red = (a,b )=> {
    return a*b
}
console.log(arr2.reduce(red))