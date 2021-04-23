const passLengthRange = document.getElementById('pass-length-range');
const passLengthNumber = document.getElementById('pass-length-number');

passLengthRange.addEventListener('input', syncPassLength);
passLengthNumber.addEventListener('input', syncPassLength);

function syncPassLength (event) {
    const value = event.target.value;
    passLengthRange.value = value;
    passLengthNumber.value = value;
}