let rock = document.querySelector(".rock")
let paper = document.querySelector(".paper")
let scissor = document.querySelector(".scissor")
let comp = document.querySelector(".comp")
let emoji = document.querySelector(".emoji")
let result = document.querySelector(".result")


// pokemon showdown for reference 

// function to randomly get values for computer
function gotChoice() {
   const choice = ["rock", "paper", "scissor"];
   // mapping strings with emojis
   // const choice = {
   //   "rock":"✊",
   //   "paper": "🫲",
   //   "scissor": "✌️"
   // };
   let computerChoice = Math.floor(Math.random() *choice.length); 
   // let computerChoice = ["rock", "paper", "scissor"][Math.floor(Math.random() * 3)];
   return choice[computerChoice];
}


function checkWin(user) {
   const computer = gotChoice();
   console.log("user choose " + user + " and computer choose " + computer);
   if (user === computer) {
      result.innerHTML = "It's a tie"
      comp.innerHTML=computer
   } else if (user === "rock") {
      if (computer === "scissor") {
         result.innerHTML = "You win! scissor have smashed by the rock"
         comp.innerHTML=computer
      } else {
         result.innerHTML = "You lose! paper covers the rock"
         comp.innerHTML=computer
      }
   } else if (user === "paper") {
      if (computer === "rock") {
         result.innerHTML = "You win! paper covers the rock"
         comp.innerHTML=computer
      } else {
         result.innerHTML = "You lose! scissor cuts the paper"
         comp.innerHTML=computer
      }
   } else if (user === "scissor") {
      if (computer === "paper") {
         result.innerHTML = "You win! scissor cuts the paper"
         comp.innerHTML=computer
      } else {
         result.innerHTML = "You lose! rock samshes scissor"
         comp.innerHTML=computer
      }
   }
   
}





function main() {
   rock.addEventListener("click", () => {
      checkWin('rock')
      emoji.innerHTML="rock"
      
   })

   paper.addEventListener("click", () => {
      checkWin('paper')
      emoji.innerHTML="paper"
    

   })

   scissor.addEventListener("click", () => {
      checkWin('scissor')
      emoji.innerHTML="scissor"


   })

}





main();