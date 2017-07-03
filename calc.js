var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var alphasplit = alphabet.split('');

// Convert a letter to its numeric value (ie: A = 1, B = 2, etc.)
function letterToNumber(letter) {
    if ((letter != null) && (letter.length >= 1)) {
        let number = alphasplit.indexOf(letter.toLowerCase()) + 1;
        return(number);
    } else {
        return(null);
    }
}

// Sum the three initials, divide by three, round down no matter
// what and subtract three. Return "A" or "Z" if the resulting value
// falls outside of sane values
function calculateMale(letter1, letter2, letter3) {
    let number1 = letterToNumber(letter1);
    let number2 = letterToNumber(letter2);
    let number3 = letterToNumber(letter3);
    let namevalue = Math.floor((number1 + number2 + number3) / 3) - 3;

    if (namevalue < 1) {
        return(alphasplit[0]);
    } else if (namevalue > 26) {
        return(alphasplit[25]);
    } else {
        return(alphasplit[namevalue - 1]);
    }
}

// Sum the three initials, divide by three and round up no matter
// what. Return "A" or "Z" if the resulting value falls outside
// of sane values
function calculateFemale(letter1, letter2, letter3) {
    let number1 = letterToNumber(letter1);
    let number2 = letterToNumber(letter2);
    let number3 = letterToNumber(letter3);
    let namevalue = Math.ceil((number1 + number2 + number3) / 3);

    if (namevalue < 1) {
        return(alphasplit[0]);
    } else if (namevalue > 26) {
        return(alphasplit[25]);
    } else {
        return(alphasplit[namevalue - 1]);
    }
}

// Read in the three input fields, run the calculation and display
// the corresponding results in the result fields.
function calculate() {
    let letter1 = document.getElementById('firstinitial').value[0];
    let letter2 = document.getElementById('middleinitial').value[0];
    let letter3 = document.getElementById('lastinitial').value[0];

    // Do nothing if any of the three input fields are empty
    if (!letter1 || !letter2 || !letter3) {
        return;
    }

    // Do nothing if any of the three input fields do not contain a
    // valid letter. Does not support anything outside of standard
    // 26 letters in US English alphabet
    if ((alphasplit.indexOf(letter1.toLowerCase()) == -1) || 
        (alphasplit.indexOf(letter2.toLowerCase()) == -1) ||
        (alphasplit.indexOf(letter3.toLowerCase()) == -1)) {
        return;
    }

    let femaleResult = calculateFemale(letter1, letter2, letter3);
    let maleResult = calculateMale(letter1, letter2, letter3);

    let txtFemaleResult = document.getElementById('femaleresult');
    let txtMaleResult = document.getElementById('maleresult');

    txtFemaleResult.value = femaleResult.toUpperCase();
    txtMaleResult.value = maleResult.toUpperCase();

    return;
}