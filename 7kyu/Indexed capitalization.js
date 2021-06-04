// JavaScript
// https://www.codewars.com/kata/59cfc09a86a6fdf6df0000f1
function capitalize(s, arr){
    let splited = s.split('');

    for (var i = 0; i < s.length; i++) {
        if (arr.includes(i)) {
            splited[i] = splited[i].toUpperCase();
        }
    }
    return splited.join('');
}