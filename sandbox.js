//COMMIT TO GITHUB
//from terminal to save changes to your github repo:
//git status - checks status of repo
//git add .  - adds repo to staging area
// git commit -m "your commit message"  -adds changes to stagin area
// git push origin master - pushes committed changes.

//COMMIT FILE TO EMPTY GITHUB REPO
//git init
//

//touch "index.html" - creates a folder in your repository

//"C:\Users\Tiffany crick\Pictures\SurfAstronaut.jpg"
{/* <img
    class="fit-picture"
    src= ":\Users\Tiffany crick\Pictures\SurfAstronaut.jpg"
    alt="Giza" 
    height="200" width = "300"/> */}

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

//Using a for loop, iterate through the array passed. 
    //Return the array as a single string.
    // _.forLoop = function(a){
    //   //Code Goes Below

    //   let result = '';
    //   for (let i = 0; i < a.length; i++) {
    //     result += a[i];

    // }

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

  //IF 
  // .ifLogic = function(a, b){
  //   //Code Goes Below
  //   if (a === b){
  //     return 'Great';
  //   }

  //IF-ELSE
  // _.ifElseLogic = function(a, b){
  //   //Code Goes Below
  //   if (a === b){
  //     return 'Great';
  //   }
  //   else {
  //     return 'Good';
  //   }

  // }

  //FOR LOOPS

//JS FUNDS III, 13 May 2024
  //SPREAD OPERATORS

    //to make a copy:

    const updateAge = (object, age) => {
      // Create a copy of the object using the spread operator
      const updatedObject = { ...object };
      // Update the age property of the copied object
      updatedObject.age = age;
      // Return the updated object
      return updatedObject;
    };

    //ADDING
    const clock = {
      hours: 13,
      minutes: 40,
    };
    
    const clone = {
      ...clock,
      seconds: 46,
    };
    // clock => { hours: 13, minutes: 40 }
    // clone => { hours: 13, minutes: 40, seconds: 46 }

    //REST PARAMETERS
    let printArgs = (...args) => {
      return args;
    };

    //INSTEAD OF:
    function (properties) {
      return `Hello ${properties.firstName} ${properties.lastName}`
    }
    //WRITE
    function ({ //USE CURLY BRACES inside () TO INDICATE IT'S AN OBJECT
      firstName,//ON SEPERATE LINES
      lastName
    }) {
      return `Hello ${firstName} ${lastName}`
    } //return in curly braces

      //SAMPLE problem
      //refactor the following function to use destructured parameters:
      const address = (addressParts) => (
        `${addressParts.street}, ${addressParts.city}, ${addressParts.state} ${addressParts.zip}`;
      );
      //ANSWER:
      const address = ({
        street,
        city,
        state,
        zip
        
      }) => {
      return `${street}, ${city}, ${state} ${zip}`
      }

    //DEFAULT PARAMETERS
    function fnName(param1 = defaultValue1, /* …, */ paramN = defaultValueN) {
        // …
      }

  //HIGHER ORDER FUNCTIONS (HOFs)
      //FILTER:
      const arr = [1, 2, 3, 4];

      const odds = arr.filter(element => {
      return element % 2 !== 0;
      });

      console.log(odds); // [1, 3]
      //INSTEAD OF FOR-if LOOP:
      const arr = [1, 2, 3, 4];

  const odds = [];

  for (let element of arr) {
    if (num % 2 !== 0) {
      odds.push(element);
  }
}

      //sample FILTER:
      const numbers = [1, 2, 3, 4, 5, 10, 70, 80, 90, 100]
let numbersGreaterThan50 = numbers.filter(nums => {
    return nums > 50;
})

  console.log(odds); // [1, 3]

      //MAP method (instead of for-of loop):
      const arr = [1, 2, 3, 4];

const squares = arr.map(function(element) {
  return element * element;
});

console.log(squares); // [1, 4, 9, 16]

      //versus for-or loop:
      const arr = [1, 2, 3, 4];

const squares = [];

for (let element of arr) {
  squares.push(element * element);
}

console.log(squares); // [1, 4, 9, 16]

    //SAMPLE MAP method:
    const numbers = [1, 2, 3, 4, 5]

    let numbersTimesTen = numbers.map(nums => {
        return nums * 10;
    })

    //reduce method:
    const numbers = [1, 2, 2, 10]
let sum = numbers.reduce(function(result, element) {
  return result + element;
}, 0);

//Chain arrays:

const students = [
  { name: "Stephen", age: 24 },
  { name: "Alice", age: 19 },
  { name: "Jordan", age: 29 },
  { name: "Julie", age: 21 },
  { name: "Chris", age: 26 }
]

let averageAge = students.map((nums) => {
  return nums.age; //creates and pushes age value to array
}).reduce((result, index) => {
  return Math.round((result + index/ students.length)*10)/10}, 0);

//DOM Manipulation

// . dot = class
// # hashtag = id

//PROBLEM 1
//Using document API functions, when given the following HTML, create a new variable as a 
//<p> HTML element called "paragraphElement" and append it to the div with the id "infoParagraphContainer". 
//Set the innerHTML on the paragraphElement to say "Here at Galvanize, we're here to equip students for the future!"
//Event listener = waiting for an event to occur
<body>
  <div id="aboutMe" >
    <h3>Learn more about our company:</h3>
    <div id="infoParagraphContainer" ></div>
  </div>  
</body>  

//ANSWER
// Create a new paragraph element
  var paragraphElement = document.createElement('p');
// Set the innerHTML of the paragraph element
  paragraphElement.innerHTML = "Here at Galvanize, we're here to equip students for the future!";
  // Get the container div element by its id
  var paragraphContainer = document.getElementById('infoParagraphContainer');
  // Append the paragraph element to the container div
  paragraphContainer.appendChild(paragraphElement);

  //PROBLEM 2
  //Now, strictly using innerHTML on the "infoParagraphContainer" element, when given the following HTML, 
  //create a new variable as a <p> HTML string called "paragraphElementString" and set it to the 
  //"infoParagraphContainer" innerHTML. The paragraphElementString should still to say "Here at Galvanize, we're here to equip students for the future!"

<body>
  <div id="aboutMe" >
    <h3>Learn more about our company:</h3>
    <div id="infoParagraphContainer" ></div>
  </div>  
</body>  

//Answer
// Create a new variable as a <p> HTML string
var paragraphElementString = '<p>Here at Galvanize, we\'re here to equip students for the future!</p>';

var paragraphContainer = document.getElementById('infoParagraphContainer');
//The innerHTML property of the "infoParagraphContainer" element is directly set to the paragraphElementString variable, 
//ensuring that the paragraph element is added to the container correctly.
paragraphContainer.innerHTML = paragraphElementString;

//TYPE YOUR NAME BUTTON
let btn = document.querySelector('#button1');

btn.addEventListener("click", () => alert('Button1 was clicked'))
// index.js
let nameField = document.querySelector('#name');

nameField.addEventListener(
    "input", 
    (eventObject) => console.log(eventObject.target.value)
);

//EVENTS
//SAMPLE Problem:
var count = 0;
var picture = document.getElementById('myPic');

// Add event listener to the picture element
picture.addEventListener('click', function() {
    // Increment the count variable by 1
    count++;
    // Log the updated count to the console
    console.log("Count:", count);
});

//15 May 2024
//ASYNCHRONOUS CODE

  //Synchronouse callback: executed immediately
const greeting = (name) => {
  alert('Hello ' + name);
}

const processUserInput = (callback) => {
  var name = prompt('Please enter your name.');
  callback(name);
}

processUserInput(greeting);

  //CALLBACK function:
  //SAMPLE PROBLEM: Using the concept of callbacks, write the exercise function so that result will equal 42.

  const a = exercise(10, x => x + 2);
  const b = exercise(15, x => x * 2);

  const result = a + b;
  //ANSWER:
    const exercise = (number, callback) => { 
      //Need to define the function to accept two parameters: a number and a callback function.
      return callback(number);
    };

  //asynchronous callbacks - executed after synchronous callbacks
    //FETCH

    //Standard Fetch
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(rawResponse => rawResponse.json())
      .then(jsonifiedResponse => console.log("Jsonified data: ", jsonifiedResponse))
      .catch(error => console.log(error))

let url =
let secondUrl =
let dataReturned = []

fetch = (url)
  .then() => 
    .then(data =>)

    //fetch is asyncronous; and therefore is executing in a heap, which takes a bit longer
//NESTED FETCH


    //tell js to wait 5 min
    set Timeout(function(){

    })

    //THEN

    //SETTIMOUT calls a function or evaluates an expression after X milliseconds
    const messageToStudents = () => {
      console.log("Hey Galvanize students!")
  }
  
  setTimeout(messageToStudents, 5000)

  //PROMISE
  //SAMPLE1: What would be logged to the console when the following code runs?

// Encapsulate the promise in a function so it doesn't resolve/reject immediately
const promiseExample = () => {
  return new Promise((resolve, reject) => {
    const x = "Galvanize";
    const y = "galvanize";
    if (x === y) {
      console.log("Success! You are a Galvanize student!");
      resolve();
    } else {
      console.log("Some error has occurred");
      reject();
    }
  });
}
// Note that we aren't actually handling any resolved or rejected values here
promiseExample();
//returns "some error has occurred" -Because x and y are not equivalent, the promise is rejected.

  //SAMPLE2: Order the following in the order they are logged from the following code?
  new Promise((resolve, reject) => {
    console.log("Initial");//FIRST
    resolve();
  })
    .then(() => {
      throw new Error("Something failed");//not logged because there's an error
      console.log("Do this");//never reached
    })
    .catch(() => {
      console.error("Do that");//SECOND due to error in previous
    })
    .then(() => {
      console.log("Do this, no matter what happened before");//THIRD or LAST
      //The final .then() is executed regardless of whether the previous 
      //.catch() was triggered because it always runs after the .catch() completes.
    });

    //SAMPLE3
    new Promise((resolve, reject) => {
      console.log("Initial");//FIRST
      resolve();
    })
      .then(() => {//error message; isn't logged right away
        throw new Error("It broke");//THIRD - console.log(error.message) below
        console.log("Do this");
      })
      .catch((error) => {//previous error triggers
        console.log("My error message is:");//SECOND
        console.log(error.message);
      })

      //FETCH
      //SAMPLE1
      function getAllPosts() {
        // Write a function that uses fetch to return a 
        //Promise that resolves to the _JavaScript_ array of *all posts*.
         return fetch('https://my.fake-blog-api.com/posts')
            .then(rawResponse => { 
              // Throw an error if the response is not ok
                if(!rawResponse.ok){
                    throw new Error(`code: ${rawResponse.status}, status text: ${rawResponse.statusText}`)
            } 
                return rawResponse.json() // Parse the response as JSON
            })
             // Return the parsed JSON
            .then(jsonifiedResponse => {
                return jsonifiedResponse;
                })
                // Log the error with more context
            .catch(error => console.log(error)) 
        }

        //SAMPLE 2
         
         function getUserByID(userID) {
          // Write a function that takes in an ID (number) as an argument 
          const url = `https://my.fake-blog-api.com/users/${userID}`;// use template literal interpolation 
          //and uses `fetch` to return a Promise that resolves to 
          //the _JavaScript_ object of *the specified user by that ID*.
          
           return fetch(url)
              .then(rawResponse => { 
                  if(!rawResponse.ok){
                      throw new Error(`code: ${rawResponse.status}, status text: ${rawResponse.statusText}`)
              } 
                  return rawResponse.json() 
              })
              .then(jsonifiedResponse => {
                  return jsonifiedResponse;
                  })
              .catch(error => console.log(error)) 
          }
          //SAMPLE3 - chaining fetch calls

          function getUserFromPostID(postID){
            // Write a function that takes in an ID (number) as an argument 
            const postUrl = `https://my.fake-blog-api.com/users/${postID}`;
            //and uses `fetch` to return a Promise that resolves 
            //to the _JavaScript_ object of *the specified user by that ID*.
            return fetch(postUrl)
            .then(rawResponse => {
              if (!rawResponse.ok) {
                throw new Error(`code: ${rawResponse.status}, status text: ${rawResponse.statusText}`);
              }
              return rawResponse.json();
            })
            .then(postData => {
              // Extract the user ID from the post data
              const userID = postData.user;
              
              // Now, make a SECOND fetch call to get the user data using the extracted user ID
              const userUrl = `https://my.fake-blog-api.com/users/${userID}`;
              
              // Return the fetch call for the user data here
              return fetch(userUrl)
                .then(rawResponse => {
                  if (!rawResponse.ok) {
                    throw new Error(`code: ${rawResponse.status}, status text: ${rawResponse.statusText}`);
                  }
                  return rawResponse.json();
                });
            })
            .catch(error => console.log(error));
        }

    //IMPLICIT VS EXPLICIT RESPONSES

//16 May 2024 ASYNCHRONOUS WORKSHOP

//CHAT GPT ANSWER
// const fetch = require('node-fetch'); // Ensure you have node-fetch installed

const input = process.argv[2];

// Validate the user input
const validInputs = ['users', 'posts'];
if (!validInputs.includes(input)) {
  console.error(`No matching data can be found for "${input}".`);
  process.exit(1);
}

// Define the URL based on the input
const url = `https://jsonplaceholder.typicode.com/${input}`;

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(json => {
    // Limit to top 10 responses
    const top10 = json.slice(0, 10);

    // Format and log the responses
    if (input === 'users') {
      top10.forEach((user, index) => {
        console.log(`${index + 1}. ID: ${user.id}; Name: ${user.name}; Email: ${user.email}`);
      });
    } else if (input === 'posts') {
      top10.forEach((post, index) => {
        console.log(`${index + 1}. ID: ${post.id}; Title: ${post.title}; Body: ${post.body}`);
      });
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error.message);
  });
// TASK #3

/console.log(process.argv[2]);
// const fetch = require('node-fetch'); // node-fetch is installed
//TASK 1
const input = process.argv[2];
const postId = process.argv[3];
const error = `No matching data can be found for: ${input}`;

//TASK 3 - CHAINED PROMISES to retrieve comments in posts
// Validate the postId if provided
if (input === 'posts' && postId && (isNaN(Number(postId)) || Number(postId) <= 0)) {
    console.error('Invalid post ID. Please provide a positive integer.');
    process.exit(1); // Exit the process with an error code
  }
  //Define URLs
  const url = `https://jsonplaceholder.typicode.com/${input}`;
  const postUrl = postId ? `https://jsonplaceholder.typicode.com/posts/${postId}` : null;
  const commentsUrl = postId ? `https://jsonplaceholder.typicode.com/posts/${postId}/comments` : null;
         
// in the terminal enter node app.js 'users/id' or 'posts/id'
   
// Fetch the post or resource
fetch(postUrl || url) // Use postUrl if postId is provided, otherwise use url
    .then(response => {
    if (!response.ok) {
        //'response.ok' ensures that the response status code is within the range of 200-299, 
        //which indicates a successful HTTP request.
      throw new Error(`status: ${response.status}`);
    }
    //Throwing a custom error with the response status provides more informative error messages. 
    //This helps in debugging and understanding why the request failed.

    //without the 'if' statement, response.json() will still be called, 
    //even if url returns a 404 status.
    return response.json();
  })
  .then(data => {
     // If fetching a single post with ID
    if (postId) {
    console.log(`Title: "${data.title}"`);
    console.log(`Body: "${data.body}"`);

    // Fetch the comments for the post
    return fetch(commentsUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`status: ${response.status}`);
      }
      return response.json();
    })
  //once the previous async operation's promise is returned and resolved,
  //this next function will be executed
  .then(comments => {
    console.log('\nComments:');
    comments.forEach((comment, index) => { //iterates over each comment object in the 'comments' array
      console.log(`${index + 1}. ${comment.email} says: "${comment.body}"`);
    }); //prints info about each comment
  });
} else {
    //If fetching a list of resources
    console.log(data);
}
    // .then(json => console.log(json)) -- used in TASK 1 & 2
//TASK 2 - Handle invalid user input based on HTTP responses containing errors
})
.catch(error => {
  console.error(`${error}. Error: ${error.message}`);
});
      //If the status code indicates an error (like 404, 500, etc.), throwing an error allows 
      //you to handle these situations appropriately in the .catch block.

//TASK 4 -- CHAT GPT ANSWER:

// const fetch = require('node-fetch');

// Get the command line arguments
const input = process.argv[2];
const postId = process.argv[3];

// Function to handle fetching and displaying posts and their comments
const handlePosts = (postId) => {
  const url = `https://jsonplaceholder.typicode.com/posts${postId ? `/${postId}` : ''}`;
  const commentsUrl = postId ? `https://jsonplaceholder.typicode.com/posts/${postId}/comments` : null;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      if (postId) {
        console.log(`Title: "${data.title}"`);
        console.log(`Body: "${data.body}"`);

        // Fetch the comments for the post
        return fetch(commentsUrl)
          .then(response => {
            if (!response.ok) {
              throw new Error(`status: ${response.status}`);
            }
            return response.json();
          })
          .then(comments => {
            console.log('\nComments:');
            comments.forEach((comment, index) => {
              console.log(`${index + 1}. ${comment.email} says: "${comment.body}"`);
            });
          });
      } else {
        console.log(data);
      }
    })
    .catch(error => {
      console.error(`${error}. Error: ${error.message}`);
    });
};

// Function to handle updating a comment's name based on email
const handleCommentUpdate = (email) => {
  const commentsUrl = 'https://jsonplaceholder.typicode.com/comments';

  fetch(commentsUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`status: ${response.status}`);
      }
      return response.json();
    })
    .then(comments => {
      const comment = comments.find(comment => comment.email === email);
      if (!comment) {
        throw new Error(`No comment found for email: ${email}`);
      }

      const updateUrl = `https://jsonplaceholder.typicode.com/comments/${comment.id}`;
      console.log(`Updating comment at: ${updateUrl}`); // Debug statement
      return fetch(updateUrl, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: "Mariana's Comment" })
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`status: ${response.status}`);
        }
        return response.json();
      })
      .then(updatedComment => {
        console.log(`Comment from ${email} was renamed to "${updatedComment.name}"`);
      });
    })
    .catch(error => {
      console.error(`${error}. Error: ${error.message}`);
    });
};

// Main function to handle input and dispatch the appropriate action
const main = () => {
  if (input === 'posts') {
    // Validate the postId if provided
    if (postId && (isNaN(Number(postId)) || Number(postId) <= 0)) {
      console.error('Invalid post ID. Please provide a positive integer.');
      process.exit(1); // Exit the process with an error code
    }
    handlePosts(postId);
  } else if (input === 'comment' && postId && postId.startsWith('email=')) {
    const email = postId.split('=')[1];
    console.log('Searching for comment with email:', email); // Debug statement
    handleCommentUpdate(email);
  } else {
    console.error('Please provide a valid command in the format: node app.js posts <postId> or node app.js comment email=<email>');
  }
};

main();
// To fetch posts and their comments: node app.js posts <postId>
// To update a comment by email: node app.js comment email=<email></email>

//17 MAY 2024 -- OOP
//INHERITANCE example
class Vehicle {
  constructor (make, model, numberOfWheels) {
    this.make = make;
    this.model = model;
    this.numberOfWheels = numberOfWheels;
  }
}

class Motorcyle extends Vehicle {
  constructor(make, model, numberOfWheels, twoSeater, offRoadCapable) {
    super(make, model, numberOfWheels);
    this.twoSeater = twoSeater;
    this.offRoadCapable = offRoadCapable;
  }
}
let harley = new Motorcyle ("Harley Davidson", "Street Glide", 2, false, false);
console.log (harley);

//THIS

  //BEFORE
  let person = {//object
    name:'Jack Bauer',
    printName: function(){
      console.log(person.name) // reference to the 'person' object
    }
  }
  person.printName() // prints 'Jack Bauer'
  //AFTER
let person = {
  name:'Jack Bauer',
   printName: function(){
    console.log(this.name)//The '.this' keyword fixes this dependency by creating 
    //an internal structure that is independent of an objects name.
  }
}

person.printName()   // prints 'Jack Bauer'

let human = person;  // set `human` to reference `person`
person = {}          // set `person` to reference a new object.
human.printName();   // prints 'Jack Bauer'

  //CALL
  function Product(name, price) {
    this.name = name;
    this.price = price;
  }
  
  function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
  }
  
  console.log(new Food('cheese', 5).name);
  // Expected output: "cheese"
  
  //APPLY
  const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

console.log(max);
// Expected output: 7

const min = Math.min.apply(null, numbers);

console.log(min);
// Expected output: 2

//THIS --SAMPLE PROBLEM:
var x = 10; //Global variable

//This function, when called, will modify the x property of whatever this refers to in that context.
var puzzle = function (amount) {
  this.x += amount;
};
//alice is an object with an x property set to 10 and an f property that references the puzzle function.
var alice = { x: 10, f: puzzle };

//Here, puzzle is called as a regular function, not as a method of an object. 
//Thus, this refers to the global object. The global x variable is increased by 5.
//Result: window.x or global.x (depending on the environment) is now 15.
puzzle(5);

//Here, puzzle is called as a method of the alice object. Thus, this refers to alice.
// alice.x is increased by 5.
// Result: alice.x is now 15.
alice.f(5);

// alice.g is assigned to alice.f, which references puzzle.
// When alice.g(5) is called, it is still a method of alice. Thus, this refers to alice.
// alice.x is increased by another 5.
// Result: alice.x is now 20.
alice.g = alice.f;
alice.g(5);

//The value of result is the current value of alice.x, which is 20.
var result = alice.x;

  //SAMPLE PROBLEM2
  //What message will eventually be alerted? After how long?

var name = "Window";
var alice = {
  name: "Alice",
  sayHi: function() {
    alert(this.name + " says hi");
  }
};
var bob = { name: "Bob" };

//The method call is used to immediately invoke alice.sayHi with bob as the this context.
// alice.sayHi.call(bob) executes immediately and alerts "Bob says hi" 
// because this.name refers to bob.name, which is "Bob".
setTimeout(alice.sayHi.call(bob), 1000);
//setTimeout is given the return value of alice.sayHi.call(bob), 
//which is undefined because sayHi does not return a value.
//The setTimeout is effectively called with undefined as the callback function, which does nothing.

class VendingMachine {
  constructor(){
      this.snacks = [];
      this.money = 0;
  };
  addSnack(snack) {
      snacks.push(snack);
  };
  buySnack(snack) {
      this.money += snack.price;
      this.snacks.filter((snackItem) => (
          snackItem.name !== snack.name
      ))
  };
};

const machine = new VendingMachine();
machine.addSnack({name: 'Chocolate Bar', price: 2.5});
machine.addSnack({name: 'Potato Chips', price: 1.5});
VendingMachine.buySnack({name: 'Potato Chips', price: 1.5});

//STATIC METHOD
class Car {
  constructor(make, model, maxSpeed) {
    this.make = make;
    this.model = model;
    this.maxSpeed = maxSpeed;
  }

  move(location) {
    console.log(`Speeding along to ${location}`);
  }

  description() {
    console.log(`${this.make} ${this.model}`);
  }

  increaseMaxSpeed(speedIncrease) {
    this.maxSpeed += speedIncrease;
  }
//IMPLEMENT a static method that returns true if the object is an instance 
//of a car, else return FALSE
  static isCar(obj) {
    return obj instanceof Car;
  }
}
// Example usage
const car1 = new Car('Toyota', 'Corolla', 150);
const notACar = { make: 'Tesla', model: 'Model S', maxSpeed: 200 };

console.log(Car.isCar(car1)); // Output: true
console.log(Car.isCar(notACar)); // Output: false


// MAY 21 TDD
//SAMPLE

//Given the below definition of an add() function,

function add(num1, num2) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return 'Both arguments must be numbers'
  }
  if (num1 < 0 || num2 < 0) {
    return 'Neither number can be negative'
  }
  return (num1 + num2);
}
//Write appropriate unit tests for the .add() function using Jest given the following requirements:

// function requires two arguments
// both arguments must be numbers
// doesn't accept negative numbers
const { add } = require('./src');

describe('The add function', () => {
  // Test that the function returns 'Both arguments must be numbers' if less than two arguments are provided
  test('requires two arguments', () => {
    expect(add(1)).toBe('Both arguments must be numbers');
    expect(add()).toBe('Both arguments must be numbers');
  });

  // Test that both arguments must be numbers
  test('both arguments must be numbers', () => {
    expect(add('a', 1)).toBe('Both arguments must be numbers');
    expect(add(1, 'b')).toBe('Both arguments must be numbers');
    expect(add('a', 'b')).toBe('Both arguments must be numbers');
  });

  // Test that the function doesn't accept negative numbers
  test("doesn't accept negative numbers", () => {
    expect(add(-1, 1)).toBe('Neither number can be negative');
    expect(add(1, -1)).toBe('Neither number can be negative');
    expect(add(-1, -1)).toBe('Neither number can be negative');
  });

  // Test for normal functionality with valid inputs
  test('adds two positive numbers correctly', () => {
    expect(add(1, 2)).toBe(3);
    expect(add(0, 0)).toBe(0);
    expect(add(100, 200)).toBe(300);
  });
})

//SAMPLE2 -TDD
//Given the following VendingMachine class and Item interface, write the appropriate unit tests for the VendingMachine class.

//Each snack has the following structure:

class Item {
  constructor(name, price, code) {
      this.name = name;
      this.price = price;
      this.code = code;
  }
};
class VendingMachine {
  constructor() {
    this.snacks = []
    this.customerFunds = 0
  }

  seeSelections() {
    // displays all available snacks
    return this.snacks;
  }

  stock(newSnacks = []) {
    // adds input array of snacks to exisitng snacks
    this.snacks = this.snacks.concat(newSnacks);
  }

  deposit(amount) {
    // updates existing customerFunds with the amount deposited
    this.customerFunds += amount;
  }

  giveChange(){
    // updates customerFunds to 0 and returns the remaining amount
    const currentFunds = this.customerFunds;
    this.customerFunds = 0;
    return currentFunds;
  }

  buy(snackName) {
    // updates inventory with bought snacks
    // updates customerFunds to reflect purchase
    // notifies customer if a snack is unavailable
    // notifies customer when a snack costs more than available customerFunds
    // clears out customerFunds by calling giveChange()
    let foundSnack = false;
    for (let i = 0; i < this.snacks.length; i++) {
      let item = this.snacks[i];
      if (item.name === snackName) {
        if (this.customerFunds - item.price < 0) {
          return 'Not enough funds available';
        }
        foundSnack = true;
        this.customerFunds -= this.snacks[i].price;
        this.snacks.splice(i, 1);
        break;
      }
    }
    if (!foundSnack) {
      return `${snackName} is not available.`;
    }
    return this.giveChange();
  }
}
//ANSWER:
describe('Vending Machine', () => {
beforeEach(() => {
  //beforeEach hook runs before every test, 
  //creating new instances of Item and VendingMachine for you 
  //to use in your tests
    snack1 = new Item('Potato Chips', 1.5, 1);
    snack2 = new Item('Chocolate Bar', 2.5, 2);
    vendingMachine = new VendingMachine();
  });
  // seeSelections
  test('displays all available snacks', () => {
    vendingMachine.stock([snack1, snack2]);
    expect(vendingMachine.seeSelections()).toEqual([snack1, snack2]);
  });
  
  //stock
  test('adds input array of snacks to exisitng snacks', () => {
  
    vendingMachine.stock([snack1]);
    expect(vendingMachine.seeSelections()).toEqual([snack1]);//toEqual for an Array
    vendingMachine.stock([snack2]);
    expect(vendingMachine.seeSelections()).toEqual([snack1, snack2]);
  });
  //deposit
  test('updates existing customerFunds with the amount deposited', () => {
    vendingMachine.deposit(10);
    expect(vendingMachine.customerFunds).toBe(10);//to be for a number or element
    vendingMachine.deposit(8);
    expect(vendingMachine.customerFunds).toBe(18);
  });

  //give change
  test('updates customerFunds to 0 and returns the remaining amount', () => {
    vendingMachine.deposit(7);
    expect(vendingMachine.giveChange()).toBe(7);
    expect(vendingMachine.customerFunds).toBe(0);

  });

  //buy
  test('should update inventory and customerFunds when a snack is bought', () => {
    vendingMachine.stock([snack1, snack2]);
    vendingMachine.deposit(5);
    expect(vendingMachine.buy('Potato Chips')).toBe(3.5); // 5 - 1.5 = 3.5
    expect(vendingMachine.customerFunds).toBe(0);
    expect(vendingMachine.seeSelections()).toEqual([snack2]);
  });

  test('notifies customer if a snack is unavailable', () => {
    vendingMachine.stock([snack1]);
    vendingMachine.deposit(5);
    expect(vendingMachine.buy('Chocolate Bar')).toBe('Chocolate Bar is not available.');
  });

  test('notifies customer when a snack costs more than available customerFunds', () => {
    vendingMachine.stock([snack1]);
    vendingMachine.deposit(1);
    expect(vendingMachine.buy('Potato Chips')).toBe('Not enough funds available');
  });
  test('clears out customerFunds by calling giveChange()', () => {
    vendingMachine.stock([snack1]);
    vendingMachine.deposit(2);
    expect(vendingMachine.buy('Potato Chips')).toBe(0.5); // 2 - 1.5 = 0.5
    expect(vendingMachine.customerFunds).toBe(0);
  })
});

//REACT 29 May 2024

import React from 'react';
import ReactDOM from 'react-dom';

const numberArray =[1,2,3,4];
const list = <ul>
              {numberArray.map(num=> <li key = {num}>{num}</li>)} //map method
             </ul>
ReactDOM.render(list, document.getElementbyID ('root'))

  //conditional rendering
  const Greeting = (name) => {
    // assume isDaytime returns true if it is currently day time (whatever that means)
    if (isDaytime()) {
      return (
        <h1>Hello {name}!</h1>
      );
    }
    else {
      return (
        <h1>Good evening {name}!</h1>
      );
    } 
  }

  //sample
  //Improper rendering if-else statement:
  const GuitarName = (guitarName) => {
  
    return ( 
      <>
        <h1>Guitar Name</h1>
        {
          if (guitarName === undefined) { //incorrect
            return <p>Unknown</p>
          }
          else
          {
            return <p>{guitarName}</p>
          }
        }
      </>
    );
  }
  
  //correct:
  import React from 'react';

const GuitarName = (guitarName) => {
  
  return ( 
    <>
      <h1>Guitar Name</h1>
      <p>{guitarName === undefined ? 'Unknown' : guitarName}</p>
    </>
  );
}

export default GuitarName;

//parts of JSX
//classRoster = parent; student = child
//firstName and lastName = props or attributes
<ClassRoster>
<Student firstName="Bill" lastName="Madison" />
<Student firstName="Becky" lastName="Smith" />
<Student firstName="Michael" lastName="Richards" />
</ClassRoster>

//PROPS
// if you define a component like this...
const UserInformation = (props) => (
  <span>Hello {props.firstName} {props.lastName}. You live in {props.city}, {props.state}</span>
);

// and you render it like this, with HTML attributes that correspond to the property names in `props`
<UserInformation firstName="Rowan" lastName="Wyatt" city="Oakland" state="California" />

// the resulting DOM will look like this...
<span>Hello Rowan Wyatt. You live in Oakland, California</span>

//correct syntax for passing the JSX element the following props object
<Person />
<Person id={43} firstName="Michelle" lastName="Obama" />

//STATE

//SAMPLE PROBLEM:
//Given the stateless functional component TimestampFormatter below:

import React from 'react'

const TimestampFormatter = (props) => {
    return (
        <span>
            {props.date.toLocaleString("en-US",
                { timeZone: props.timeZone }
            )}
        </span>
    )
}

export default TimestampFormatter

//Complete the implementation of the GalvanizeTimes class component in such a way that:
  // clicking on a city updates the timeZone state field
  // GalvanizeTimes renders the TimestampFormatter component with the appropriate timeZone and date.

import React from 'react'
import TimestampFormatter from './TimestampFormatter'

const cityTimeZones = [
    ['New York', 'America/New_York'],
    ['Denver', 'America/Denver'],
    ['Phoenix', 'America/Phoenix'],
    ['Los Angeles', 'America/Los_Angeles']
]

export default class GalvanizeTimes extends React.Component {
    constructor() {
        super();
        this.state = {
            date: new Date(),
            timeZone: 'America/New_York'
        }
    }
    //TODO: implement setTimeZone
    setTimeZone (timeZone) {//takes a timeZone parameter and sets the state correctly
        this.setState({
            timeZone: timeZone
        })
    }

    render() {
        const clickableCities = cityTimeZones.map(cityTZ => {
            return (
                <a  key={cityTZ[0]}
                    id={cityTZ[0]}
                    onClick={() => this.setTimeZone(cityTZ[1])}>
                    {cityTZ[0]}
                </a>
            )
        })

        return (
            <div>
                <h1>Click on a city to see what time it is</h1>
                {clickableCities}
                {/* TODO: render TimestampFormatter component*/}
                <TimestampFormatter //Pass the date and timeZone from the state to the TimestampFormatter component.
                    date={this.state.date}
                    timeZone={this.state.timeZone}
                    />
            </div>
        )
    }

    //LIFECYCLE componentDidMount
// create a component that shows the Astronomy Picture of the Day from NASA, 
//you would send a request to that API in componentDidMount and save to state.
    class AstronomyPic extends React.Component {
      constructor() {
        this.state = {
          //initial state contains a pictureData property given an object with predetermined properties
          // as its value to show that it will eventually contain an object with more data.
          pictureData: {
            apod_site: '',
            copyright: '',
            date: '',
            description: '',
            hdurl: '',
            media_type: '',
            title: '',
            url: ''
          }
        }
      }
    }
      componentDidMount() {
        fetch('https://apodapi.herokuapp.com/api')
          .then(res => res.json())
          .then(data => {
            this.setState({
              pictureData: data
            })
          })
      }

  //HOOKS
  //useState
  //classical React:

  import React from 'react';

//classical implementation
class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: '',
      list: [],
    };
  }
  /* Other Stuff */
}

//useState HOOK
import React, { useState } from 'react';

const Greeting = () => {
   const [greetingState, setGreetingState] = useState( '' );
   const [listState, setListState] = useState( [] );
}

//example classical component vs useState HOOK:
import React, { useState } from 'react';

const Car = () => {
  //useState hook
  return (
    <div id='car'>
      <h2>{car.name}</h2>
      <div id='specs'>
        <h3>Specs</h3>
        <ul>
          <li>Horsepower: {car.specs.horsepower}</li>
          <li>0-60: {car.specs.timeTo60}</li>
          <li>MSRP: ${car.specs.price}</li>
        </ul>
      </div>
    </div>
  )
}

//VS. useState HOOK:
//useState allows you to set 2 variable:
// a piece of state (car) and a function to update it (setCar)
const [car, setCar] = useState({ // setCar is similar to 'setState'
//like setState, the set... function from useState is also required to change state as it is immutable
  name: '',
  specs: {
    horsepower: 0,
    timeTo60: 0,
    price: 0
  }
})

//PRACTICE useState and useEffect
//CAT.js
import React, { useState, useEffect } from 'react';
const Cat = ({ url }) => {
  useEffect(() => {
    .then(res=> res.json())
    .then(data => SecurityPolicyViolationEvent(data))
  }, [url])
  return (
    <div>
      <img src={catch.url} alt={catch.id} style= {{'width': '400px'}}/>
    </div>
  )
}
export default Cat

//App.js
import React from 'react';
import Cat from './Cat';

constApp = () => {
  const [url, setUrl] = useState ('https://thatcopy.pw/catapi/restId/1');
  const randomCat = () => {
    let randomNum =Math.floor (Math.random() * (58-1) +1);
    setUrl(`https://thatcopy.pw/catapi/restId/${randomNum}`)
  }
  return(
    <div>
      <Cat url = {url} />
      <button onClick={randomCat}>Click for random cat</button>
    </div>
  )
}
export default App

//useContext example
export const ColorContext = React.createContext();

function App() {
    const colors = {
        pink: "#0482f",
        orange: "#8c8F0s",
        teal: "#0384b1"
    }

    return (
        <ColorContext.Provider value={colors}>
            <Home />
        </ColorContext.Provider>
  );
}
//exercise

//04 June React Routers
//wrap provider around
//svg icons

//BrowserRouter
import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
//rename the alias of BrowserRouter to Router to make it a little more semantic to read.
import App from './App'

const root = createRoot(document.getElementById("root"));

root.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)

//HashRouter
import * as React from "react";
import * as ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import App from './App';

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>
);

//switch statement:
// routerFunction(url){
//   switch(url.path){
//     case `cat` : return <CatComponent />;
//     case `dog` : return <DogComponent />;
//     case `gerbil` : return <GerbilComponent />;
//   }
  //Router is like a switch statement:
//   <Router>
//     <Routes>
//     // Route components can only exist in 'Routes' wrapper
//       <Route path="/cat" element={<CatComponent/>}/>
//       <Route path="/dog" element={<DogCompnent/>}/>
//       <Route path="/gerbil" element={<GerbilComponent/>}/>
//     </Routes>
// </ Router>

//practice
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Home = () => (
  <h1>Home</h1>
)
const UserProfile = () => (
  <h1>User Profile</h1>
)
const Signup = () => (
  <h1>Sign up</h1>
)
 const App = () => (
<Router>
{/* unordered list */}
  <ul> 
    <li>
      <Link to ='/'>Home</Link>
    </li>
    <li>
      <Link to ='/profile'>User Profile</Link>
    </li>
    <li>
      <Link to ='/signup'>Sign Up</Link>
    </li>
  </ul>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/profile" element={<UserProfile/>}/>
      <Route path="/signupl" element={<Signup/>}/>
    </Routes>
</ Router>
 )
 export default App;

//Dynamic routes
//  <Routes>
//   <Route path="/details/:id" element={<Details product={product}/>}/>
// </Routes>

//   //providing parameters
//   <Link to={`/details/${item.id}`}>
//     <img src={item.img} />
//   </Link>

  //practice - Dynamic routes (from tutorial video)
  import React, { useState } from 'react';
  import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

  const Details = ({ product }) => (
    <div>
      {product.name} : ${product.price}
      <img src={product.image} alt={product.name} style={{width: '400px'}} />
    </div>
  );
  const App = () => {
    const [details, setDetails] = useState ({id: '', name: '', price: '', image: ''})
    const product1 = {
      id: '1',
      //add a parameter id (good for when managing many products)
      name: 'apples',
      price: '2.00',
      image: 'some URL'
    }
    const product2 = {
      id: '2',
      name: 'oranges',
      price: '3.00',
      image: 'some URL'
    }
    const data = [product1, product2]
    return (
      <Router>
        <ul>
          {data.map(item => (
            <li key={item.id}>
              <Link to={`/details/${item.id}`} onClick={()=> {setDetails(item)}}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <Routes>
          <Route path='/' element ={<div>Home</div>}/>
          <Route path="/details/:id" element={<Details product={details}/>}/>
        {/* <Route path="/details/1" element={<Details product={product1}/>}/>
        <Route path="/details/2" element={<Details product={product2}/>}/> */}
        </Routes>
      </Router>
    )
  }
  export default App;

  //You Do - dynamic routes

  import React, { useState, useEffect, useContext } from 'react';
  import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
  
  const UserContext = React.createContext({user: {}, setUser: () => {}});

   const App = () => {
    const [data, setData] = useState([])
    const [user, setUser] = useState({
      name: {
        first: '',
        last: '',
        title: '',
      },
      location: {
        street: {
          number: '',
          name: '',
        }
        city: '',
        state: '',
        postcode: '',
      }
    })
    useEffect(() => {
      fetch('https://randomuser.me/api/?results=5')
      .then(res => res.json())
      .then(data => setData(data.results)) //this will retrive data in API list
    }, [])
    const value = { user, setUser }
    return (
      <Router>
        <UserContext.Provider value={value}>
        <Routes>
          <Route path='/' element={<List list={data}/>}/>
          <Route path='/:username' element={<Details />} />
        </Routes>
        </UserContext.Provider>
      </Router>
    )
   }

   const List = ( { list }) => (
    <ul>
      {list.map(user => (
        <User user={user}/>
      ))}
    </ul>
   )
  
   const User = ({ user }) => {
    const { setUser } = useContext(UserContext);
    return(
      <Link to={`/${user.login.username}`}>
      <li onClick={() => {setUser(user)}}>
        {user.name.first} {user.name.last}
      </li>
      </Link>
    )
   }
   const Details =() => {
    const { user } = useContext(UserContext);
    return (
      <div>
        <div>
          Name: {user.name.title} {user.name.first} {user.name.last}
        </div>
        <div>
          Address: {user.location.street.number} {user.location.street.name} {user.location.city}, {user.location.state}, {user.location.postcode}
        </div>
      </div>
    )
   }
   export default App;

//useNavigate HOOK
//'hidden' until revealed
import React from 'react';
    //for 'state' import 'useLocation'
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
// in index.js, 'import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();
  //navigate variable gives us access to using 'useNavigate' within our Router
  const location = useLocation();
    //instatiate 'location' for 'state'
    console.log(location.state)
  return (
//and wrap '<App/> in <Router> instance; in App.js replace <Router> with empty <> React fragments:
    <>
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/user'>User</Link>
      </li>
    </ul>
    {/* <button onClick={()=> {navigate('/signup', {replace: true})}}>Sign Up</button> */}
    {/* replace 'replace' with state to pass in some state and log it out */}
    <button onClick={()=> {navigate('/signup', {state: {data: 'some data'}})}}>Sign Up</button>
    <Routes>
      <Route path='/' element={<hi>Home</hi>}/>
      <Route path='/' element={<hi>Home</hi>}/>
    </Routes>
    </>
  )
}
export default App;

//React - bring style she into the JSX file
/* App.js */
import './appStyles.css'
import {Component} from 'react'

class App extends Component {
    constructor(props){
        super(props)
    }
}

//use 'className' in JSX:
/* App.jsx */
// const App = (props)=>return ( <div className="menu" id="account-menu">)
//OR instead of using 'classNames', create a separate .css file for a give component:

    /* ./Button.module.css */
    .button {
      color: "white";
      padding: 10%;
      border: "orange";
      background-color: "grey"
      ...
    }

    /* Button.jsx */
    import styles from './Button.module.css'

    const Button = () => {
        return (
          <div>
            <button className={styles.button}>Click Me!</button>
          </div>
        );
    }
//MUI
import React from 'react';
import Paper from '@mui/material/Paper';
//'Paper' component generally used as the main container for the app's content
// or
import { Paper } from '@mui/material';

const style = {
  margin: 20
};

const NewPaper = () => (
  <Paper sx={style} />
)
//applying a custom margin by passing the style object in using the sx prop. 
//The sx prop allows us to easily make one-off changes by utilizing CSS-in-JS to apply styling objects.
export default NewPaper;

//The Container prop is the most basic layout component offered by MUI. 
//Under the hood it is basically a <div> that centers content horizontally.
import { Container } from '@mui/material';

const style = {
  color: lightgrey,
  border: 2px solid black
}

const NewContainer = () => (
  <Container maxWidth='md' sx={style}>
    Content to be displayed centered horizontally.
  </Container>
)

// 10 June 2024
// TDD REACT

    //SAMPLE from video demo:

      //App.js
      import React from 'react';
      import UserProfile from './UserProfile';

      const App = () => (
        <div id='App'>
          <UserProfile user = 'Jim' email = 'jim@galvanize.com' />
          </div>
      )
      export default App;

      //App.test.js
      import { render } from '@testing-library/react';

      import App from './App'

      describe ('App', () => {
        it ('renders a user profile', () => {
          const app = render (<App />);
          const user = app.getByText('Name: Jim');
          const email = app.getByText('Email: jim@galvanize.com');
          expect(user).toBeInTheDocument();
          expect(email).toBeInTheDocument();
        })
      })

      //UserProfile.js
      import React from 'react';

      const UserProfile = (props) => (
          <div>
              <h1>User Profile</h1>
              <div>Name: {props.user}</div>
              <div>Email: {props.email}</div>
          </div>
      )

      export default UserProfile;

      //PRACTICE PROBLEM:

            //Given the stubbed API response below,

      [
        {firstName: "George", lastName: "Washington", homeroom: "A"},
        {firstName: "Matthew", lastName: "Damon", homeroom: "B"},
        {firstName: "Mariah", lastName: "Carey", homeroom: "C"}
      ]
      // Write a unit test for the StudentList component 
      // (that contains an http call) and verifies the list items rendered.

      import React from 'react';

      export default class StudentList extends React.Component {
        constructor(props) {
          super();
          this.state = {
            students: []
          }
        }

        componentDidMount() {
          fetch('/api/students')
          .then(response => response.json())
          .then(students => this.setState({ students: students }))
        }

        render() {
          return (
            <ul>
              {this.state.students.map((student, index) => <li key={index}>{student.firstName} {student.lastName}</li>)}
            </ul>
          )
        }
      }

      //StudentList.test.js

        import React from 'react';
        import { rest } from 'msw';
        import { setupServer } from 'msw/node';
        import { render, screen, waitFor } from '@testing-library/react';
        import StudentList from './StudentList';

        const server = setupServer(
          rest.get('/api/students', (req, res, ctx) => {
            return res(ctx.json([
              {firstName: "George", lastName: "Washington", homeroom: "A"},
              {firstName: "Matthew", lastName: "Damon", homeroom: "B"},
              {firstName: "Mariah", lastName: "Carey", homeroom: "C"}
            ]));
          })
        );

        beforeAll(() => server.listen());
        afterEach(() => server.resetHandlers());
        afterAll(() => server.close());
        
        it('should populate student entry on state after a successful API call', async () => {
          render(<StudentList/>);
          
          await waitFor(() => {
            expect(screen.getByText('George Washington')).toBeInTheDocument();
            expect(screen.getByText('Matthew Damon')).toBeInTheDocument();
            expect(screen.getByText('Mariah Carey')).toBeInTheDocument();
          });
        });

//11 June 2024
//Mocking API Calls in React Tests with Jest

// UserList.js
import React, { useState, useEffect } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://api.example.com/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;

// UserList.test.js
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import UserList from './UserList';

test('renders user list', async () => {
  // Mock the fetch function
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve([{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }])
    })
  );

  render(<UserList />);

  // Wait for the component to fetch data
  await waitFor(() => {
    const userList = screen.getByText(/user list/i);
    expect(userList).toBeInTheDocument();

    const user1 = screen.getByText(/alice/i);
    expect(user1).toBeInTheDocument();

    const user2 = screen.getByText(/bob/i);
    expect(user2).toBeInTheDocument();
  });
});


//13 June
//Day 2 Project 2
  //REACT FETCH
//PlanetInfo.js
import React from 'react';
import { useState, useEffect } from 'react';

const PlanetInfo = ({ planetId, setShowPlanetInfo, showPlanetInfo }) => {
  const [planetData, setPlanetData] = useState(null);

  //by Tiffany
  useEffect(() => {
    if (planetId) {
      fetch(`https://swapi.dev/api/planets/${planetId}/`)
        .then(res => res.json())
        .then(data =>
          setPlanetData(data)); //this will retrive data in API list
      // .catch(error => console.error('Error fetching planets:', error));
    }
  }, [planetId]);

  //by Tiffany

  //because it takes a ~milisecond of time to load, it's import to have an if statement that
  //handles the "loading" state
  if (planetData === null) {
    return (
      <p>
        ...Loading
      </p>
    )
  }
  const handleClick = () => {
    setShowPlanetInfo(!showPlanetInfo);
  }

  return (
    <div onClick={handleClick} style={{ position: 'absolute', top: 20, right: 20, padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
      <h2>{planetData.name}</h2>
      <p>Planet ID: {planetId}</p>
      <p>Orbital Period: {planetData.orbital_period} days</p>
      <p>Rotation Period: {planetData.rotation_period} hours</p>
      <p>Climate: {planetData.climate}</p>
      <p>Terrain: {planetData.terrain}</p>
      <p>Gravity: {planetData.gravity}</p>
      <p>Surface Water: {planetData.surface_water}</p>
      <p>Population: {planetData.population}</p>
      <p>Diameter: {planetData.diameter}</p>
      {/* <p>Characters: {planetData.residents.map(x => <p>{x}</p>)}</p> */}
      {/* {x} is each element in the array and requires <p> tags to be displayed */}
    </div>
  );
};

export default PlanetInfo;

//SERVER SIDE 18 JUNE
//More examples are saved in 'CODE-ALONG' in dir 'SERVERSIDE'

//CHECKPOINT
//1 - Write an asynchronous fs.readFile() that reads from data.txt in utf8 
//and have the callback write the result to console.log().

//fs is already required, you don't need to require it

  // Read file asynchronously, callback function is called eventually
  fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);// can see the index.html file text in console
});

//2 - Write an asynchronous fs.writeFile() that writes the string Hello World! 
//to a file named hello-world.txt. 
//If there is an error, it should log the error to the console for debugging.

//fs is already required, you don't need to require it
fs.writeFile('hello-world.txt', 'Hello World!', function (error) {
    if (error) {
    console.log(error);
    }
    })


    function myFunction(fileName){
      // Use the below methods in your code 
      //(you will need to change the passed in parameters)
      // Hint: the newline character used in this test is \n
      //Reads an input file and returns the contents as a string
      let data = fs.readFileSync(fileName, 'utf8');
  
      let lines = data.split('\n');
  
      let capitalizedFullName = lines.map(line => {
          let fullName = line.split(' ');
          let capitalizedName = fullName.map(name =>
              `${name[0].toUpperCase()}${name.slice(1)}`
          );
          return capitalizedName.join(' ');
      });
      let newContent = capitalizedFullName.join('\n');
      //writes the contents to a file
      fs.writeFileSync(fileName, newContent, 'utf8');
    
    }
    // myFunction('names.txt');

    function myFunction(csvFileName) {
      // Read the CSV file synchronously and get its content as a string
      let csvData = fs.readFileSync(csvFileName, 'utf8');
    
      // Split the CSV content into an array of lines
      let lines = csvData.split('\n');
    
      // Extract the headers from the first line
      let headers = lines[0].split(',');
    
      // Parse the CSV lines into objects
      let jsonObjects = lines.slice(1).map(line => {
        let values = line.split(',');
        let obj = {};
        headers.forEach((header, index) => {
          obj[header.trim()] = values[index].trim();
        });
        return obj;
      });
    
      // Convert the objects array to a JSON string
      let jsonString = JSON.stringify(jsonObjects, null, 2);
    
      // Write the JSON string to a new file with .json extension
      let jsonFileName = csvFileName.replace('.csv', '.json');
      fs.writeFileSync(jsonFileName, jsonString, 'utf8');
    
      // Delete the original CSV file
      fs.unlinkSync(csvFileName);
    }
    
    // Call the function with the CSV filename
    // myFunction('input.csv');

    //API Servers - 21 June
      //mkdir - 21June
    

//26 June
//SQL
//Select the name and capitals of all states in ascending order of the land area 
//of the state that have a state bird in the following list:

// American Robin
// Mockingbird
// Eastern Bluebird

    // SELECT name, capital
    // FROM states
    // WHERE state_bird 
    // IN ('American Robin', 'Mockingbird', 'Eastern Bluebird')
    // ORDER BY land_area;

// Select the capitals of all states that have land area less than 2 times their water area.

    // SELECT capital FROM states
    // WHERE land_area < 2 * water_area;

// total_area is not a column in the states table - this won't be a problem 
//since you can make use of addition with + and some sorting...
// Select all of the data for all states, in descending order of their total area.

    // SELECT * FROM states
    // ORDER BY land_area + water_area DESC;

// James K. Polk was the President of the United States from March 4th, 1845 to March 4th, 1849. 
// One particular state joined the union one day before he entered office...

// Select the name as early_bird of that state.

    // SELECT name AS early_bird
    // FROM states
    // WHERE join_date = '1845-03-03';

//Select the names as state and state birds as bird from all states that have a water area greater 
//than or equal to 3000km^2 OR a land area less than or equal to 3000km^2.

// SELECT name AS state,
//     state_bird AS bird
// FROM states
// WHERE water_area >= 3000
//     OR land_area <= 3000;

// Delaware was the first state to join the Union, doing so on December 7th of 1787.
  // Select the names as state and capitals of all states that joined the union before January 1st of 1800.
  // SELECT capital, name AS state
  // FROM states
  // WHERE join_date BETWEEN '1787-12-07' AND '1800-01-01'
  // ORDER BY join_date;

  // Select the state birds as recent_state_birds from all states 
  // that joined the union between January 1st of 1900 and right now.

  // SELECT state_bird AS recent_state_birds
  // FROM states
  // WHERE join_date BETWEEN '1900-01-01' AND NOW();

  // Select the name as state and total of water and land area as total_area 
  // of the ten largest states by total area in descending order.

    // SELECT name AS state,
    //   (water_area + land_area) AS total_area
    // FROM states
    // ORDER BY total_area DESC 
    // LIMIT 10;

// Select the quantity of states that have names beginning with A.

// SELECT COUNT(name)
// FROM states
// WHERE name LIKE 'A%';

//or using LEFT:
//SELECT COUNT(*) AS begin_with_a FROM states WHERE LEFT(name,1) LIKE 'A';

// Select all data for all states that have USPS two-letter codes that are the 
// same two letters as the first two letters of their name.

// SELECT * FROM states
// WHERE LEFT(usps_code,2)
// ILIKE LEFT(name,2);

//or -- SELECT * FROM states WHERE LEFT(name,2) ILIKE usps_code;

// James K. Polk was the President of the United States from March 4th, 1845 to March 4th, 1849.

// Select the quantity of states that joined the union during his presidency as polk_states.
// SELECT COUNT(*) AS polk_states
// FROM states
// WHERE join_date BETWEEN '1845-03-04' AND '1849-03-04';

// Select the name of the state Alabama, but replace all of the lower case as with 4s.

// SELECT REPLACE(name, 'a', '4')
// FROM states
// WHERE name = 'Alabama';

// What would you do if you wanted to replace more than one thing? REPLACE only lets you do one replacement at a time...

// Select the names of all states but for any states whose names contain lowercase s, 
// (i.e. s) replace with 5 and for any lower-case p (i.e. p) replace with the symbols |>. If you succeed, 
// you'll return 50 rows however Mississippi , for example, should become Mi55i55i|>|>i

// SELECT REPLACE(
// REPLACE(name, 'p', '|>'
// ), 's', '5')
// FROM states
// -- WHERE name = 'Mississippi';

// All of the water areas for the states are given in square kilometers. 
// For all states, select the name and the water area as square miles, rounded, as water_area_sq_mi 
// and the original water area as water_area_sq_km, in descending order of water area.

// To convert any number of square kilometers to square miles, divide it by 2.59.

// SELECT name,
//         water_area AS water_area_sq_km,
//         ROUND(water_area/2.59) AS water_area_sq_mi
// FROM states
// ORDER BY water_area DESC;

// Take the conversion a step further and get some total areas for the states. 
// The total area is the sum of the water and land areas.

// Select the names of all states, the rounded total area in square miles as total_sq_mi, 
// and the total area in square kilometers as total_sq_km. 
// The results should be sorted in descending order of the total area.

// SELECT name,
//         (water_area + land_area) AS total_sq_km,
//         ROUND((water_area + land_area)/2.59) AS total_sq_mi
// FROM states
// ORDER BY total_sq_mi DESC;

// There are a number of state birds that are repeats.

// Select a list of all unique state birds.

//   SELECT DISTINCT state_bird FROM states;

//Now, select the number of unique state birds as bird_count
  // SELECT COUNT(DISTINCT state_bird) AS bird_count
  // FROM states;

// Some of the states are reasonably small.

// Select name and population as pop for all states 
// that have a population between five hundred thousand (500,000) and one million (1,000,000).
  // SELECT name,
  //     population AS pop
  // FROM states
  // WHERE population BETWEEN 500000 AND 1000000;

//A state's land-to-water ratio could be thought of as the number derived 
//from dividing its land area by its water area.

//Select the name and land-to-water ratio, rounded, as land_to_water_ratio of all the states.
      // SELECT name,
      // ROUND(land_area/water_area) AS land_to_water_ratio
      // FROM states
      // ORDER BY land_area/water_area DESC;

// Select the state bird and name of all states ordered first by state bird and 
// then in ascending order by states' names where states share a state bird.
  // SELECT state_bird, name
  // FROM states
  // ORDER BY state_bird, name;

// Select the name, capital, and century that the state joined the union as century, 
// sorted by descending order of join date.

// For the purpose of this exercise, use ordinal numerals for the century - in other words, 
// the year 1787 is in the 18th century, 
// the year 1852 is in the 19th century, and the year 1920 is in the 20th century.
//   SELECT name, capital, CASE 
//   WHEN join_date BETWEEN '1700-01-01' AND '1799-12-31'
//     THEN '18th' 
//   WHEN join_date BETWEEN '1800-01-01' AND '1899-12-31'
//     THEN '19th' 
//   WHEN join_date BETWEEN '1900-01-01' AND '1999-12-31'
//     THEN '20th'  
//   END century
//   FROM states ORDER by join_date DESC;

// Select the names of all states with populations larger than that of Indiana
  // SELECT name
  // FROM states 
  // WHERE population > (SELECT population
  // FROM states
  // WHERE name = 'Indiana')
  // ORDER BY population DESC;

// Select the names of all states with water areas between those of Nevada and Ohio (non-inclusively)

// SELECT name
// FROM states
// WHERE water_area > (SELECT water_area
//     FROM states
//     WHERE name = 'Nevada')
// AND water_area < (SELECT water_area 
//     FROM states 
//     WHERE name = 'Ohio');

// Select the name and land area of the largest state that DOESN’T have the Western Meadowlark as its state bird.
  // SELECT name, land_area FROM (SELECT name, land_area, state_bird 
  //   FROM states WHERE state_bird != 'Western Meadowlark') AS non_bird_states
  // ORDER BY land_area DESC
  // LIMIT 1;

//Select the name and rounded land area in SQUARE MILES, population, rounded population per square mile 
//as population_per_sq_mi from all states with greater than or equal to 8 letters in their name. 
//Sort the results in descending order of population per square mile.

// Reminder - to convert square km to square miles, divide by 2.59
//     SELECT name, 
//         population, 
//         ROUND(population/(land_area/2.59)) AS population_per_sq_mi 
//     FROM states 
//     WHERE LENGTH(name) >= 8 
//     ORDER BY population_per_sq_mi DESC;

//using nested SELECTS:
//     SELECT name, 
//       ROUND(land_area/2.59) AS sq_mi, 
//       population, 
//       ROUND(population/(land_area/2.59)) AS population_per_sq_mi 
//     FROM (SELECT * FROM states WHERE LENGTH(name) >= 8) AS name_length 
//     ORDER BY population_per_sq_mi DESC;

// Select the names, populations, and land area in rounded square miles for 
// states that have a larger population per square mile of land than California.

// Reminder - to convert square km to square miles, divide by 2.59
// SELECT name, population, 
//     ROUND(land_area/2.59) AS square_mi
//     -- ,population/(land_area/2.59) AS pop_per_sq_mi
// FROM states
// WHERE population/(land_area/2.59) > (SELECT population/(land_area/2.59)
//     FROM states WHERE name = 'California')
// ORDER BY population/(land_area/2.59) DESC;

//or ---
// SELECT name, 
  // ROUND(land_area/2.59) AS sq_mi, 
  // population  
// FROM states 
// WHERE ROUND(population/(land_area/2.59)) > 
//    (SELECT ROUND(population/(land_area/2.59)) 
// FROM states WHERE name = 'California');

//2 TABLES!!

// Select the names and business contacts from all companies 
// that are in a state that matches the same two-letter postal code as the state of Delaware.

  // SELECT business_name, contact_name
  // FROM corporate_accounts
  // WHERE business_state = (SELECT usps_code FROM states
  // WHERE name = 'Delaware');

//   New England is an area of the North-Eastern United States comprised of six states: 
//   Connecticut, Maine, Massachusetts, New Hampshire, Rhode Island, and Vermont.

// Select the names and states of all companies operating in New England sorted in 
// alphabetical order first of of their business_state and then by their business names.
//   SELECT business_name, business_state
//   FROM corporate_accounts
//   WHERE business_state 
      //IN(SELECT usps_code FROM states
//       WHERE name 
//       IN('Connecticut', 'Maine', 
//       'Massachusetts', 'New Hampshire', 
//       'Rhode Island', 'Vermont'))
//   ORDER BY business_state, business_name;

//ANSWER:
// SELECT business_name, business_state 
// FROM corporate_accounts 
// WHERE business_state 
// IN (SELECT usps_code FROM states 
//   WHERE name IN ( 'Connecticut', 'Maine', 'Massachusetts', 'New Hampshire', 'Rhode Island', 'Vermont')) 
// ORDER BY business_state, business_name;


// Select the name and capital of all states that have a state bird in the following list of popular birds:

// Western Meadowlark
// Northern Cardinal
// Northern Mockingbird
// American Robin
// SELECT name, capital 
// FROM states
// WHERE state_bird
// IN ('Western Meadowlark', 'Northern Cardinal', 
// 'Northern Mockingbird', 'American Robin');

/*
--------The code is mightier than the sword----------
----------------------//\\
---------------------// ¤ \\
---------------------\\ ¤ //
---------------------- \\//
-------------------- (___)
---------------------(___)
---------------------(___)
---------------------(___)_________
--------\_____/\__/----\__/\_____/
------------\ _°_[------------]_ _° /
----------------\_°_¤ ---- ¤_°_/
--------------------\ ° /
---------------------|\_°_/|
---------------------[|\_/|]
---------------------[|[¤]|]
---------------------[|;¤;|]
---------------------[;;¤;;]
--------------------;;;;¤]|]\
-------------------;;;;;¤]|]-\
------------------;;;;;[¤]|]--\
-----------------;;;;;|[¤]|]---\
----------------;;;;;[|[¤]|]|---|
---------------;;;;;[|[¤]|]|---|
----------------;;;;[|[¤]|/---/
-----------------;;;[|[¤]/---/
------------------;;[|[¤/---/
-------------------;[|[/---/
--------------------[|/---/
---------------------/---/
--------------------/---/|]
-------------------/---/]|];
------------------/---/¤]|];;
-----------------|---|[¤]|];;;
-----------------|---|[¤]|];;;
------------------\--|[¤]|];;
-------------------\-|[¤]|];
---------------------\|[¤]|]
----------------------\\¤//
-----------------------\|/
------------------------V

*/
