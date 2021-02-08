let scope = 'global scope';


 console.log('Global scope is ' + scope);

 function topFunction(){

    let localScope = scope;

    console.log('Before locally assigning scope, scope is ' + localScope)

    let scope = 'localScope'
    let topScope = scope;
       
    console.log('After assigning scope locally, the scope is now ' + topScope);
    
    innerFunction();

    function innerFunction(){

        let innerScope =  scope;

        console.log('The value of scope in inner scope is ' + innerScope);

    }
 }

 topFunction();


//console.log(scope);
//console.log(topFunction());
