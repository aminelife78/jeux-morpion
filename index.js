const cards = document.querySelectorAll(".card");
const result = document.querySelector(".result");
const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");
const play = document.querySelector(".play");
const plays = document.querySelector(".goo");
const players1 = document.querySelector("#player1");
const players2 = document.querySelector("#player2");
const rejouer = document.querySelector(".replay");
let tabResult = []
console.log(tabResult)
let joueur1;
let joueur2;

// sauvgarde les prenoms des joueurs deans localstorige
if (sessionStorage.length > 0) {
  players1.value = sessionStorage.name1;
  players2.value = sessionStorage.name2;
}
let player = "X";
let enCour = true;

// remplire le formulaire et commencer le jeux
plays.addEventListener("click", () => {
  if (players1.value != "" && players2.value != "") {
    joueur1 = players1.value;
    joueur2 = players2.value;
    play.style.display = "none";
    player1.innerHTML = `Au tour de ${players1.value} (X)`;
    player2.innerHTML = `Au tour de ${players2.value} (O)`;
    sessionStorage.setItem("name1", joueur1);
    sessionStorage.setItem("name2", joueur2);
  } else {
    location.reload();
  }
});

// function verification les cas gangnants
function verifier(card) {
  if (
    (cards[0].innerHTML === cards[1].innerHTML &&
      cards[1].innerHTML === cards[2].innerHTML &&
      cards[2].innerHTML != "") ||
    (cards[3].innerHTML === cards[4].innerHTML &&
      cards[4].innerHTML === cards[5].innerHTML &&
      cards[5].innerHTML != "") ||
    (cards[6].innerHTML === cards[7].innerHTML &&
      cards[7].innerHTML === cards[8].innerHTML &&
      cards[8].innerHTML != "") ||
    (cards[0].innerHTML === cards[3].innerHTML &&
      cards[3].innerHTML === cards[6].innerHTML &&
      cards[6].innerHTML != "") ||
    (cards[1].innerHTML === cards[4].innerHTML &&
      cards[4].innerHTML === cards[7].innerHTML &&
      cards[7].innerHTML != "") ||
    (cards[2].innerHTML === cards[5].innerHTML &&
      cards[5].innerHTML === cards[8].innerHTML &&
      cards[8].innerHTML != "") ||
    (cards[0].innerHTML === cards[4].innerHTML &&
      cards[4].innerHTML === cards[8].innerHTML &&
      cards[8].innerHTML != "") ||
    (cards[2].innerHTML === cards[4].innerHTML &&
      cards[4].innerHTML === cards[6].innerHTML &&
      cards[6].innerHTML != "")
  ) {
    result.innerHTML = `Bravo <span class="styleSpan"> ${
      player === "X"
        ? players1.value.toUpperCase()
        : players2.value.toUpperCase()
    } (${player})</span>  vous avez gagné`;
    document.querySelector(".styleSpan").style.color = "red";
    document.querySelector(".styleSpan").style.fontWeight = "700";
    document.querySelector(".styleSpan").style.fontSize = "20px";
    player === "X"
      ? (player1.style.background = "#5DAC7F")
      : (player2.style.background = "#5DAC7F");
    enCour = false;
  } else {
    
    changePlayer();
  }
}

// function change joeurs
function changePlayer() {
  if (player === "X") {
    player = "O";
    player2.classList.add("changePlayers");
    player1.classList.remove("changePlayers");
  } else {
    player = "X";
    player2.classList.remove("changePlayers");
    player1.classList.add("changePlayers");
  }
}

// evenement pour saisir les "x" et les "O" dans la grille
cards.forEach((card) => {
  card.addEventListener("click", () => {
    if (card.innerHTML == "" && enCour == true) {
      card.innerHTML = player;
      let monResult = card.innerHTML
      tabResult.push(monResult)
      if(tabResult.length == 9){
        enCour = false;
        result.innerHTML ="fin de jeu, match nul"
      }
      verifier(card);
      
    }
  });
});

// button rejouer

rejouer.addEventListener("click", () => {
  window.location.reload();
  play.style.display = "block";
});
