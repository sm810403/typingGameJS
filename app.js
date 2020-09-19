const upperWindow = document.querySelector('.upper-window');
const btn = document.querySelector('.btn');
const input = document.querySelector('input');
const words = document.querySelector('.words');
const selects = document.querySelector('select');
const time = document.querySelector('.time');

let timer = 10;
//data
let word = [
    'car',
    'gum',
    'human',
    'bag',
    'cross',
    'girl',
    'soccer',
    'cloth',
    'tire',
];
let randomWord = word[Math.floor(Math.random()*word.length)];
words.innerHTML = randomWord;


//update words and wrong words
function updateWords(){
    randomWord = word[Math.floor(Math.random()*word.length)];
    words.innerHTML = randomWord;
    input.value = '';
}
function updateWrongWords(){
    words.innerHTML = `<h3>wrong!!</h3>`;
    setTimeout(()=> words.innerHTML = randomWord, 1200);
    setTimeout(()=> input.value = '', 1200);   
}
setInterval(clock(), 1000);
function clock(){
    timer--;
    time.innerText = timer + 's';
}

//////event listener///////

//setting button
btn.addEventListener('click', ()=>{
    upperWindow.classList.toggle('hide-window');
})
//input change
input.addEventListener('input', (e)=>{ 
    let inputValue = e.target.value;
    if(inputValue === randomWord){
        updateWords();
        
    } else if (inputValue.length>randomWord.length){
        updateWrongWords();
    }
})
//change difficulty
selects.addEventListener('change', (e)=>{
    const difficulty = e.target.value;

})
