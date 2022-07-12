//! High way
let rlSync = require('readline-sync');

let number = rlSync.question('Enter the first number\n');

//?Create an array to store the digits
output = [];

//? Convert number to string
stringNumber = number.toString()

//? Do a for loop on the number
len = stringNumber.length - 1;
for( var i = len; i>=0; i -=1){
    output.push(+stringNumber.charAt(i)) //? Is funny that this outputs digits 
    //output.push(stringNumber.charAt(i)) //? Is funny that this outputs digits as strings
}
console.log(output);

//! Low way
function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(Number(reverse_a_number(32243)));


//! Split()
console.log('1000'.split(""))
//Output: ["1", "0", "0", "0"]

//! Reverse()
console.log(["1", "0", "0", "0"].reverse(""))
//Output: ["1", "0", "0", "0"]

//! Join()
console.log(["0", "0", "0", "1"].join(""))
//Output: ["1", "0", "0", "0"]



