var X = 43;
function divide_Numbers () {
    var Y = 27
    document.write(Y / 3 * X + "<br>");
}
function multiply_Numbers () {
    document.write(X * 43 + 3);
}
divide_Numbers();
multiply_Numbers();

function get_Date() {
    if (new Date().getHours() < 20) {
    document.getElementById("welcome").innerHTML = "We are open, come in!";
    }
}

function show_Number() {
    A = 12;
    B = 12;
    if (A = B)
    document.getElementById("show").innerHTML = "Yes they are the same #."
}

function Deposit_In() {
    money = document.getElementById("money").value;
    if (money == 300) {
        deposit = "Access permitted!"
    }
    else {
        deposit = "Access denied!"
    }
    document.getElementById("correct_amount").innerHTML = deposit;
}

function TimeFunction () {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is afternoon!";
    }
    else {
        Reply = "It is evening!";
    }
    document.getElementById("Time_of_Day").innerHTML = Reply;
}