//? Call method

// Creates a "constructor" for a Person object
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  // Creates a "constructor" for a Student object
  function Student(name, age, department) {
    Person.call(this, name, age); // We take 'this.name', 'this.age', 'name' and 'age' from the Person constructor 
    this.department = department;
  };
  
  const student = new Student('John', 19, 'Software Engineering');
  console.log('Student name is: John |',student.name); // John
  console.log('Student department is: Software Engineering |',student.department); // Software Engineering

  //? Call method 

  function Product(name, price) {
    this.name = name;
    this.price = price;
  }
  
  function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
  }
  
  console.log(new Food('cheese', 5).name);
  // expected output: "cheese"

  //? Call method

  function Product(name, price) {
    this.name = name;
    this.price = price;
  }
  
  function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
  }
  
  function Toy(name, price) {
    Product.call(this, name, price);
    this.category = 'toy';
  }
  
  const cheese = new Food('feta', 5);
  const fun = new Toy('robot', 40);

  //? Call method
  const animals = [
    { species: 'Lion', name: 'King' },
    { species: 'Whale', name: 'Fail' }
  ];
  
  for (let i = 0; i < animals.length; i++) {
    (function(i) {
      this.print = function() {
        console.log('#' + i + ' ' + this.species
                    + ': ' + this.name);
      }
      this.print();
    }).call(animals[i], i);
  }

  //? Call method

  function greet() {
    const reply = [this.animal, 'typically sleep between', this.sleepDuration].join(' ');
    console.log(reply);
  }
  
  const obj = {
    animal: 'cats', sleepDuration: '12 and 16 hours'
  };
  
  greet.call(obj);  // cats typically sleep between 12 and 16 hours


  //? Call method

  var sData = 'Wisen';

function display() {
  console.log('sData value is %s ', this.sData);
}

display.call();  // sData value is Wisen

//? Call method

'use strict';

var sData = 'Wisen';

function display() {
  console.log('sData value is %s ', this.sData);
}

display.call(); // Cannot read the property of 'sData' of 

//? Apply method

const users = [
  {
    name: 'John',
    department: 'IT',
  },
  {
    name: 'Susan',
    department: 'Product',
  },
];

// accessing this.name is only possible because of apply used later
function greet(greeting, emoji) {
  console.log(`${greeting}, ${this.name} ${emoji}`);
}
const greetings = ['hi', 'hola', 'ciao', 'yo', 'aloha'];
const emojis = ['😊', '👋', '✋', '🙋'];
users.forEach((user) => {
  // greet every user with different messages, randomly
  greet.apply(user, [
    greetings[Math.floor(Math.random() * greetings.length)],
    emojis[Math.floor(Math.random() * emojis.length)],
  ]);
});

//? Bind method

const obj = {
  results: [],
  numbers: [1, 2, 3, 4, 5, 6, 7],
  divisible: function (num) {
    this.numbers.map(function (number) {
      if (number % num === 0) {
        this.results.push(number);
      }
    });
    return this.results;
  },
};

console.log(obj.divisible(2)); // TypeError: Cannot read properties of undefined (reading 'push')