// JavaScript
// https://www.codewars.com/kata/5ce969ab07d4b7002dcaa7a1
function solve(s){
    let preffix,
        suffix,
        i;

    if (s.length <= 0 || s.length === 1) {
        return 0;
    }

    for (i = Math.floor(s.length / 2); i > 0; i--) {
        suffix = s.slice(-i);
        preffix = s.slice(0,i);
        if (preffix === suffix) {
            return i;
        }
    }
    return 0;
}
//   console.log(s.slice(-3))
//   console.log(s.slice(0,3))