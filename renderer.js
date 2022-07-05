// const func = async () => {
//     const response = await window.versions.ping()
//     console.log(response) // prints out 'pong'
//   }
  
// func()

const rpsList = ["ROCK", "PAPER", "SCISSORS"]
const rButton = document.getElementById('rock')
const pButton = document.getElementById('paper')
const sButton = document.getElementById('scissors')
// const titleInput = document.getElementById('title')

const comparison = document.getElementById('comparison')
const verdict = document.getElementById('verdict')

rButton.addEventListener('click', () => {
    var user_choice = "ROCK"
    var comp_choice = rpsList[Math.floor(Math.random()*rpsList.length)];
    comparison.innerHTML = "You chose ROCK. Computer Chose ".concat(comp_choice, ".")

    if (comp_choice == "ROCK"){
        verdict.innerHTML = "It's a tie!"
    } else if (comp_choice == "PAPER"){
        verdict.innerHTML = "You lose!"
    } else if (comp_choice == "SCISSORS"){
        verdict.innerHTML = "You WIN!"
    }

    // comparison.classList.add('loaded');

});

pButton.addEventListener('click', () => {
    var user_choice = "PAPER"
    var comp_choice = rpsList[Math.floor(Math.random()*rpsList.length)];
    comparison.innerHTML = "You chose PAPER. Computer Chose ".concat(comp_choice, ".")

    if (comp_choice == "ROCK"){
        verdict.innerHTML = "You WIN!" 
    } else if (comp_choice == "PAPER"){
        verdict.innerHTML = "It's a tie!" 
    } else if (comp_choice == "SCISSORS"){
        verdict.innerHTML = "You lose!"
    }    

    // comparison.classList.add('loaded');

});

sButton.addEventListener('click', () => {
    var user_choice = "SCISSORS"
    var comp_choice = rpsList[Math.floor(Math.random()*rpsList.length)];
    comparison.innerHTML = "You chose SCISSORS. Computer Chose ".concat(comp_choice, ".")

    if (comp_choice == "ROCK"){
        verdict.innerHTML = "You lose!"
    } else if (comp_choice == "PAPER"){
        verdict.innerHTML = "You WIN!"
    } else if (comp_choice == "SCISSORS"){
        verdict.innerHTML = "It's a tie!" 
    }    

    // comparison.classList.add('loaded');

});


