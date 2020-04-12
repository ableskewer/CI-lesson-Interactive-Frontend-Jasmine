describe("Calculator", function () {

    beforeEach(function () {
        calc = new Calculator;
    });

    describe("Multiplication tests", function () {
        it("should return 21", function () {
            calc.mult(3);
            calc.mult(7);
            expect(calc.value).toBe(21);
        });
        it("should return 21", function () {
            calc.mult(4);
            calc.mult(3);
            expect(calc.value).toBe(12);
        });
        it("should return an error if we don't supply two numbers", function () {
            spyOn(window, "alert")
            calc.mult("Hitchhikers")
            expect(window.alert).toHaveBeenCalledWith("Error!");
        })
    });





    describe("Addition tests", function () {
        it("should return 42", function () {
            calc.add(20);
            calc.add(22);
            expect(calc.value).toBe(42);
        });
        it("should return 26", function () {
            calc.add(7);
            calc.add(19);
            expect(calc.value).toBe(26);
        })
        it("should return an error if we don't supply two numbers", function () {
            spyOn(window, "alert")
            calc.add("Hitchhikers")
            expect(window.alert).toHaveBeenCalledWith("Error!");
        })
    });
});