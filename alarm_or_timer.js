"use strict";
console.log("Hello the program just started");
let time_init = new Date().getSeconds();
let time_init_ms = new Date().getMilliseconds();
/**
 * @param i refers to time in sec
 */
let i = 0;
/**
 * @param i_ms refers to time in millisec
 */
let i_ms = 0;
/**
 * @param alarmFreq refers to frequency of the
 * alarm in seconds
 */
let alarmFreq = 10;

syncTime(10);
/**
 * This function allows you to synchronize your program time
 * with your system time depending on the time(in seconds)
 * provided as argument to the function
 * @param timeInSec refers to the configured time in secs
 * for which your program time will be synced to the system
 * time eg.
 *
 *  program 10sec == system 10sec, or
 *
 *  program 30sec == system 30sec etc.
 */

function syncTime(timeInSec) {
	/**
	 * this check is just to establish that the user just ran the
	 *  program for the first time
	 */
	if (new Date().getSeconds() === time_init) {
		while (time_init % timeInSec !== 0) {
			time_init++;
			i++;
		}
		// convert time from sec -> millisec (1s=1000ms)
		i_ms = i * 1000;
		time_init_ms > 600 ? (i -= 300) : null;
		console.log("time disparity :", i);
		console.log("time disparity_ms :", time_init_ms);
	}
	setTimeout(() => {
		console.log("we just started counting after sync");
		anySecAlarm(alarmFreq);
	}, i_ms);
}
function anySecAlarm(alarmFreq) {
	return setInterval(() => {
		console.log(new Date().getSeconds() + " now 10 seconds has passed");
		//   check this conditional
		if (new Date().getSeconds() !== time_init) {
			// alert("there is an issue here" + new Date().getSeconds());
		}
	}, alarmFreq * 1000);
}

/* 
	*[program -> system] time synchronizer in secs*
	*based on the time disparity*
	 ie. the 'anySecAlarm' program is delayed for the duration 
	 of the time difference between the program start-time
	 and when the next 10th-sec (system time clock) 
	 will occur in the program;	 after which the 'anySecAlarm'
	  will be automatically run

	  The reason for this is because humans cannot always manually
	  sync the time or start the time at the exact 10th sec mark
	  the purpose of this synchronization is to give a human readable feel 
	  to the program so that instead of having results like this:
	 	alarm_or_timer.js:9 44 now 10 seconds has passed
		alarm_or_timer.js:9 54 now 10 seconds has passed
		alarm_or_timer.js:9 4 now 10 seconds has passed
		alarm_or_timer.js:9 14 now 10 seconds has passed
		alarm_or_timer.js:9 24 now 10 seconds has passed
		alarm_or_timer.js:9 34 now 10 seconds has passed
		alarm_or_timer.js:9 44 now 10 seconds has passed
		alarm_or_timer.js:9 54 now 10 seconds has passed
	we'll have programs like this: 

*/
