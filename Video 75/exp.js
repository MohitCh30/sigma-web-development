console.log("I am not getting any Internship")
console.log("Sudhanshu will get a Internship")


setTimeout(() => {
  console.log("I am in setTime out function ")
}, 2000);
setTimeout(() => {
  console.log("I am in setTime out function 2 ")
}, 2000);

console.log("The End")





const loadScript = (src, callback) => {
 let sc = document.createElement("script") 
 sc.src = src; 
 sc.onload = callback("Mohit")
 document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", (arg,fn) = () => {
console.log(arg)
fn("firstarg" = () => {
  ddg("secondarg",  () => {
    
  }
  )
}
)  
})