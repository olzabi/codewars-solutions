// JavaScript
// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151
function arrayPlusArray(arr1, arr2) {
    let arr3 = arr1.concat(arr2);
    return arr3.reduce((a, b) => a + b);
}