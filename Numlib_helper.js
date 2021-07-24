// // import { * } from "Numliib";
// // @import "Numlib.js";
// console.log("hello there");
// /**
// paw 1 : CodeBreaker
// The computer generates a 4 digit code
// The user types in a 4 digit code. Their guess.
// The computer tells them how many digits they guessed correctly


// Extension : the computer tells them how many digits are
// guessed correctly in the correct place and how many digits have
// been guessed correctly but in the wrong place.

// The user gets 12 guesses to either win – guess the right code. Or
// lose – run out of guesses.

// */
// /**
//  * case scenarios
//  *
//  * case1: rand()
//  *  output: a random number between 0-1M
//  *  1a: rand(int $limit) : int
//  *  output: a random number between 0-limit
//  *  1b: rand(int $start=0, int $stop=1m) : int
//  *  output: a random number between $start - $stop
//  *  1c: randrange(int $start, int $stop, int $step=1) : array()
//  *  output: an array of random number
//  * between $start, $stop; using the $step as
//  * the interval between each generated number
//  * Nutshell: an arithmetic progression where
//  * the step is specified in addition 

//  * 
//  * geometric progression range
//  * output: a range of geometric progression whre
//  * the step is specified in multiplication not addition 
//  *
//  *
//  *
//  *
//  */
// let fish = Math.random();
// console.log(" default(0.01-0.9", fish);
// console.log(" defaultMOdified(0.1-1.0", fish + 0.1);

// btwn 0-9
// console.log(" btwn 0-9", fish * 10);
// btwn 0-10
// console.log(" btwn 0-10", fish * 10 + 0.4);

// // btwn 0-9
// console.log(" btwn 0-99", fish * 100);
// console.log(" btwn 0-100", fish * 100 + 0.5);
// let temp = fish * 100 + 0.5;
// // while (temp < 100) {
// // 	temp = Math.random() * 100 + 0.5;
// // }
// let counter = 0;
// while (fish > 0.0001) {
// 	fish = Math.random();
// 	counter++;
// }
// console.log(counter, "loop times : ", fish);

// // console.log(temp);

// // btwn 0-9
// // console.log(fish * 10);
// // my js lib
// // for maths
// // random whole number generator
// /**
//  * @param limit limit is the range limit for the random
//  * number generated default limit=1 billion
//  *   @param start start is the start range for the random
//  * number to be generated, default start=1
//  */
// function rand(len = 10, start = 0, limit = Math.pow(10, 7)) {
// 	let fish = Math.random() * limit;
// 	console.log("original", fish);
// 	console.log("resulting fish:", fish.toPrecision(len));
// 	console.log("using round", Math.round(fish));
// 	// when using precision, a arg > 5 => fixed decimal places
// 	// an arg < 5 => exponentiation of the result
// 	console.log("using precision", fish.toPrecision(1));
// 	// console.log("using exponential", fish.toExponential(3));
// 	start !== 1
// 		? console.log("using fixed decimal places", fish.toFixed(3))
// 		: null;
// }
// rand();



// // just practice