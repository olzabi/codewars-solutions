// JavaScript
// https://www.codewars.com/kata/576bb71bbbcf0951d5000044
function countPositivesSumNegatives(input) {
    let positive = 0,
        negative = 0;

    if (input === null || input.length === 0) {
        return [];
    }

    for (let i = 0; i < input.length; i++) {
        (input[i] > 0) ? ++positive : negative += input[i];
    }
    return [positive, negative];
}