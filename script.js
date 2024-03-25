const gameOptions = ['Rock', 'Paper', 'Scissors'];
const gameResults = ['Player Wins', 'Player Loses', 'Player Ties'];
let userWins = 0;
let userLosses = 0;
let userTies = 0;

buildGameUI();

function buildGameUI() {
    var gameContainer = document.createElement('div');
    gameContainer.id = 'gameContainer';
    gameContainer.className = 'gameContainer';

    var gameTitle = document.createElement('h1');
    gameTitle.id = 'gameTitle';
    gameTitle.className = 'gameTitle';
    gameTitle.innerText = 'Rock Paper Scissors';

    var gameRules = document.createElement('p');
    gameRules.id = 'gameRules';
    gameRules.className = 'gameRules';
    gameRules.innerText = 'The rules are simple.\n\n You pick Rock, Paper, or Scissors.\n\n The computer picks Rock, Paper, or Scissors. \n\n Rock beats Scissors, Scissors beats Paper, and Paper beats Rock.';

    var gameButtonRock = document.createElement('button');
    gameButtonRock.id = 'gameButtonRock';
    gameButtonRock.className = 'gameButton';
    gameButtonRock.innerText = 'Rock';
    gameButtonRock.addEventListener('click', function () {
        playGame('rock');
    });

    var gameButtonPaper = document.createElement('button');
    gameButtonPaper.id = 'gameButtonPaper';
    gameButtonPaper.className = 'gameButton';
    gameButtonPaper.innerText = 'Paper';
    gameButtonPaper.addEventListener('click', function () {
        playGame('paper');
    });

    var gameButtonScissors = document.createElement('button');
    gameButtonScissors.id = 'gameButtonScissors';
    gameButtonScissors.className = 'gameButton';
    gameButtonScissors.innerText = 'Scissors';
    gameButtonScissors.addEventListener('click', function () {
        playGame('scissors');
    });

    var gameResults = document.createElement('div');
    gameResults.id = 'gameResults';
    gameResults.className = 'gameResults';

    gameContainer.appendChild(gameTitle);
    gameContainer.appendChild(gameRules);
    gameContainer.appendChild(gameButtonRock);
    gameContainer.appendChild(gameButtonPaper);
    gameContainer.appendChild(gameButtonScissors);
    gameContainer.appendChild(gameResults);
    let body = document.body;

    body.appendChild(gameContainer);
}

function getComputerChoice() {
    let computerIndex = Math.floor(Math.random() * 3);

    return gameOptions[computerIndex];
}

function playGameRound(playerSelection, computerSelection) {
    console.log('Player Picks: ' + playerSelection + '\nComputer Picks: ' + computerSelection);
    document.getElementById('gameResults').innerText = '\n\nPlayer Picks: ' + playerSelection + '\nComputer Picks: ' + computerSelection + document.getElementById('gameResults').innerText;

    if (computerSelection == playerSelection) //player picks same as computer
    {
        return gameResults[2];
    }
    else if (playerSelection == gameOptions[0]) {//player picks Rock
        if (computerSelection == gameOptions[1])//computer picks paper
        {
            return gameResults[1];
        }
        else if (computerSelection == gameOptions[2]) { //computer picks scissors
            return gameResults[0];
        }
    }
    else if (playerSelection == gameOptions[1]) { //player picks Paper
        if (computerSelection == gameOptions[2])//computer picks scissors
        {
            return gameResults[1];
        }
        else if (computerSelection == gameOptions[0]) {//computer picks rock
            return gameResults[0];
        }
    }
    else if (playerSelection == gameOptions[2]) { //player picks Scissors
        if (computerSelection == gameOptions[0])//computer picks paper
        {
            return gameResults[1];
        }
        else if (computerSelection == gameOptions[2]) {
            return gameResults[0];
        }
    } else
        return "you always lose..."
}

function getGameOptionFromString(input) {
    let userIndex = '';
    
    switch (input.toLocaleLowerCase()) {
        case gameOptions[0].toLocaleLowerCase():
        case '0':
            userIndex = 0;
            break;
        case gameOptions[1].toLocaleLowerCase():
        case '1':
            userIndex = 1;
            break;
        case gameOptions[2].toLocaleLowerCase():
        case '2':
            userIndex = 2;
            break;
        default:
            console.log('Invalid input. ');
            break;
    }

    return gameOptions[userIndex];
}

function playGame(userSelection) {
    var result = playGameRound(getGameOptionFromString(userSelection), getComputerChoice());

    if (result == gameResults[0]) {
        userWins++;
    }
    else if (result == gameResults[1]) {
        userLosses++;
    } else if (result == gameResults[2]) {
        userTies++;
    }

    console.log(result + '\n' + ' Wins: ' + userWins + ' Losses: ' + userLosses + ' Ties: ' + userTies);
    document.getElementById('gameResults').innerText = '\n' + result + '\n' + ' Wins: ' + userWins + ' Losses: ' + userLosses + ' Ties: ' + userTies + document.getElementById('gameResults').innerText;
}
