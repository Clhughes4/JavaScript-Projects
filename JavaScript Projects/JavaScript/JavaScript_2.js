function validateForm() {
    var f =document.forms["contact"]["firstName"].value;
    if (f == "") {
        alert("First name must be inputed");
        return false;
    }
}