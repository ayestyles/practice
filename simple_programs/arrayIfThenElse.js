//scratch-written

zooArray = ['lion','tiger','bear','invalidData'];

let cntZooArray;

for (cntZooArray=0;cntZooArray<zooArray.length;cntZooArray++){
    console.log(cntZooArray);
    console.log('Pass the ' + zooArray[cntZooArray] + ' through the function.');
    decide(zooArray);

}

function decide(){
    console.log('This function knows what ' + zooArray[cntZooArray] + ' is.');
    if (zooArray[cntZooArray] == 'lion'){
        console.log('You got a scary lion!');
    } else if (zooArray[cntZooArray] == 'tiger') {
        console.log('You got a roaring tiger!');
    } else if (zooArray[cntZooArray] == 'bear'){
        console.log('you got a cute little bear!');
    } else {
        console.log('invalid selection or unexpected error evaluating array')
    }

}
//loop through the array with a for loop
//run each element of the array through an if, then, else statement