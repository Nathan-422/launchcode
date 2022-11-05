

console.log(makeDiamond(5, "i"));


function reverseString(text) {
    return text.split("").reverse().join("");
}

function makeDiamond(height, character) {    
    // TODO: make a diamond

    let diamond = makeIsosoliesTriangle(height, character);
    diamond += "\n" + reverseString(diamond);


    return diamond;
}

function makeIsosoliesTriangle(height, character) {
    let triangle = "";

    // make a triangle string

    for (let i = 0; i < height; i++) {
        triangle += makeSpaceLine(height - i - 1, 2 * i + 1, character);

        // add line breaks
        if (i + 1 < height) {
            triangle += "\n";
        }
    }

    return triangle;
}

function makeSpaceLine(numSpaces, numChars, character) {
    let spacedLine = "";

    // add leading number of spaces
    for (let i = 0; i < numSpaces; i++) {
        spacedLine += " ";
    }

    spacedLine += makeLine(numChars, character);

    // add tailing number of spaces
    for (let i = 0; i < numSpaces; i++) {
        spacedLine += " ";
    }

    return spacedLine;
}

function makeDownwardStairs(size, character) {
    let stairs = "";

    // make a set of stairs

    for (let i = 0; i < size; i++) {
        stairs += makeLine(i, character);

        // add line breaks
        if (i+1 < size) {
            stairs += "\n";
        }

    }


    return stairs;
}

function makeSquare(size, character) {

    let square = "";

    for (let i = 0; i < size; i ++) {
        square += makeLine(size, character);

        // add new lines
        if (i + 1 < size) {
            square += "\n"
        }

    }

    return square;
}

function makeLine(numOfCharacters, charToPrint="#") {

    let charsToPrint = "";

    for (let i = 0; i < numOfCharacters; i++) {
        charsToPrint = charsToPrint + charToPrint;
    }

    return charsToPrint;

}