console.log('This is Promises'); 

let prom1 = new Promise((resolve, reject)  => {
    let a = Math.random();
    if (a<0.5) {
        reject("No random number supported you ")
    }
    else {
  setTimeout(() => {
    console.log("Yes I am done")
    resolve("Mohit")
  }, 3000);
}
}
)
let prom2 = new Promise((resolve, reject)  => {
    let a = Math.random();
    if (a<0.5) {
        reject("No random number supported you or ")
    }
    else {
  setTimeout(() => {
    console.log("Yes I am done, that's ll")
    resolve("Mohit 2")
  }, 1000);
}
}
)

// prom1.then ((a) => {
//   console.log(a)
// }).catch((err) => {
//   console.log(err)
// })

let p3 = Promise.race([prom1, prom2]) 
p3.then((a) => {
  console.log(a)
}).catch((err) => {
  console.log(err)
})