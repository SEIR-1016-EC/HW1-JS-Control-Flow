////////////////////////////////////
// READ THE INSTRUCTIONS BELOW BEFORE STARTING!
////////////////////////////////////
/*
 * Before you start, add this javascript file in a script tag in index.html.
 *
 * The loops are wrapped in functions for testing purposes. Please do not modify the names of the functions.
 *
 * Test your output in the browser by commenting in and out the function call (aka invocation), e.g., "prompt1()"
 *
 */

/*
 * Prompt 1:
 *
 * Create a loop that counts from 0 to 10, printing each number (including 0 and 10).
 */

// The first one has been done for you as an example!
//function prompt1() {
//  for (let i = 0; i <= 10; i++) {
//    console.log(i);
//  }
//}

// COMMENT IN THE BELOW LINE OF CODE TO TEST YOUR OUTPUT IN THE BROWSER!
// prompt1()

// 🌟 MAKE A COMMIT: "Complete prompt 1"

/*
 * Prompt 2:
 *
 * Create a loop that prints every even number BETWEEN 0 and 100 (not including 0 or 100).
 */

//function prompt2() {
  // YOUR CODE HERE

//  console.log("Prompt 2 begins here")
   
//  for(let num = 2; num>1 && num<100; num+=2){
//      console.log(num);
//  }
// }
//    prompt2(); 
// console.log("Prompt 2 ends here")

// COMMENT IN THE BELOW LINE OF CODE TO TEST YOUR OUTPUT IN THE BROWSER!
// prompt2();

// 🌟 MAKE A COMMIT: "Complete prompt 2"

/*
 * Prompt 3:
 *
 * Create a loop that counts from -5 to 5, printing each number (including -5 and 5).
 */

//console.log("Prompt 3 begins here")

//  function prompt3() {
  // YOUR CODE HERE
//for(let negNum = -5; negNum<6; negNum+=1){
//    console.log(negNum);
//  }

//}
// prompt3();

//console.log("Prompt 3 ends here")

// COMMENT IN THE BELOW LINE OF CODE TO TEST YOUR OUTPUT IN THE BROWSER!
// prompt3()

// 🌟 MAKE A COMMIT: "Complete prompt 3"

/*
 * Prompt 4:
 *
 * Create a loop that counts down from 10 to 0, printing each number (including 10 and 0).
 */

//console.log('Begining of prompt 4');

//  function prompt4() {
    // YOUR CODE HERE
//    for(let num = 10; num<11 && num>=0; --num){
//      console.log(num);
//    }
  
//  }
//  prompt4();

//console.log('end of prompt 4');

// COMMENT IN THE BELOW LINE OF CODE TO TEST YOUR OUTPUT IN THE BROWSER!
// prompt4()

// 🌟 MAKE A COMMIT: "Complete prompt 4"

/*
 * Prompt 5:
 *
 * Create a loop that counts down from 5 to -5, printing each number (including 5 and -5).
 */

 // console.log('Begin Prompt 5');

//  function prompt5() {
    // YOUR CODE HERE

//    for(let Num = 5; Num<6 && Num>-6; --Num){
//          console.log(Num);
//        }
//  }
//    prompt5();

//  console.log('End of Prompt 5');

// COMMENT IN THE BELOW LINE OF CODE TO TEST YOUR OUTPUT IN THE BROWSER!
// prompt5()

// 🌟 MAKE A COMMIT: "Complete prompt 5"

/*
 * Prompt 6:
 *
 * Create a loop that counts from 0 to 50 (inclusive) in multiples of 2 (instead of 1),
 * printing each number.
 */
//console.log('prompt 6 begins here');

//function prompt6() {
  // YOUR CODE HERE
//  for(let num = 0; num>-1 && num<52; num +=2){
//      console.log(num);
//  }
//}
//    prompt6();
//console.log('prompt 6 begins here');

// COMMENT IN THE BELOW LINE OF CODE TO TEST YOUR OUTPUT IN THE BROWSER!
// prompt6()

// 🌟 MAKE A COMMIT: "Complete prompt 6"

/*
 * Prompt 7:
 *
 * For the numbers 0 - 100 (inclusive), print out "I found a [ number ]. High five!" if the
 * number is a multiple of five.
 *
 * Sample Output IN THE BROWSER:
 *   - I found a 5. High five!
 *   - I found a 10. High five!
 */

//I had trouble with this prompt. The first response in this article on Stack Overflow
//helped me a lot: https://stackoverflow.com/questions/51009597/code-check-for-multiple-of-3-and-5#:~:text=function%20multipleSum(n)%7B%20var,correct%20one%20is%20233168%20why%3F
//Similarly this video explaining what modulo is was very helpful: https://www.youtube.com/watch?app=desktop&v=3Gz_CLMiGFQ
console.log('prompt 7 begins here');
function prompt7() {
  // YOUR CODE HERE
  for(let i = 0; i>=0 && i<=100; i++ ){
    if(i % 5 === 0) {
        console.log('I found a ' + i + ' High five!');
    }
  }

}
 prompt7();
console.log('prompt 7 ends here');
// COMMENT IN THE BELOW LINE OF CODE TO TEST YOUR OUTPUT IN THE BROWSER!
// prompt7()

// 🌟 MAKE A COMMIT: "Complete prompt 7"

/*
 * Prompt 8:
 *
 * Create a variable called someNumber and assign it a random number between
 * 0 and 100 (not inclusive). Hint: Use Math.random so that it generates a new number every time the code is run!
 *
 * Create a conditional that matches these requirements:
 *   - if someNumber is less than 30, print "That's a small number!"
 *   - if someNumber is between 30 and 60, print "The number is medium sized."
 *   - if someNumber is greater than 60, print "We got a big one!"
 */

//  define someNumber here
var someNumber;

function prompt8() {
  // print someNumber to the console in your function so you can see its value
  console.log(someNumber);

  // YOUR CODE HERE
}

// COMMENT IN THE BELOW LINE OF CODE TO TEST YOUR OUTPUT IN THE BROWSER!
// prompt8();

// 🌟 MAKE A COMMIT: "Complete prompt 8"

/*
 * Prompt 9:
 *
 * Iterate over the starWars array printing each character's name and index
 *
 * i.e.:
 *  0. Han
 *  1. C3PO
 *  2. R2D2
 */

const starWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];

function prompt9() {
  // YOUR CODE HERE
}

// COMMENT IN THE BELOW LINE OF CODE TO TEST YOUR OUTPUT IN THE BROWSER!
// prompt9();

// 🌟 MAKE A COMMIT: "Complete prompt 9"

/*
 * Prompt 10:
 *
 * Write a loop that pushes every even number between 0 and 100 into an array,
 * then print the array.
 */
function prompt10() {
  const myArray = [];
  // YOUR CODE HERE

  // don't forget to return the array after pushing the numbers into it so you can see it in the browser!
  // return the array
  return myArray;
}

// COMMENT IN THE BELOW LINE OF CODE TO TEST YOUR OUTPUT IN THE BROWSER!
// console.log(prompt10());

// 🌟 MAKE A COMMIT: "Complete prompt 10"

/*
 * Prompt 11:
 *
 * Find the median number in the following nums array (the mid point), then
 * console.log that number. The median number is the middle number in a SORTED list of numbers. Think through the steps you'll need to take to determine this number with code!
 *
 * Hint: What does Math.floor() do?
 */

let nums = [
  14,
  11,
  16,
  15,
  13,
  16,
  15,
  17,
  19,
  11,
  12,
  14,
  19,
  11,
  15,
  17,
  11,
  18,
  12,
  17,
  12,
  71,
  18,
  15,
  12,
];

function prompt11() {
  let median;
  // YOUR CODE HERE

  console.log(median);
}
// COMMENT IN THE BELOW LINE OF CODE TO TEST YOUR OUTPUT IN THE BROWSER!
// prompt11();

// 🌟 MAKE A COMMIT: "Complete prompt 11"

/*
 * Prompt 12:
 *
 * Did you know that you can nest loops? The catch is that you have to use
 * different incrementers (normally i) in the inner vs. outer loops. You'll commonly see developers use
 * another 1-letter incrementer (j, k, l, etc).
 *
 * Create an "outer" loop that counts up from 1 to 10 with an incrementer of i.
 * Create an "inner" loop that counts from 11 to 20 with an incrementer of j.
 * Inside the inner loop, print `i: ${i} / j: ${j}`
 * You might need to consult Google to see examples of nested for loops!
 */

function prompt12() {
  // YOUR CODE HERE
}

// COMMENT IN THE BELOW LINE OF CODE TO TEST YOUR OUTPUT IN THE BROWSER!
// prompt12();

// 🌟 MAKE A COMMIT: "Complete prompt 12"

/*
 * Prompt 13:
 *
 * Using nested loops, print all the values inside the nested arrays.
 */

let nestedArrays = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"],
];

function prompt13() {
  // YOUR CODE HERE
}

// COMMENT IN THE BELOW LINE OF CODE TO TEST YOUR OUTPUT IN THE BROWSER!
// prompt13();

// 🌟 MAKE A COMMIT: "Complete prompt 13"

///////////////////////////////////////////
// DO NOT MODIFY CODE BENEATH THIS LINE :)
///////////////////////////////////////////
if (!this.window) {
  module.exports = {
    prompt1,
    prompt2,
    prompt3,
    prompt4,
    prompt5,
    prompt6,
    prompt7,
    someNumber,
    prompt8,
    prompt9,
    prompt10,
    prompt11,
    prompt12,
    prompt13,
  };
}
