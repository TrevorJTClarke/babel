import {Timer} from './timer'

describe('Timer', () => {

	it('should add two numbers', () => {
    	let _T = new Timer();
    	expect(_T).toBeDefined();
        // let sum = calculator.add(1,4);
        // expect(sum).toBe(5);
	});
   // it('should add two numbers', () => {
   //     let calculator = new Calculator();
   //     let sum = calculator.add(1,4);
   //     expect(sum).toBe(5);
   // });
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
        
//         it("Timer.constructor method Exists", function() {
//             expect(_T.constructor).toBeDefined();
//         });
//         it("Timer.tick method Exists", function() {
//             expect(_T.tick).toBeDefined();
//         });
//         it("Timer.start method Exists", function() {
//             expect(_T.start).toBeDefined();
//         });
//         it("Timer.pause method Exists", function() {
//             expect(_T.pause).toBeDefined();
//         });
//         it("Timer.resume method Exists", function() {
//             expect(_T.resume).toBeDefined();
//         });
//     });
// });