/* ES6 Timer */
export class Timer {

	/**
	 * Build the base of Timer
	 * @param  {String}:  dur: duration in milliseconds
	 * returns the function instance
	 */
	constructor(){

		// setup the generator
		function *timeIterator(total) {
			var cur = total
			while(cur > 1)
			    yield --cur
			
			return cur
		}

		// assign the iterator to class
		this.step = timeIterator

		return this
	}

	/**
	 * decrements the count, based off duration
	 * returns a generator instance
	 */
	tick( dur ){
		var _self = this, hours, mins, milli, time, tik;
		var duration = ((+new Date) + 1000 * (60 * dur) + 500)
		var elem = document.getElementById( _self.element )
		// var stepper = this.step(1000)
		// console.log(stepper)

		// var timer = setInterval(function(){
		// 	console.log(stepper.next())
		// },1000)

		// setTimeout(function(){
		// 	window.clearTimeout(timer)
		// },30000)

		function format(t){
		    return (t <= 9 ? "0" + t : t)
		}

		function tock () {
			milli = duration - (+new Date)
			_self.currentTime = milli
				console.log(milli)

			if ( milli < 1000 ) {
				console.log("DONE")
			    // _self.end()
				return
			} else {
			    tik = new Date( milli )
			    hours = tik.getUTCHours()
			    mins = tik.getUTCMinutes()
			    
			    elem.innerHTML = (hours ? hours + ':' + format( mins ) : mins) + ':' + format( tik.getUTCSeconds() )
			    
			    _self.timer = setTimeout( tock, tik.getUTCMilliseconds() + 500 );
			}
		}

		// check if pre-defined or not
		tock()
	}

	/**
	 * waits until this method is called, then starts the timer/template loop
	 */
	start(elem, dur = 30){
		console.log("timer started:", dur)
		this.element = elem
		this.tick( dur )
	}

	/**
	 * stops the current timer/template loop
	 */
	pause(){
		var _self = this
		window.clearTimeout( _self.timer )
		console.log("timer paused")
	}

	/**
	 * stops the current timer/template loop
	 */
	resume(){
		var _self = this
		var dur = new Date( _self.currentTime )
		this.tick( dur.getUTCMinutes() )
		console.log("timer resumed")
	}
}