/// <reference path="../calculate.js" />
/// <reference path="../qunit-1.11.0.js" />

test("Calculate Test", function () {
    var calculateVM = new CalculateVM();
    calculateVM.num1 = 10;
    calculateVM.num2 = 20;

    calculateVM.calculate();

    equal(calculateVM.total(), 30, "num1 : 10, num2 : 20, total expected : 30");
});