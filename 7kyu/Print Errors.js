// JavaScript
// https://www.codewars.com/kata/56541980fa08ab47a0000040
function printerError(s) {
    let regexp = /[a-m]/;
    let counter = 0;

    s = s.toLowerCase();

    for (var i = 0; i < s.length; i++) {
        if (s.split('')[i].match(regexp)) {
            counter++;
        }
    }
    return (s.length - counter) + '/' + s.length;
}