// JavaScript
//https://www.codewars.com/kata/5467e4d82edf8bbf40000155
function descendingOrder(n){
    n = '' + n;
    return Number(n.split("")
        .sort((a,b) => b - a)
        .join("")
    )
}