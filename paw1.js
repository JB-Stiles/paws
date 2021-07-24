"use strict";
import { genPin } from "./helpers/paw1.js";
import { getMostPerfectAttempt } from "./helpers/paw1.js";

// ========================================================================
// paw 1 : CodeBreaker
// The computer generates a 4 digit code
// The user types in a 4 digit code. Their guess.
// The computer tells them how many digits they guessed correctly

// udo: my soln 4 dis problem is the perfect and imperfect guesses repectively
// Extension : the computer tells them how many digits are
// guessed correctly in the correct place and how many digits
// have been guessed correctly but in the wrong place.

// The user gets 12 guesses to either
// win – guess the right code.Or lose – run out of guesses.
// =====================================================================

// test data
// let computerCode = ["5507", 5, 5, 0, 7];
// end test data

// The computer generates a 4 digit code
let computerCode = genPin(4);
export const computerCode_copy = [...computerCode];
export const real_computerCode = computerCode.splice(1);
console.log("USING THE 12GUESSES");
export const limiter = 10;
export const trials = getguessesFromUser(limiter);
getMostPerfectAttempt(trials);
import { getguessesFromUser } from "./helpers/paw1.js";
console.log("final trials summary", trials);
