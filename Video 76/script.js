// async function getData() {
//   return new Promise ((resolve,reject) => {
//     setTimeout(() => {
//       resolve(455)
//     }, 3500);
//   }
//   )
//   }

// Settle means resolve or reject 
// Resolve means promise has settled successfully
// Reject means promise has not settled successfully

async function getData() {
  //  let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //     // .then(response => response.json())
  //     // .then(json => console.log(json))
  //     let data = await x.json()
  //     console.log(data)
  fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
  }
  
  async function main(){
  console.log("Loading Modules")
  
  console.log("Do Something Else")
  
  console.log("Load Data")

  let data = await getData()

    console.log(data)
  
  console.log("process data")

  console.log("task 2")

}

main()



//   data.then((v) => {
    
//   console.log(data)
  
//   console.log("process data")

//   console.log("task 2")
// })

