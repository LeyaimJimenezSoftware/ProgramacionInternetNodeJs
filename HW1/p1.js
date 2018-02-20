

////var n1,n2;
//n1= 1;
//n2=2;

function suma1(x1,x2){

 return x1+x2;
}

//var suma = n1+n2;
console.log(suma1);

function greet(){
console.log('hi');
}
greet();


//functions are fist class
function logGreeting(fn){
 fn();
}
logGreeting(greet);
//function expresion
let greetMe = function(){
  console.log('hi tony!');
}
greetMe();

// its firsclass

logGreeting(greetMe);

//use function expresion to create 

logGreeting(() =>{
console.log('hello tony!');

});

