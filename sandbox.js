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
