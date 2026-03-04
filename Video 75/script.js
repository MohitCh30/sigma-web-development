console.log("I am not getting any Internship")
console.log("Sudhanshu will get a Internship")


setTimeout(() => {
  console.log("I am in setTime out function ")
}, 200);
setTimeout(() => {
  console.log("I am in setTime out function 2 ")
}, 200);

console.log("The End")

const fn = (fn) => {
  console.log("Nothing")
}

const callback = (arg) => {
  console.log(arg)
  fn()
}

const loadScript = (src, callback) => {
 let sc = document.createElement("script") 
 sc.src = src; 
 sc.onload = callback("Mohit",fn)
 document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)
