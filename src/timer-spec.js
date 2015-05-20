import {Timer} from './timer'

describe('Timer Class', () => {

	it('All Timer methods Exist', () => {
    	let _T = new Timer()
    	expect(_T).toBeDefined()
    	expect(_T.constructor).toBeDefined()
        expect(_T.tick).toBeDefined()
        expect(_T.start).toBeDefined()
        expect(_T.pause).toBeDefined()
        expect(_T.resume).toBeDefined()
	});
    it('should have a default duration', () => {
    	let _T = new Timer();
    	let dur = _T.constructor(500).duration;
		expect(dur).toBe(500);
    });
   //  it('should subtract two numbers', () => {
   //      let calculator = new Calculator();
   //      let sum = calculator.subtract(4,1);
   //      expect(sum).toBe(3);
   //  });
});
// 
// describe("Timer class", function() {
//     var _T = new Timer();

//     it("Timer class Exists", function() {
//         expect(_T).toBeDefined();
//     });

//     describe("Timer methods", function() {
        
        // it("Timer.constructor method Exists", function() {
        //     expect(_T.constructor).toBeDefined();
        // });
        // it("Timer.tick method Exists", function() {
        //     expect(_T.tick).toBeDefined();
        // });
        // it("Timer.start method Exists", function() {
        //     expect(_T.start).toBeDefined();
        // });
        // it("Timer.pause method Exists", function() {
        //     expect(_T.pause).toBeDefined();
        // });
        // it("Timer.resume method Exists", function() {
        //     expect(_T.resume).toBeDefined();
        // });
//     });
// });