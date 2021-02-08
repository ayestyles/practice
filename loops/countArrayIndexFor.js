//scratch-written see ./simple_programs/arrayIfThenElse.js as well

const zooNames = ['lion','tiger','bear'];
const arrayLength = zooNames.length;
console.log('The number of items in the array is ' + arrayLength);

let countingThing = 0;

for(countingThing=0;countingThing < arrayLength; countingThing++){
console.log('The value in index ' + countingThing + ' is '  + zooNames[countingThing]);
}
