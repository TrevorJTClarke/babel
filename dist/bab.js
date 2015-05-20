// /* ES6 Feature tests */
// // console.log("HEllo!")

// var nwFn = (f => {
// 	// console.log("F:", f)
// })

// nwFn("this is nwFn!")

// var evens = [2,4,6,8,10,12,14,16,18,20]
// var nums = evens.map((v, i) => v + i)
// var fives = []

// // Statement bodies
// nums.forEach(v => {
// 	if (v % 5 === 0)
//     	fives.push(v)
//     	nwFn(v)
// });
// console.log(fives)
// var s = new Set();
// s.add("hello") // Strings
//  .add({"data": "hiii data"}) // Objects
//  .add(["First", "Second"])
// // s.add("hello").add("goodbye").add("hello").add({"data": "hiii data"})
// s.size === 2;
// s.has("hello") === true;
// console.log(s.size)
// // console.log(s)
// // console.log(s.has("hello"))
// // console.log(s.keys())
// // console.log(s.entries())
// // console.log(s.delete("hello"))
// // console.log(s.has("hello"))
/* ES6 Timer */
export class Timer {

	/**
	 * Build the base of Timer
	 * @param  {String}:  dur": duration in milliseconds
	 * @return {[type]}          an instance of the Timer
	 */
	constructor(dur = 1000){
		this.duration = dur
		return this
	}

	/**
	 * decrements the count, based off duration
	 */
	tick(){
		console.log("timer tick:", this.options.dur)
	}

	/**
	 * waits until this method is called, then starts the timer/template loop
	 */
	start(){
		console.log("timer started:", this.options)
		this.tick()
	}

	/**
	 * stops the current timer/template loop
	 */
	pause(){
		console.log("timer paused:", this.options)
	}

	/**
	 * stops the current timer/template loop
	 */
	resume(){
		console.log("timer resumed:", this.options)
	}
}

// USE:
// let options = new Map()
// 	options.set("dur", 1000)

// var _t = new Timer(options)

// console.log("timer instance:", _t)
// _t.start();