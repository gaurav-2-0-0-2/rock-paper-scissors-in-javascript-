var rock = document.querySelector(".rock")
var paper = document.querySelector(".paper")
var scissor = document.querySelector(".scissor")


rock.addEventListener("click", ()=>{
    document.querySelector(".emoji").innerHTML="✊"
})

paper.addEventListener("click", ()=>{
    document.querySelector(".emoji").innerHTML="🫲"
})

scissor.addEventListener("click", ()=>{
    document.querySelector(".emoji").innerHTML="✌️"
})

