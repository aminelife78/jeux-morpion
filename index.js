const cards = document.querySelectorAll(".card")
const result = document.querySelector(".result")
const player1 = document.querySelector(".player1")
const player2 = document.querySelector(".player2")
const play = document.querySelector(".play")
const plays = document.querySelector(".goo")
const players1 =  document.querySelector("#player1")
const players2 =  document.querySelector("#player2")
let joueur1 = players1.value
let joueur2 = players2.value
let player ="X"
let enCour = true;

plays.addEventListener("click",()=>{
  play.style.display ="none"
  player1.innerHTML = `Au tour de ${players1.value} (X)`
  player2.innerHTML = `Au tour de ${players2.value } (O)`

})


function verifier(card){
  
  if(cards[0].innerHTML === cards[1].innerHTML && cards[1].innerHTML  === cards[2].innerHTML &&  cards[2].innerHTML!= ""||
  cards[3].innerHTML === cards[4].innerHTML && cards[4].innerHTML  === cards[5].innerHTML   && cards[5].innerHTML!= "" ||
  cards[6].innerHTML === cards[7].innerHTML && cards[7].innerHTML  === cards[8].innerHTML  &&  cards[8].innerHTML!= "" ||
  cards[0].innerHTML === cards[3].innerHTML && cards[3].innerHTML  === cards[6].innerHTML   && cards[6].innerHTML!= "" ||
  cards[1].innerHTML === cards[4].innerHTML && cards[4].innerHTML  === cards[7].innerHTML   && cards[7].innerHTML!= "" ||
  cards[2].innerHTML === cards[5].innerHTML && cards[5].innerHTML  === cards[8].innerHTML   && cards[8].innerHTML!= "" ||
  cards[0].innerHTML === cards[4].innerHTML && cards[4].innerHTML  === cards[8].innerHTML   && cards[8].innerHTML!= "" ||
  cards[2].innerHTML === cards[4].innerHTML && cards[4].innerHTML  === cards[6].innerHTML   && cards[6].innerHTML!= ""   
    ){    
    result.innerHTML = `bravou joueur  <span class="styleSpan"> ${player === "X"? players1.value : players2.value} (${player})</span>  a gagné`
    document.querySelector(".styleSpan").style.color ="red"
    document.querySelector(".styleSpan").style.fontWeight ="700"
    document.querySelector(".styleSpan").style.fontSize ="20px"
    player === "X"? player1.style.background = "#5DAC7F" : player2.style.background = "#5DAC7F"
    enCour = false;
  }else{
    changePlayer()
  }
}



function changePlayer(){
  if(player === "X"){
    player = "O"
    player2.classList.add("changePlayers")
    player1.classList.remove("changePlayers")

  }else{
    player = "X"
    player2.classList.remove("changePlayers")
    player1.classList.add("changePlayers")
  }

}


cards.forEach(card => {
  card.addEventListener("click",()=>{
    if(card.innerHTML == '' && enCour == true){
      card.innerHTML = player
      verifier(card)
      
    }
  })
});
