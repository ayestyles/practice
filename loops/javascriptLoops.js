let x;

function rollDice(){
const x = Math.floor(Math.random() * 7);
Math.floor(x);
console.log(x);
return x;
}
//rollDice()
//console.log(x);


switch(rollDice()){
    case 1:
        x == 1;
        console.log('You rolled a ' + x);
        break;
    case 2:
        x == 2;
        console.log('You rolled a ' + x);
        break;
    case 3:
        x == 3;
        console.log('You rolled a ' + x);
        break;
    case 4:
        x == 4;
        console.log('You rolled a ' + x);
        break;
    case 5:
        x == 5;
        console.log('You rolled a ' + x);
        break;
    case 6:
        x == 6;
        console.log('You rolled a ' + x);
        break;    
    default:
        console.log('Invalid roll');
        break;
}

