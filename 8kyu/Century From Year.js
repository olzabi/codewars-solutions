// JS
// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097
function century(year) {
    const century = Math.floor(year / 100);

    if(year % 100 === 0) {
        return century;
    } else if ((century + 1) % 10 !== 0) {
        return century + 1;
    } else if ((year < 100) % 10) {
        return century;
    } else if (century % 10 === 0) {
        return century + 1;
    } else {
        return century + 1;
    }
}