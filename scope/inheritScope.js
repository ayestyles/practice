
//global scope
const height = 10;

 function volume() {
    //parent scope 
     const width = 10;
     const length = 10;
     const volumeOfObject = function() {
     //child or local scope
     return width * length * height;
     }
     return volumeOfObject();
 }

 volume()