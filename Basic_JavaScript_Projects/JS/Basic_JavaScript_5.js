document.write(typeof "Awesome");

document.write(typeof 4);

function myFunction() {
    document.getElementById("Test").innerHTML = 0/0;
}

function myFunction_1() {
    document.getElementById("Test1").innerHTML = isNaN('289');
}

function myFunction_2() {
    document.getElementById("Test2").innerHTML = isNaN('What is your name');
}

document.write(2E310);

document.write(-4E310);

document.write(16 > 2);

document.write(4 >= 4);

document.writeln(16 > 27);

console.log(87 + 26 - 17);

console.log("478" + 4);

document.write("57" + 2);

console.log(12 > 22);

console.log(4 == 4);

console.log(34 == 44);

A = 45;
B = 45;
document.write(A === B);


C = 23;
D = "apple";
document.write(C === D);

E = 26;
F = "twenty-six";
console.log(E === F);

G = 55;
H = 88;
console.log(G === H);

document.write(5 < 7 && 6 > 2);

console.log(4 < 9 && 43 < 12);

document.write(2 > 3 || 17 < 22);

console.log(4 > 5 || 21 < 12);

function notFunction() {
    document.getElementById("Not").innerHTML = !(15 > 16);
}

function notFunction_1() {
    document.getElementById("Not1").innerHTML = !(12 > 4);
}