function addition_Function () {
    var addition = 4 + 15;
    document.getElementById("math").innerHTML = addition; 
}

function subtractionFunction () {
    var subtract = 339 - 48;
    document.getElementById("sub").innerHTML = subtract;
}

function multiplyFunction () {
    var multiply = 76 * 51;
    document.getElementById("mul").innerHTML = multiply;
}

function divideFunction () {
    var divide = 450 / 5;
    document.getElementById("div").innerHTML = divide;
}

function moreMath () {
    var simple_Math = 4 * 6 + (23-3) + 4 / 7 - 8;
    document.getElementById("Math").innerHTML = simple_Math;
}

function modulusOperator() {
    var mod_Math = (37 % 8) + (7 % 2);
    document.getElementById("mod").innerHTML = mod_Math;
}

function negOperator () {
    var x = 27;
    document.getElementById("neg").innerHTML = -x;
}

var X = 51.9;
var Y = 23.4;
X++;
Y--;
document.getElementById("inc").innerHTML = X;
document.getElementById("dec").innerHTML = Y;

window.alert(Math.random() * 50);

document.write(Math.PI);

var round = Math.round(-7.2);
document.write( + round);
