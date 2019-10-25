function Ride_Function() {
    var Height, Can_Ride;
    Height = document.getElementById("Height").value;
    Can_Ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride.";
}

function Vote_Function() {
    var Age, Can_Vote;
    Age = document.getElementById("Age").value;
    Can_Vote = (Age < 18) ? "Not Qualified":"Qualified";
    document.getElementById("Vote").innerHTML = Can_Vote + " to vote!";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trial Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color +  "-colored " + Erik.Vehicle_Model +
    " maunfatured in " + Erik.Vehicle_Year;
}

function Child(Weight, Gender, Age, Height) {
    this.Child_Weight = Weight;
    this.Child_Gender = Gender;
    this.Child_Age = Age;
    this.Child_Height = Height;
}
var Jeremy = new Child("28lbs", "boy", "8 months", "31\"" );
var Amber = new Child("47 lbs", "girl", 3, "49\"" );
function ageFunction() {
    document.getElementById("New_and_This").innerHTML =
    "Amber is a " + Amber.Child_Gender + " and she is " + Amber.Child_Weight + 
    ". She is " + Amber.Child_Age + " years old and " + Amber.Child_Height + " long.";
}

function numberFunction() {
    document.getElementById("Nested_Function").innerHTML = multiply();
    function multiply() {
        var Starting_number = 12;
        function multiply_2() {Starting_number *= 2;}
        multiply_2();
        return Starting_number;
    }
}
