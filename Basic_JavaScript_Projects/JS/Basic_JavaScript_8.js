function full_Sentence() {
    var first = "I have ";
    var second = "four kids ";
    var third = "and I am ";
    var fourth = "a pround dad.";
    var complete_sentence = first.concat(second, third, fourth);
    document.getElementById("Bring_Together").innerHTML = complete_sentence;
}

function slice_Method() {
    var sentence = "Many are amazed at the artist, Picasso's telent and ability.";
    var section = sentence.slice(9,38);
    document.getElementById("slice").innerHTML = section;
}

function convert_Upper() {
    var lower = "Are we going to be able to do this?";
    var upper = lower.toUpperCase();
    document.getElementById("big").innerHTML = upper;
}

function add_Number() {
    var A = 2374;
    document.getElementById("on_a_string").innerHTML = A.toString();
}

function precision_Method() {
    var B = 1648893.27794658973667;
    document.getElementById("precision").innerHTML = B.toPrecision(15);
}

function fix_Method() {
    var num = 74.467879735;
    var N = num.toFixed(4);
    document.getElementById("fix").innerHTML = N;
}