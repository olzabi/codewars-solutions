// JS
// https://www.codewars.com/kata/5672a98bdbdd995fad00000f
const rps = (p1, p2) => {
    const getMsg = (n) => `Player ${n} won!`;

    let r = 'rock',
        s = 'scissors',
        p = 'paper';

    if ( p1 == r && p2 == s) { return getMsg(1) }
    else if ( p1 == s && p2 == p) { return getMsg(1) }
    else if ( p1 == p && p2 == r) { return getMsg(1) }

    else if ( p1 == s && p2 == r) { return getMsg(2) }
    else if ( p1 == p && p2 == s) { return getMsg(2) }
    else if ( p1 == r && p2 == p) { return getMsg(2) }

    else {
        return 'Draw!';
    }
};