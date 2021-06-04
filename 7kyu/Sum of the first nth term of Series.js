// JS
// https://www.codewars.com/kata/555eded1ad94b00403000071
function SeriesSum(n) {
    let res = 0,
        rev = 1;

    for (let i = 0; i < n; i++) {
        if (i === 0) {
            res = 1;
        } else {
            rev += 3;
            res += (1/rev);
        }
    }
    return res.toFixed(2);
}