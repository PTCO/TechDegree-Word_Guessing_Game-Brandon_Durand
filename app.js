const keyboard = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
let missed = 0;

document.querySelector('.btn__reset').addEventListener('click', ()=>{
    document.querySelector('#overlay').style.display = 'none';
;});

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

const phraseArray = getRandomPhraseAsArray(phrases);

function addPhraseToDisplay(arr) {
    arr.map((character)=>{
        const li = document.createElement('li');
        li.textContent = character;
        
        if(li.textContent !== ' ') li.className = 'letter';

        phrase.appendChild(li);
    })
}

addPhraseToDisplay(phraseArray);

function checkLetter(letter) {

    phraseArray.map((character, index)=>{
        if(character.toLowerCase() == letter.textContent){
            phrase.querySelectorAll('li')[index].className = 'show';

            let correct = character.textContent;

            return correct;

        } else {

            return null;
        }
    })
}

keyboard.addEventListener('click', (e)=>{
    e.target.setAttribute('disabled', "");

    const letterFound = checkLetter(e.target);
})