function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "four kids ";
    var part_3 = "and I am ";
    var part_4 = "a pround dad.";
    var complete_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Bring_Together").innerHTML = complete_sentence;
}