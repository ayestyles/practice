//Example of REGEX using the MATCH method

var alphabet = 'abcdefghijklmnopqrstuvwxyz'; 
var repeat = 'abc abc abc abc';
var regEx = /abc/i;

var regExAlphabet = alphabet.match(regEx).length;
var regExAlphabetRepeat = repeat.match(regEx).length;
console.log(regExAlphabet);
console.log(regExAlphabetRepeat);

//only finds one instance of the search
//must use a global modifier

