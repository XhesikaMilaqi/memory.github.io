/* creer un tableau avec 10 emojis (fruits) */
const card = ["🍏", "🍐", "🍋", "🍑", "🍓", "🥑", "🍍", "🍒 ", "🍈", "🍉"];
let point = 0;
let cardgood = [];
const leBouton = document.getElementById('btn');
let winner = document.getElementById('win');
let loser = document.getElementById('lose');
let play = document.getElementById('play');

const card1 = card.concat(card);
card1.sort(() => Math.random() - 0.5);

// je crée un bouton pour relancer le jeu, quand on aurait finit, gagnée soit perdu!
leBouton.addEventListener('click', function(){
    window.location.reload()
})

/*j'appelle la div memory dans une constante */
var blockList = document.getElementById('memory');
const blockListChild = blockList.childNodes;
let verif = [];

for (let i = 0; i < card1.length; i++) {

    let carte = document.createElement('div');
    let front = document.createElement('div');
    let back = document.createElement('div');
    const score = document.createElement('div');

    carte.classList.add('carte');
    front.classList.add('front');
    back.classList.add('back');

    back.innerHTML = card1[i];
    score.innerHTML = card1[i];

    carte.append(front);
    carte.append(back);
    blockList.append(carte);


}

console.log(blockListChild);
// creer une partie qui permet de faire la rotation de la carte, quand 2 carte sont selectionees, retournees les 2 cartes.
blockListChild.forEach(element => {
    element.addEventListener('click', function(){
        if(verif.length <= 1){
            element.classList.toggle('rotate');
            verif.push(element);
        }
        if(verif.length == 2){
            if(verif[0].innerHTML !== verif[1].innerHTML){
                setTimeout(function(){
                    for(const c of verif ){
                    c.classList.toggle('rotate');
                    verif = [];
                };
                }, 1000);
                
            }else{
                cardgood.push(verif);
                verif = [];    
                }
                if(cardgood.length == 10){

                    winner.classList.toggle('show');
                    countdownEl.style.display = 'none';

                    loser.classList.toggle('hide');

                }
                
                
        }
       
    });
    
});

const startMin = 1;
let time = startMin * 60;

const countdownEl = document.getElementById('countdown');

let theTimer = setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 0 ? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes}: ${seconds}`;

    time--;
    if (cardgood == 20) {
        clearInterval(theTimer);
        
    } else if( minutes > 0 < 1 && seconds > 0 < 1){
        loser.classList.toggle('show');
        countdownEl.style.display = 'none';
    }
    
        
}


        
// faire en sorte que le jeu se termine quand 20 paires sont retournées

