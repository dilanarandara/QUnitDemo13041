/// <reference path="knockout-2.2.1.debug.js" />

var CalculateVM = function CalculateVM() {
    var self = this;

    self.num1 = 0;
    self.num2 = 0;
    self.total = ko.observable(0);

    self.calculate = function () {
        self.total(parseInt(self.num1) + parseInt(self.num2));
    }
}

ko.applyBindings(new CalculateVM());
