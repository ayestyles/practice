/** 
function getUserInput(){
    let promptUserInput = prompt("Enter the user choice: ");
    let promptComputerInput = prompt("Enter the computer choice: ");
    let userInput = promptUserInput.toLowerCase();
    let computerInput = promptComputerInput.toLowerCase();
    return [userInput,computerInput];
*/



function compareChoices(userInput,computerInput){
    
    if (userInput == 'bear' && computerInput == 'gun' || userInput == 'gun' && computerInput == 'bear') {
        //  block of code to be executed if condition1 is true
        console.log('User chose ' + userInput + ' and computer chose ' + computerInput);
        console.log('Winner: gun shoots bear')
      } else if (userInput == 'human' && computerInput == 'gun' || userInput == 'gun' && computerInput == 'human') {
        //  block of code to be executed if the condition1 is false and condition2 is true
        console.log('User chose ' + userInput + ' and computer chose ' + computerInput);
        console.log('Human disarms gun');
      } else if (userInput == 'bear' && computerInput == 'human' || userInput == 'human' && computerInput == 'bear') {
        //  block of code to be executed if the condition1 is false and condition2 is true
        console.log('User chose ' + userInput + ' and computer chose ' + computerInput);
        console.log('Bear mauls human');
      } else if (userInput === computerInput) {
        //  block of code to be executed if the condition1 is false and condition2 is true
        console.log('User chose ' + userInput + ' and computer chose ' + computerInput);
        console.log('It\'s a TIE');
      }
       else {
        //  block of code to be executed if the condition1 is false and condition2 is false
        console.log('Please make a valid choice')
      }

}

compareChoices()
    

    


