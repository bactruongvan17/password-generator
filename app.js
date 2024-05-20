main();

function main() {
    const elBtnGeneratePass = document.getElementById('generate');
    elBtnGeneratePass.addEventListener('click', _generatePassword);

    const elCopy = document.getElementById('copy');
    elCopy.addEventListener('click', _copyPassword);
}

function _copyPassword() {
    const elInputResult = document.getElementById('display-result');
    elInputResult.select();
    elInputResult.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(elInputResult.value);
}

function _generatePassword() {
    const passLength = Number(document.querySelector("input[name='pass-length']").value);
    const isIncludeUppercaseLetter = document.querySelector("input[name='include-uppercase-letter']").checked;
    const isIncludeLowercaseLetter = document.querySelector("input[name='include-lowercase-letter']").checked;
    const isIncludeNumberLetter = document.querySelector("input[name='include-number']").checked;
    const isIncludeSymbolLetter = document.querySelector("input[name='include-symbol']").checked;

    let countOfRandomUppercaseLetter = 0;
    let countOfRandomLowercaseLetter = 0;
    let countOfRandomNumber = 0;
    let countOfRandomSymbol = 0;

    let i = passLength;
    // 14-2-4-0
    while (i > 0) {
        if (isIncludeUppercaseLetter) {
            let ratio = Math.floor(Math.random() * (i / 2));
            if (ratio === 0 && i > 0) {
                ratio = 1;
            }
            countOfRandomUppercaseLetter += ratio;
            i -= ratio;
        }

        if (isIncludeLowercaseLetter) {
            let ratio = Math.floor(Math.random() * (i / 2));
            if (ratio === 0 && i > 0) {
                ratio = 1;
            }
            countOfRandomLowercaseLetter += ratio;
            i -= ratio;
        }

        if (isIncludeNumberLetter) {
            let ratio = Math.floor(Math.random() * (i / 2));
            if (ratio === 0 && i > 0) {
                ratio = 1;
            }
            countOfRandomNumber += ratio;
            i -= ratio;
        }

        if (isIncludeSymbolLetter) {
            let ratio = Math.floor(Math.random() * (i / 2));
            if (ratio === 0 && i > 0) {
                ratio = 1;
            }
            countOfRandomSymbol += ratio;
            i -= ratio;
        }
    }

    const password = _randomUppercaseLetter(countOfRandomUppercaseLetter) + 
        _randomLowercaseLetter(countOfRandomLowercaseLetter) + 
        _randomNumber(countOfRandomNumber) + 
        _randomSymbol(countOfRandomSymbol);

    // suffle password
    let passWasShuffled = "";
    let passTemp = password; 
    for (let i = 0; i < passLength; i++) {
        const rand = Math.floor(Math.random() * (passLength - passWasShuffled.length));
        passWasShuffled += passTemp[rand];
        passTemp = passTemp.slice(0, rand) + passTemp.slice(rand + 1);
    } 

    const elInputResult = document.getElementById("display-result");
    elInputResult.value = passWasShuffled;
}

function _randomUppercaseLetter(totalLetters) {
    // ASCII code from 65-90
    let str = '';
    for (let i = 0; i < totalLetters; i++) {
        const rand = Math.floor(Math.random() * 25) + 65;
        str += String.fromCharCode(rand);
    }

    return str;
}

function _randomLowercaseLetter(totalLetters) {
    // ASCII code from 97-122
    let str = '';
    for (let i = 0; i < totalLetters; i++) {
        const rand = Math.floor(Math.random() * 25) + 97;
        str += String.fromCharCode(rand);
    }

    return str;
}

function _randomNumber(totalLetters) {
    // ASCII code from 48-57
    let str = '';
    for (let i = 0; i < totalLetters; i++) {
        const rand = Math.floor(Math.random() * 9) + 48;
        str += String.fromCharCode(rand);
    }

    return str;
}

function _randomSymbol(totalLetters) {
    const symbols = ['!', '#', '$', '%', '&', '@'];
    let str = '';
    for (let i = 0; i < totalLetters; i++) {
        const rand = Math.floor(Math.random() * symbols.length);
        str += symbols[rand];
    }

    return str;
}