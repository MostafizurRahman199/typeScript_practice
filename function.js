"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(number1, number2) {
    if (number2 === void 0) { number2 = 1; }
    return number1 + number2;
}
function getUpper(val) {
    return val.toUpperCase();
}
var loginUser = function (email, name) {
    if (name === void 0) { name = ""; }
    return "".concat(email, " and ").concat(name);
};
loginUser("shifat@gmail.com", "Shifat");
console.log(getUpper("hello"));
add(5);
