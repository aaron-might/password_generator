// DOM elements
const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numberEl = document.getElementById('numbers')
const symbolEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomFunc = {
    lower:getRandomLower,
    upper:getRandomUpper,
    number:getRandomNumber,
    symbol:getRandomSymbol,
}


generateEl.addEventListener('click', () => {
const length = lengthEl.value;
console.log(typeof length);
})

// Generator function -https://www.net-comber.com/charset.html
function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
console.log(getRandomNumber());

function getRandomSymbol(){
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
}
console.log(getRandomSymbol());