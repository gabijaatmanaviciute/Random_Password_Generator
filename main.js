
// Generating random lower case letter:
function generateRandomLowerLetter () {
    return String.fromCharCode(97 + Math.floor(Math.random()*26));
}

// Generating random upper case letter:
function generateRandomUpperLetter () {
    return String.fromCharCode(65 + Math.floor(Math.random()*26));
}

// Generating random number:
function generateRandomNumber () {
    return String.fromCharCode(48 + Math.floor(Math.random()*10));
}

// Generating random symbol:
function generateRandomSymbol () {
    const symbolSet= '~!@#$%*+-?/\{}:;';
    return symbolSet[Math.floor(Math.random()*symbolSet.length)];
}

// Object with all the generator functions: