// JavaScript
// https://www.codewars.com/kata/57eae65a4321032ce000002d
function fakeBin(x) {
    let numList = ('' + x).split('');

    for (let i = 0; i < numList.length; i++) {
        (numList[i]<5) ? numList[i] = '0' : numList[i] = '1';
    }
    return numList.join('');
}