// console.log("hello there");
// /**
// paw 1 : CodeBreaker
// The computer generates a 4 digit code
// The user types in a 4 digit code. Their guess.
// The computer tells them how many digits they guessed
// correctly

// udo: my soln 4 dis problem is the perfect and imperfect guesses repectively
// Extension : the computer tells them how many digits are
// guessed correctly in the correct place and how many digits
// have been guessed correctly but in the wrong place.

// The user gets 12 guesses to either
// win – guess the right code. Or lose – run out of guesses.

// The computer generates a 4 digit code
// test data
// let computerCode = ["7004", 7, 0, 0, "4"];
// end test data
let computerCode = genPin(4);
let computerCode_copy = [...computerCode];
// The user types in a 4 digit code. Their guess.
let user_raw_code = prompt("Enter your 4 digit code", 1234);
// store usercode
user_code = user_raw_code.split("", 4);
// concatenate the resulting array to a string
// and save it in the array[0]
user_code.unshift(user_code.join(""));
let wonGuesses = Array();
let perfectGuesses = Array();
let imperfectGuesses = Array();
console.log("user", user_code);
console.log("computerCode", computerCode);
console.log('USING THE 12GUESSES');



// The computer tells them how many digits they guessed
// correctly
// we are starting from 1 becos of non zerobased indexed array
for (let index = 1; index < computerCode.length; index++) {
	const el = computerCode[index];
	// Array.prototype.forEach;
	for (let j = 1; j < user_code.length; j++) {
		const elem = user_code[j];
		// when a match is found
		if (elem == el) {
			wonGuesses.push(elem);
			// when the match found has corresponding indexes
			if (index == j) {
				perfectGuesses.push(elem);
			} else {
				imperfectGuesses.push(elem);
			}
			// this code is essential, it marks the matched codes as 'x'
			computerCode[index] = "x";
			user_code[j] = "x";
		}
	}
	console.log("(inside) new user_code: ", user_code);
	console.log("(inside) new computerCode: ", computerCode);
	console.log("====================================");
}

console.log("final computerCode: ", computerCode);
console.log("final userCode: ", user_code);

console.log("wonGuesses", wonGuesses);
console.log("perfectGuesses", perfectGuesses);
let qualifier = wonGuesses.length > 1 ? "guesses" : "guess";
let qualifier_2 = perfectGuesses.length > 1 ? "guesses" : "guess";

// if u got at least one correct guess
if (wonGuesses) {
	console.log(
		`Congrats! you got ${wonGuesses.length} ${qualifier} correctly`
	);
} else {
	console.log("Oops! Try again, you failed the game of codes with 0 points");
}

if (perfectGuesses.length == computerCode.length) {
	console.log("Master!, you got all " + perfectGuesses.length + qualifier_2);
	console.log(" of code(s) correctly and in the right order");
}

// if (perfectGuesses) {
// 	console.log(
// 		`Congrats, you got ${perfectGuesses.length} perfect ${qualifier_2}`
// 	);
// }
// summary MESSAGES
console.log("SUMMARY");
// PERFECT GUESSES
console.log(`YOU HAVE MADE ${perfectGuesses.length} PERFECT ${qualifier_2}`);
// IMPERFECT GUESSES
console.log(
	`YOU HAVE MADE ${imperfectGuesses.length} IMPERFECT ${qualifier_2}`
);

/**
 * This function returns an array where retArray[0] is a
 * concatenation of all the elements in the array.
 * because of this, zero index is eliminated hence,
 * the first element is stored in index[1]; =>
 *
 * el_0 = retArray[1] + retArray[2] ... + retArray[n]
 *
 *  el_1 = retArray[1]
 *
 *  el_2 = retArray[2] etc.
 * @param {limit} limit refers to the limit for the pin
 *  length generated by the machine
 */

function genPin(limit) {
	let fish,
		resultArray = Array();
	for (let index = 0; index < limit; index++) {
		// this generates a single digit between 0-9
		// rounds up a number to the nearest whole number
		fish = Math.floor(Math.random() * 10);
		// this saves the generated whole number to a
		// resultArray which we will return to the user
		resultArray.push(fish);
	}
	resultArray.unshift(resultArray.join(""));
	return resultArray;
}
// let resw = prompt("Enter your 4 digit code");
// console.log(resw);
