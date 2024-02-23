const keyboard = document.querySelector('#qwerty');
const overlay = document.querySelector('#overlay');
const phrase = document.querySelector('#phrase ul');
let missed = 0;

const phrases = [
    'A piece of cake',
    'Do not judge a book by its cover',
    'Go back to the drawing board',
    'Speak of the devil',
    'To get bent out of shape',
    'Your guess is as good as mine'
];

function getRandomPhraseAsArray(arr) {

    const Random_Number = Math.floor(Math.random() * arr.length);

    return arr[Random_Number].split("");
}

function addPhraseToDisplay(arr) {
    arr.map((character)=>{
        const li = document.createElement('li');
        li.textContent = character;
        
        if(li.textContent !== ' ') li.className = 'letter';

        phrase.appendChild(li);
    })
}

function checkLetter(letter) {

    let correct = '';

    phraseArray.map((character, index)=>{
        if(character.toLowerCase() == letter.textContent){
            phrase.querySelectorAll('li')[index].className = 'show';

             correct = character;

        } else {

            return null;
        }
    })

    return correct;
}

function checkWin(){

    const letter_count = document.querySelectorAll('.letter').length;

    const show_count = document.querySelectorAll('show').length;

    function createElement(tag, property, value){

        const element = document.createElement(tag);

        property.map((prop, index)=>{
            element[prop] = value[index];
        })
        

        return element;

    }

    function showWinCondition(status){

        overlay

        overlay.className = status;
        overlay.style.display = 'flex';

        const conditionMessage = createElement('h4', ['textContent'], [`You ${status} !`]);

        const retryButton = createElement('button', ['textContent', 'className'], ['Play Again!', 'btn__retry'])

        overlay.lastElementChild.remove();

        overlay.appendChild(conditionMessage);
        overlay.appendChild(retryButton);

    }

    if(missed >= 5){
        showWinCondition('lose');
    }
    else if (letter_count === show_count) {
        showWinCondition('win');
    }
    

}

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);


keyboard.addEventListener('click', (e)=>{

    if(e.target.tagName === 'BUTTON') {

        const button = e.target;

        button.setAttribute('disabled', "");
        button.style.backgroundColor = 'green';

        const letterFound = checkLetter(button);
        if(!letterFound) {
            button.style.backgroundColor = 'red';
            missed++;
            const Tries = document.querySelectorAll('.tries img');
            Tries[missed - 1].src = "./images/lostHeart.png"
        }

    }

    checkWin()
})

overlay.addEventListener('click', (e)=>{
    if (e.target.className === 'btn__retry'){
        location.reload();
    }
    document.querySelector('#overlay').style.display = 'none';
});


