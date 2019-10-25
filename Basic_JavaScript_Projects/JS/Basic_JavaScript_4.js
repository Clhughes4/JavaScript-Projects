function myDictionary() {
    var Car = {
        Make: "Lamborghini",
        Model: "Mercielago",
        Type: "Sport",
        Color: "Blue",
        Engine: "V-12",
        Doors: "2",
        Door_Style: "Lambo",
        Zero_Sixty: "3.1 seconds",
    };
    delete Car.Type;
    document.getElementById("Dictionary").innerHTML = Car.Type;
}