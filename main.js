// Syncing Password Input Values
const passLengthRange = document.getElementById('pass-length-range');
const passLengthNumber = document.getElementById('pass-length-number');
const settingsPanel = document.getElementById('settings-panel');
const includeUpperCaseElement = document.getElementById('incluppercase');
const includeLowerCaseElement = document.getElementById('incllowercase');
const includeNumbersElement = document.getElementById('inclnumbers');
const includeSymbolsElement = document.getElementById('inclsymbols');

passLengthRange.addEventListener('input', syncPassLength);
passLengthNumber.addEventListener('input', syncPassLength);

function syncPassLength (event) {
    const value = event.target.value;
    passLengthRange.value = value;
    passLengthNumber.value = value;
}

settingsPanel.addEventListener('submit', event => {
    event.preventDefault();
    const passLength = passLengthNumber.value;
    const includeUppercase = includeUpperCaseElement.checked;
    const includeLowercase = includeLowerCaseElement.checked;
    const includeNumbers = includeNumbersElement.checked;
    const includeSymbols = includeSymbolsElement.checked;
    const password = generatePassword(passLength, includeUppercase, includeLowercase, includeNumbers, includeSymbols)
})

function generatePassword (passLength, includeUppercase, includeLowercase, includeNumbers, includeSymbols) {
    
}