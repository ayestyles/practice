//global scope
let number1 = 1;

function oneFunction(){
let number2 = 2;
twoFunction();    
    function twoFunction(){
        const number3 =3;
        result = number1 + number2 + number3
        console.log(result)
    }
}
oneFunction()