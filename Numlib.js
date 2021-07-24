class Numgen {
	result = 'sw';
	constructor(len = 10) {
		console.log("constructor: ", this.result);
	}
}

const gen = new Numgen();
const gen2 = new Numgen();