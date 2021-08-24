// Selecting the DOM elements:
const resultElement = document.getElementById('resultpass');
const lengthElement = document.getElementById('pass-length');
const upperCaseElement = document.getElementById('incluppercase');
const lowerCaseElement = document.getElementById('incllowercase');
const numbersElement = document.getElementById('inclnumbers');
const symbolsElement = document.getElementById('inclsymbols');
const generateButtonElement = document.getElementById('generate');
const clipboardButtonElement = document.getElementById('clipboard');

// Copying to clipboard:
clipboardButtonElement.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
	const password = resultElement.innerText;
	
	if(!password) { return; }
	
	textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove();
	alert('Password copied to clipboard');
})

// Object with all the generator functions:
const functionSet = {
    upper: generateRandomUpperLetter,
    lower: generateRandomLowerLetter,
    number: generateRandomNumber,
    symbol: generateRandomSymbol
}

// Adding event listener to generator button:
generateButtonElement.addEventListener('click', () => {

    const length = +lengthElement.value; // + turns the value from string to number
    const incluppercase = upperCaseElement.checked;
    const incllowercase = lowerCaseElement.checked;
    const inclnumbers = numbersElement.checked;
    const inclsymbols = symbolsElement.checked;

    // After event occurs, the generator function is called with the taken parameters and the result is inserted into the output field:
    resultElement.innerText = generatePassword(length, incluppercase, incllowercase, inclnumbers, inclsymbols);
})

// Password generator function:
function generatePassword (length, upper, lower, number, symbol) {
    let password = '';

    const checksCount = upper + lower + number + symbol;
    if (checksCount === 0) {
        return '';
    }

    // Filtering out unchecked character types:
    const checksArray = [{upper}, {lower}, {number}, {symbol}].filter((checked) => (
        Object.values(checked)[0] // we get the first value from the Object.values(checked) array
    ));

    for(let i = 0; i < length; i += checksCount) {
        // For each checked symbol type we call the appropriate generator function and append the generated symbol to our result password string:
        checksArray.forEach(check => {
            const functionName = Object.keys(check)[0];

            password += functionSet[functionName]();
        })
    }
    const finalPassword = password.slice(0, length); // We make sure the password is exactly the length we need

    return finalPassword;
}

// Generating random upper case letter:
function generateRandomUpperLetter () {
    return String.fromCharCode(65 + Math.floor(Math.random()*26));
}

// Generating random lower case letter:
function generateRandomLowerLetter () {
    return String.fromCharCode(97 + Math.floor(Math.random()*26));
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

