let button = document.getElementById("btn")

button.addEventListener("dblclick" ,()=>{
    document.querySelector(".box").innerHTML = "<b>You were clicked</b> Enjoy it"
})
button.addEventListener("contextmenu" ,()=>{
    alert("Sometimes in life, you just have to keep walking")
})
button.addEventListener("contextmenu" ,()=>{
    alert("Sometimes in life, you just have to keep walking")
})
document.addEventListener("keydown" ,(e)=>{
    console.log( e.key, e.keyCode)
})