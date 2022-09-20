var alphabet : Array<string> = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function Calculate(index : number) : number {
    let temp : number = alphabet.length - index + 1;
    return temp;
}

function FindLetter(letter : string) : number {

    for(let i = 0; i < alphabet.length; i++) {
        if(letter == alphabet[i]) {
            return i + 1;
        }
    }

}

function Encode(input : string) : string {
    let tempStr;

    for(let symbol : number = 0; symbol < input.length; symbol++) {

        if (input[symbol] == ' ') {
            tempStr += ' ';
            continue;
        }

        let pos = FindLetter(input[symbol].toLowerCase());
        let key : number = Calculate(pos);
        tempStr += alphabet[key - 1];
    }

    return tempStr;
}

function Decode(input : string) : string {
    let tempStr;

    for(let symbol : number = 0; symbol < input.length; symbol++) {

        if (input[symbol] == ' ') {
            tempStr += ' ';
            continue;
        }

        let pos = FindLetter(input[symbol].toLowerCase());
        let key : number = Calculate(pos);
        tempStr += alphabet[key - 1];
    }

    return tempStr;
}

let encode : string = Encode("Hello world");

console.log(1 + 3);
console.log(encode);
console.log(Decode(encode));