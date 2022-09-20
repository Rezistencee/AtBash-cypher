var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
function Calculate(index) {
    var temp = alphabet.length - index + 1;
    return temp;
}
function FindLetter(letter) {
    for (var i = 0; i < alphabet.length; i++) {
        if (letter == alphabet[i]) {
            return i + 1;
        }
    }
}
function Encode(input) {
    var tempStr;
    for (var symbol = 0; symbol < input.length; symbol++) {
        if (input[symbol] == ' ') {
            tempStr += ' ';
            continue;
        }
        var pos = FindLetter(input[symbol].toLowerCase());
        var key = Calculate(pos);
        tempStr += alphabet[key - 1];
    }
    return tempStr;
}
function Decode(input) {
    var tempStr;
    for (var symbol = 0; symbol < input.length; symbol++) {
        if (input[symbol] == ' ') {
            tempStr += ' ';
            continue;
        }
        var pos = FindLetter(input[symbol].toLowerCase());
        var key = Calculate(pos);
        tempStr += alphabet[key - 1];
    }
    return tempStr;
}
var encode = Encode("Hello world");
console.log(1 + 3);
console.log(encode);
console.log(Decode(encode));
//# sourceMappingURL=AtBash.js.map