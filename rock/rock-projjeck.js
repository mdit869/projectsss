function pickcomputer(){
    const randomNumber = Math.random()

    let computerpick =''
    if(randomNumber > 0 && randomNumber < 1/3){
        computerpick = 'rock'
    }else if(randomNumber >= 1/3 && randomNumber < 2/3){
        computerpick = 'paper'
    }else if(randomNumber >= 2/3 && randomNumber < 1){
        computerpick = 'scissor'
    }
    return computerpick;
}

    const sorce = {
        wins: 0,
        loses: 0,
        ties:0
    }


function playGame(playGameMove){
    const computerpick = pickcomputer();

    let ruslrt = '';
    if(playGameMove === 'rock'){
        if(computerpick === 'rock'){
            ruslrt = 'ties'
        }else if(computerpick === 'paper'){
            ruslrt = 'you lose'
        }else if(computerpick === 'scissor'){
            ruslrt = 'you win'
        }
    }else if(playGameMove === 'paper'){
        if(computerpick === 'rock'){
            ruslrt = 'you win'
        }else if(computerpick === 'paper'){
            ruslrt = 'ties'
        }else if(computerpick === 'scissor'){
            ruslrt = 'you lose'
        }
    }else if(playGameMove === 'scissor'){
        if(computerpick === 'rock'){
            ruslrt = 'you lose'
        }else if(computerpick === 'paper'){
            ruslrt ='you win'
        }else if(computerpick === 'scissor'){
            ruslrt = 'ties'
        }
    }

    if(ruslrt === 'you win'){
        sorce.wins += 1;
    }else if(ruslrt === 'you lose'){
        sorce.loses += 1;
    }else if(ruslrt === 'ties'){
        sorce.ties += 1;
    }

    computerSorce()

    document.querySelector('.js-playGameMove').innerHTML = `  you picked <img src="${playGameMove}-img.jpg" alt="">
    <img src="${computerpick}-img.jpg" alt=""> computer picked`

    document.querySelector('.js-ruslrt').innerHTML = ruslrt;

   
}

function computerSorce(){
    document.querySelector('.js-sorce').innerHTML = `win: ${sorce.wins}, lose: ${sorce.loses}, tie: ${sorce.ties}`
}

