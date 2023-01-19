let rock = document.querySelector(".rock")
let paper = document.querySelector(".paper")
let scissor = document.querySelector(".scissor")
let computer = document.querySelector(".computer")
let emoji = document.querySelector(".emoji")
let result = document.querySelector(".result")
const choice = ["✊", "🫲", "✌️"];



// function to randomly get values for computer
function gotChoice() {
   
    let computerChoice = Math.floor(Math.random() * choice.length);
    return choice[computerChoice];   
    
}


let returnedChoice = gotChoice();
console.log(returnedChoice);


function checkWin(user, computer) {
  if ( user == computer) {
      result.innerHTML = "It's a tie"
  } else if (user == "✊"){
     if (computer == "✌️"){
        result.innerHTML= "You win! scissor have smashed by the rock"
     }else{
        result.innerHTML= "You lose! paper covers the rock"
     }
  }else if (user == "🫲"){
    if (computer == "✊"){
       result.innerHTML= "You win! paper covers the rock"
    }else{
       result.innerHTML= "You lose! scissor cuts the paper"
    }
 }else if (user == "✌️"){
    if (computer == "🫲"){
       result.innerHTML= "You win! scissor cuts the paper"
    }else{
       result.innerHTML= "You lose! rock samshes scissor"
    }
 }

}






// basic rock-paper-scissors

rock.addEventListener("click", ()=>{
    emoji.innerHTML= choice[0]
    computer.innerHTML = gotChoice();
    checkWin(choice[0],returnedChoice)
})

paper.addEventListener("click", ()=>{
    emoji.innerHTML= choice[1]
    computer.innerHTML = gotChoice()
    checkWin(choice[1],returnedChoice)
})

scissor.addEventListener("click", ()=>{
    emoji.innerHTML= choice[2]
    computer.innerHTML = gotChoice()
    checkWin(choice[2],returnedChoice)
})
