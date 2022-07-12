const numbers = [0, 1, 2, 3];
numbers.includes(1); // true
numbers.includes(9); // false
numbers.includes(1, 3); // false
var one_nine = numbers.includes(1, 9); // false
var two_one = numbers.includes(2, 1); // true

console.log(two_one);
console.log(one_nine);

const sentence = 'Hello there, world!';
sentence.includes('hello'); // false
sentence.includes('Hello'); // true
sentence.includes('there', 1); // true
sentence.includes('there', 6); // true
sentence.includes('there', 7); // false


const names = ['Adam', 'Jack', 'Kate', 'Mary'];
console.log(names.length); // 4

//const newNames = names.splice(0); // remove all
// var items = ['Alberto', 'Kane']
// const newNames = names.splice(1, 2, items); // remove all
// console.log(names.length); // 0
// console.log(newNames); // removed all (splice(0)), return all removed elements, i.e. a "copy"


const removed = names.splice(1, 2, 'Tom', 'Penny');
console.log('Removed names are: ',removed);
console.log('Edited array is: ', names);