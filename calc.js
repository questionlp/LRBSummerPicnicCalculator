var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var alphasplit = alphabet.split('');

function letterToNumber(letter) {
    if ((letter != null) && (letter.length >= 1)) {
        let number = alphasplit.indexOf(letter.toLowerCase()) + 1;
        return(number);
    } else {
        return(null);
    }
}

function calculateMale(letter1, letter2, letter3) {
    let number1 = letterToNumber(letter1);
    let number2 = letterToNumber(letter2);
    let number3 = letterToNumber(letter3);
    let namevalue = Math.floor((number1 + number2 + number3) / 3) - 3;

    if (namevalue < 1) {
        return(alphasplit[0]);
    } else {
        return(alphasplit[namevalue - 1]);
    }
}

function calculateFemale(letter1, letter2, letter3) {
    let number1 = letterToNumber(letter1);
    let number2 = letterToNumber(letter2);
    let number3 = letterToNumber(letter3);
    let namevalue = Math.ceil((number1 + number2 + number3) / 3);

    if (namevalue < 1) {
        return(alphasplit[0]);
    } else {
        return(alphasplit[namevalue - 1]);
    }
}

function calculate() {
    let letter1 = document.getElementById('firstinitial').value[0];
    let letter2 = document.getElementById('middleinitial').value[0];
    let letter3 = document.getElementById('lastinitial').value[0];

    if (!letter1 || !letter2 || !letter3) {
        return;
    }

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