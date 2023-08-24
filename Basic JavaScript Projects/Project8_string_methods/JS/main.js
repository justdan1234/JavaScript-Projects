//.concat() method
function full_sentance() {
    var part_1 = "Guess what day ";
    var part_2 = "it is... ";
    var part_3 = "April fools!";
    var whole_sentence = part_1.concat(part_2, part_3);
    document.getElementById("StringMethod").innerHTML = whole_sentence;
}

//.slice() method
function slice_Method() {
    var sentence = "slice and dice"
    var section = sentence.slice(10, 14);
    document.getElementById("Slice").innerHTML = section;
}

//.toSting() method
function string_Method() {
    var myNumber = 999;
    document.getElementById("ToSTring").innerHTML = myNumber.toString();
}

//.toPrecision() method
function precision_method() {
    var myNumber = 123.45678910111213;
    document.getElementById("SpecificLength").innerHTML = myNumber.toPrecision(5);
}