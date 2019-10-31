function Animal_Function() {
    var Animal_Output;
    var Animals = document.getElementById("Animal_Input").value;
    var Animal_String = " is a great choice!";
    switch(Animals) {
        case "Tiger" :
            Animal_Output = "Tiger" + Animal_String;
        break;
        case "Snake" :
            Animal_Output = "Snake" + Animal_String;
         break;
        case "Monkey" :
            Animal_Output = "Monkey" + Animal_String;
         break;
        case "Tucan" :
            Animal_Output = "Tucan" + Animal_String;
         break;
        case "Orca" :
            Animal_Output = "Orca" + Animal_String;
         break;
        case "Rabbit" :
            Animal_Output = "Rabbit" + Animal_String;
        break;
        default:
            Animal_Output = "Please enter an animal exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Animal_Output; 
}

function newFunction() {
    var X =document.getElementsByClassName("Food")[0];
    X.getElementsByClassName("Junk")[0].innerHTML = "Candy";
}

var R = document.getElementById("rectangle");
var Rtx = R.getContext("2d");

Rtx.moveTo(0,0);
Rtx.lineTo(400,150);
Rtx.stroke();

var c = document.getElementById("gradient");
var context = c.getContext("2d");
var my_Gradient = context.createLinearGradient(25,15,20,170);
my_Gradient.addColorStop(1, "green");
my_Gradient.addColorStop(0, "blue");
context.fillStyle = my_Gradient;
context.fillRect (15, 25, 266, 120);