// const strng = "SDI24 is pretty cool"
// let students = 30
// let isAwesome = true
// let nullification

// console.log(strng)

console.log("hello")

let begin ="this class "
let end = "is neat!"

let total = begin + end
console.log (total)

//INDENTATIONS
// function test(){
//     if(true){
//         for(let i=0; i< 5; i++){

//         }
//     }
// }

//function declaration:
// function name (parameter1, parameter2){
// //^keyword
// //body - statements, expressions, values
// }
// //invocation:
// //function's 'name'();

// //ex)
// function greet() {
//     console.log("Hello, World!");
//   }
//   greet();
  // "Hello, World!" 
//To see the value of a function, you can print it to the console 
// the same way we do with any other variable - input the name in a 
// console.log method: 
// console.log(greet)


//RANDOM NUMBERS
//notes:
// var min = 90;
// var max = 100;
// var randomBetweenMinAndMax = Math.random() * (max - min) + min;
// console.log("randomBetweenMinAndMax:", randomBetweenMinAndMax);

// sample problem:
// function generateRandomNumber(min, max) {
//     // create a result variable
//     // assign it to formula for random number between min and max
//     var result = Math.random()  * (max - min) + min;
//     // return result
//     return result;
//   }
// //test case:
//   var randomNumber = generateRandomNumber(1, 10);
// console.log('should be between 1 and 10:', randomNumber);

//STRINGS

var testString = 'words'; //index starts with "0"

var firstCharacter = testString[0]; // accesses the first character: 'w'
var thirdCharacter = testString[2]; // accesses the third character: 'r'
console.log(firstCharacter); // will log 'w'
console.log(thirdCharacter); // will log 'r'

// first you will declare a function that takes a string parameter and returns it
function returnString(string) {
    return string;
  }
  var resultString = returnString('hooray for programming');
  console.log('resultString:', resultString); 
  // you have added console.log messages to help you identify which variable 
  //is which when this code is run in the console

  // first you will declare a function that takes a string parameter and returns it
function returnString(string) {
  return string;
}
// next, you will declare a function that takes a string parameter and returns the first letter
function returnFirstCharacter(string) {
    return string[0];
  }
  var firstCharacter = returnFirstCharacter('coffee');
  console.log('firstCharacter:',firstCharacter);

  // lastly, you will declare a function that takes a string and a number parameter 
  //and returns the character located at the given index within the string
function returnACharacter(string, index) {
    return string[index];
  }
  var character = returnACharacter('tea', 1);
  console.log('character:', character);

  //SAMPLE PROBLEM:
  function returnACharacter(string, index) {
    // returns string character at given index
    return string[index];
  }

  //NAMING VARIABLES:
  // Numbers
// var count = 9;
// var whatever = 6398;

// // Strings
// var name = "Charlemagne";
// var something = "Head Chef";

// // Booleans
// var hasBeenDelivered = true;
// var blah = false;

//SAMPLE PROBLEM - REASSIGN STRING
function reassignAString(input) {
    // reassign the input string to the described string
  var input = "reassigned";
   
    // return the input string
    return input;
  }

  //Concatenated strings:
  //ex 1
  function addTogetherTwoStrings(string1, string2) {
    // create a result variable
    // assign it to an expression which adds together string1 and string2
    var result = string1 + string2;
    // return the result variable
    return result;
  }

  //ex 2
  function createFullName(firstName, lastName) {
    // create a fullName variable
    // assign it to an expression adding first and last name with a space in between
    var fullName = firstName + " " + lastName;
    // return the fullName variable
    return fullName;
  }

  //using ${TEMPLATE LITERALS}
// ...using variables...
  let landmark = "Machu Picchu"
  let location = "Peru"
  
 // "The location of " + landmark + " is in " + location "."  

// versus using template literals: (more terse, less clunky)
// let landmark = "Machu Picchu"
// let location = "Peru"

// `The location of ${landmark} is in ${location}`. // The location of Machu Picchu is in Peru.

//use BACK TICKS ``
const greetingSender = (name, day) => {
    return `Happy ${day}, ${name}!`;
  }
  
  console.log(greetingSender("Bob", "Sunday")); // "Happy Sunday, Bob!"
  console.log(greetingSender("Susan", "Tuesday")); // "Happy Tuesday, Susan!"

//GET LAST CHARACTER OF STRING:
  function getLastCharacter(string) {
    // create a lastIndex variable
    // assign it to the last index in the string
    var lastIndex = string.length -1;
    // create a lastCharacter variable
    // assign it to the last character in the string (make use of lastIndex)
    var lastCharacter = string[lastIndex];
    // return the lastCharacter variable
    return lastCharacter;
  }
  
  //USE 'indexOf' to find subString within string:
  function applyIndexOf(string, subString) {
    // create an index variable
    // assign it to the index inside of string where 
    //subString can first be found
    var index = string.indexOf(subString);
    // return the index variable
    return index;
  }

  //Casting toString()
  function applyToString(param) {
    // create a stringVersion variable
    // assign it to the string version of the input param
    var stringVersion = param.toString();
    // return the stringVersion variable
    return stringVersion;
  }

  //ESCAPING APOSTROPHE:
  console.log('sample:', 'It\'s raining');

  //NEWLINE SYMBOL:
  console.log('multiline string:', 'First Line\nSecond Line\nThird Line');

  //HAIKU

  function generateHaiku(firstLine, secondLine, thirdLine) {
    // create a haiku variable
    // assign it to an expression involving the input lines, 
    //such that they format correct when the return value is 
    //logged to the console
    var haiku = firstLine + '\n' + secondLine + '\n' + thirdLine
    // return the haiku variable
    return haiku;
  }

  //09 May 2024
//TRUTHY FALSEY
  //the logical NOT operator (!) converts any value into its opposite boolean value.
console.log(!"Hello");
  //outputs "false"
console.log(!5);
  //outputs "false"
  
  //The logical AND operator, &&
  //returns the first expression if it is falsy (it can be converted to false). 
  //Otherwise, it returns the second expression.
  console.log(0 && true) //outputs 0

  console.log(3 + 5 && "hello"); //outputs "hello"

//The logical OR operator returns the first expression if it is truthy (it can be converted to true). 
//Otherwise, it returns the second expression.
console.log(3 + 5 || "hello"); //outputs 8

console.log(undefined || !!"hello" == true); //outputs true 

//TERNARY EXPRESSIONS

let age = 22; 

document.write(age >= 21 ? '<h1>The user can drink<h1>' : '<h1>The user cannot drink<h1>');

//FOR LOOPS
// for (let step = 0;  
//     //1ST start at index '0'
// step < 300;
//     //2nd up to step 300
//     step++)
//     //3rd incrementally increases by one
//  {
//   console.log('I will ask questions every time I do not understand');
// }
for (let i = 0; i < 5; i++) {
  //     result += 'I will excessively log\n';

//Modify the fruitObject below so that it contains a key value pair mapping the key fruit to the value 'banana'.
// function getFruitObject() {
//   let fruitObject = {
//       //fruit: 'banana' 
//       //incorrect if I typed "keyfruit" instead of "fruit", and don't forget ''!
//   };
  
  
//   return fruitObject;
// }

//ARRAYS
  var worldAuthors = ['Edgar Allan Poe', 'Fyodor Dostoevsky', 'J.R.R Tolkien', 'Homer', 'Victor Hugo'];
  // console.log (worldAuthors[2]);
  //   //logs "J.R.R Tolkien"
  // console.log(worldAuthors.indexOf('Homer')); 
  //   //output 3

    //insert an author into index '0'
  worldAuthors[0] = 'Miguel de Cervantes';
  worldAuthors[7] = "Paulo Coelho";
        //logs Miguel de Cervantes
              //<2 empty spaces>
              //Paulo Coelho

  console.log(worldAuthors[ worldAuthors.length - 1 ]);
    // will log last element
    for(let index = 0; index < worldAuthors.length; index++){
      console.log(worldAuthors[index]); //must be [index] not .index; otherwise will return 'undef'
  } //logs all elements in array
  //ALTERNATIVELY, USE FOR..OF LOOP:
  for(let element of worldAuthors){
    console.log(element); 
}    

const myFunction = (number) => {
  const functionArray = [
    (num) => (num += 1),
    // add function here...
    (num) => (num * 2),
    (num) => (num * 534),
    (num) => (num / 3),
    (num) => Math.round(num),
  ];

  for (const func of functionArray) {
    // complete functionality...
    number = func(number); //runs each function to the number
    console.log(number); //added to log to console
  }
  return number;
}
console.log(myFunction(10));//test case and log to console

//Array.isArray
console.log(Array.isArray(apartments)); //returns in console: true
//push pop
let cities = ["Ottawa"];
cities.push("Bangkok");
console.log(cities); // output: ["Ottawa", "Bangkok"]
//splice
myArray.splice(index, deleteCount, element)


//sample problem - finding AVERAGE:
function computeAverageOfNumbers(nums) {
  if (nums.length === 0) {
    return 0;
  }
  
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  let average = sum / nums.length;
  return average;
}

//sample problem:
function addToBack(arr, element) {
  // your code here
    
    arr.push(element);
    return arr;
}
// or use splice:
function addToBack(arr, element) {
  // Get the index at which to insert the new element (which is the length of the array)
  var index = arr.length;
  // Use splice to insert the new element at the end of the array
  arr.splice(index, 0, element);
  // Return the modified array
  return arr;
}
//splice without index variable:
function addToBack(arr, element) {
  
  // Use splice to insert the new element at the end of the array
  arr.splice(arr.length, 0, element);
  // Return the modified array
  return arr;
}

//block inside {}
//global outside {}
//functional - use let or const;
  //The var variables or function declarations have functional scope, 
  //they are in scope for the entire function which they are declared in.

//ARROW FUNCTION:
  //standard:
  function canDrive(person) {
    return person.age > 15;
  }

  //arrow function:
  const canDrive = (person) => {
    return person.age > 15;
  };
  //or omit parenthesis if one argument:
  const canDrive = person => (
    person.age > 15
  );
  //further simplified:
  const canDrive = person => person.age > 15; //implicit
  const cityState = (city,state) => `${city} is in ${state}`;//implicit
  

  function getConcatenatedArrayAndMiddleElement(array1, array2) {
    // Replace undefined's in the variables below with your code
    let concatenatedArray = array1.concat(array2);
    //let middleElement = concatenatedArray.length/2; //finds the middle index
    //need to call the middle ELEMENT
    //use this line instead:
    let middleElement = concatenatedArray[concatenatedArray.length/2];
    
  
    // do not modify
    return {concatenatedArray, middleElement};
  }

  //checkpoint question:
  let lotto = [
    {name: "John", numbers: [6, 5, 3, 11, 34]},
    {name: "Steve", numbers: [9, 15, 13, 21, 14]}
  ]
  
  const getNums = (arr) => {
    let allNums = [];
    
    for(let elm of arr){
      for(let nums of elm.numbers){
        allNums.push(nums);
      }
    }
    
    return allNums;
  }
  
  getNums(lotto);