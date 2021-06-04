// JavaScript
// https://www.codewars.com/kata/54c27a33fb7da0db0100040e
let isSquare = function(n) {
    const sqrt = Math.floor(Math.sqrt(n))
    return (sqrt*sqrt == n) ? true : false;
}
// 04.06.2021 UPD: much better to use (sqrt * sqrt === n);