var scope = 'global scope';


 console.log('Global scope is ' + scope);

 function topFunction(){

    var localScope = scope;

    console.log('Before locally assigning scope, scope is ' + localScope)

    var scope = 'localScope'
    var topScope = scope;
       
    console.log('After assigning scope locally, the scope is now ' + topScope);
    
    innerFunction();

    function innerFunction(){

        var innerScope =  scope;

        console.log('The value of scope in inner scope is ' + innerScope);

    }
 }

 topFunction();

//var is invoked when declared and let is only declared but not invoked until it's called
//console.log(scope);
//console.log(topFunction());
