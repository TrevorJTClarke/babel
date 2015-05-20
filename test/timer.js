// import 
// 
describe("Timer class", function() {
    var _T = new Timer();

    it("Timer class Exists", function() {
        expect(_T).toBeDefined();
    });

    describe("Timer methods", function() {
        
        it("Timer.constructor method Exists", function() {
            expect(_T.constructor).toBeDefined();
        });
        it("Timer.tick method Exists", function() {
            expect(_T.tick).toBeDefined();
        });
        it("Timer.start method Exists", function() {
            expect(_T.start).toBeDefined();
        });
        it("Timer.pause method Exists", function() {
            expect(_T.pause).toBeDefined();
        });
        it("Timer.resume method Exists", function() {
            expect(_T.resume).toBeDefined();
        });
    });
});