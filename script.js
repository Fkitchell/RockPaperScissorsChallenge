const gameOptions = ['Rock', 'Paper', 'Scissors'];
const gameResults = ['Player Wins', 'Player Loses', 'Player Ties'];

buildGameUI();

function getComputerChoice() {
    let computerIndex = Math.floor(Math.random() * 3);

    return gameOptions[computerIndex];
}

function playGameRound(playerSelection, computerSelection) {
    console.log('Player Picks: ' + playerSelection + '\nComputer Picks: ' + computerSelection);
    alert('Player Picks: ' + playerSelection + '\nComputer Picks: ' + computerSelection);

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

function getUserChoice() {
    let userIndex = '';
    var promptStatement = gameOptions.join(', ') + '?';
    let inputInvalid = true;

    do {
        let input = prompt(promptStatement);

        switch (input.toLocaleLowerCase()) {
            case gameOptions[0].toLocaleLowerCase():
            case '0':
                userIndex = 0;
                inputInvalid = false;
                break;
            case gameOptions[1].toLocaleLowerCase():
            case '1':
                userIndex = 1;
                inputInvalid = false;
                break;
            case gameOptions[2].toLocaleLowerCase():
            case '2':
                userIndex = 2;
                inputInvalid = false;
                break;
            default:
                inputInvalid = true;
                break;
        }
        
        if (inputInvalid)
        {
            alert('Invalid input. Please enter Rock, Paper, or Scissors');
            promptStatement = 'The last prompt you gave was invalid. Please try again. \n' + gameOptions.join(', ') + '?';
        }

    } while (inputInvalid);

    return gameOptions[userIndex];
}

function playGame() {
    var userWins = 0;
    var userLosses = 0;
    var userTies = 0;

    for (let index = 0; index < 5; index++) {
        var result = playGameRound(getUserChoice(), getComputerChoice());
        
        if (result == gameResults[0]) {
            userWins++;
        }
        else if (result == gameResults[1]) {
            userLosses++;
        } else if (result == gameResults[2]) {
            userTies++;
        }

        console.log(result + '\n' + ' Wins: ' + userWins + ' Losses: ' + userLosses + ' Ties: ' + userTies);
        alert(result + '\n' + ' Wins: ' + userWins + ' Losses: ' + userLosses + ' Ties: ' + userTies)
    }
}