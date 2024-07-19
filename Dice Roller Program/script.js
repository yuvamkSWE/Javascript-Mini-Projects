
const diceInput = document.querySelector('.diceInput');
const button = document.querySelector('.btn');

button.addEventListener('click' , ( ) => {
    let diceNumber = parseInt(document.querySelector('.diceInput').value);
    run(diceNumber);
    
})

diceInput.addEventListener('keydown' , (event) => {
    if (event.key === 'Enter') {
        
        let diceNumber = parseInt(document.querySelector('.diceInput').value);
         run(diceNumber);
    }
})

const diceSumOutput =document.querySelector('.js-diceSum');

let diceSum = 0;

let result = '';

function run(diceNumber){

    result = '';
    diceSum = 0;

    for( i = 0 ; i < diceNumber ; i++){
        let dice = Math.floor(Math.random() * 6) + 1;
        result += `<img src="images/dice-${dice}.svg" alt="">`;
        diceSum += dice;
    }
    diceSumOutput.innerHTML = `Dice Sum - ${diceSum}`;
    

    render();

}

function render(){
    document.querySelector('.js-result').innerHTML = result;
}