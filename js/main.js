const un = document.querySelector('#un')
const deux = document.querySelector('#deux')
const trois = document.querySelector('#trois')
const min = document.querySelector('#min')
const max = document.querySelector('#max')
const bank = document.querySelector('#bank')
const loser = document.querySelector('#loser')


// returns the value of a random number from 1-5
function rando () {
    return Math.ceil(Math.random()*5)
}


function minBet(e){
    //runs rando function on each reel
    un.innerText = rando()
    deux.innerText = rando()
    trois.innerText = rando()
    
    //subtracts $5 and adds $25 if the numbers are equal
    const newBalance = parseInt(bank.innerText) - 5
    bank.innerText = newBalance
    if(un.innerText === deux.innerText && deux.innerText === trois.innerText){
        bank.innerText = newBalance + 25
    }
    //checks bank amount and removes $50 bet if balance under 50
    if(bank.innerText < 50){
        max.classList.add('hide')
    } else{
        max.classList.remove('hide')
    }
    //checks bank amount and closes game if <= 0
    if(bank.innerText < 5){
        loser.classList.remove('hide')
        document.querySelector('section').className = 'hide'
    }
}

min.addEventListener('click', minBet)


function maxBet(e){
    //runs the rando function on each reel
    un.innerText = rando()
    deux.innerText = rando()
    trois.innerText = rando()
    //subtracts $50 and adds $250 if numbers are equal
    const newBalance = parseInt(bank.innerText) - 50
    bank.innerText = newBalance
    if(un.innerText === deux.innerText && deux.innerText === trois.innerText){
        bank.innerText = newBalance + 250
    }
    //checks bank amount and removes $50 bet if balance under 50
    if(bank.innerText < 50){
        max.style.display = 'none'
    } else{
        max.classList.remove('hide')
    }
    //checks bank amount and closes game if <= 0
    if(bank.innerText < 5){
        loser.classList.remove('hide')
        document.querySelector('section').className = 'hide'
    }
}

max.addEventListener('click', maxBet)

