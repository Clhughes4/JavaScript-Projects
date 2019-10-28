function Call_Loop() {
    var num = "";
    var d = 0;
    while (d < 101) {
        num += "<br>" + d;
        d++;
    }
    document.getElementById("Loop").innerHTML = num;
}

function find() {
var string = "This is a computer program"
var a = string.length;
document.getElementById("string").innerHTML = a;
}

var instruments =["Drums", "Guitar", "Bass", "Piano", "Violin", "Trumbone", "Saxaphone", "Clarinet"];
var text = "";
function for_Loop() {
    for (X = 0; X < instruments.length; X++) {
    text += instruments[X] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = text;
}

function array_Function() {
    var Babies = []
    Babies[0] = "sleeping";
    Babies[1] = "eating";
    Babies[2] = "playing";
    Babies[3] = "crying";
    Babies[4] = "crawling";
    document.getElementById("baby").innerHTML = "This baby is " + Babies[3] + ".";
}

function Constant_Function() {
    const superhero = {name: "Spider-man", power: "web/spider-sense", class: "DC"};
    superhero.class = "Marvel";
    superhero.villian = "Venom";
    document.getElementById("constant").innerHTML = superhero.name + " is apart of the " + superhero.class + " group. " +
    "His main power is " + superhero.power + " and one of his adversaries is " + superhero.villian + ".";
}

var A = 489;
console.log(A);
{
    let A =267
    console.log(A);
}
console.log(A);

function myFunction () {
    return (5+10);
    return Math.PI;
}
console.log(myFunction());

let lizard = {
    breed: "tegu ",
    age: "baby ",
    family: "monitor ",
    color: "yellow with black ",
    description: function() {
        return "This " + this.age + this.breed + " is " + this.color + " is apart of the " + this.family + " family.";
    }
};
document.getElementById("animal_object").innerHTML = lizard.description();

var d = 0
while (d < 10) {
    if (d == 6) {
        break
    }
    d = d + 6;
}
console.log(d);

var number = "";
for (z = 0; z < 51; z++) {
    if (z === 12) {continue;}
    number += z + "<br>"
}
document.getElementById("count").innerHTML = number;

