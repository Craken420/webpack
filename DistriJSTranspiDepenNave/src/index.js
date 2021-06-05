//ECMA5
var xECMA5 = 'can be accessed globally';
var piECMA5 = 3.14;
function myFunctionECMA5() {
console.log(xECMA5, piECMA5);
}

myFunctionECMA5();

const addECMA5 = function(a,b)
{
return a+b;
}
console.log(addECMA5(60,20));

//ECMA6
let xECMA6 = 'can be accessed globally';
const piECMA6 = 3.14;
const myFunctionECMA6 = () => {
  console.log(xECMA6, piECMA6);
}
myFunctionECMA6();