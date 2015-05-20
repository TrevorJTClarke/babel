/* ES6 Timer */
class Timer {

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