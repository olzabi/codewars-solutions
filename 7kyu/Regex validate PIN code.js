// JavaScript
// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132
function validatePIN (pin) {
    return (pin.match(/^(\d{4}|\d{6})$/)) ? true : false;
}

// 04.06.2021 UPD: much better to use !!(pin.match(/^(\d{4}|\d{6})$/));