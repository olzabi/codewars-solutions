// JavaScript
// https://www.codewars.com/kata/5648b12ce68d9daa6b000099
let number = function(busStops) {
    let doneIt = 0;
    for (var i = 0; i < busStops.length; i++) {
        doneIt += busStops[i].reduce((a,b)=> a-b);
    }
    return doneIt;
}