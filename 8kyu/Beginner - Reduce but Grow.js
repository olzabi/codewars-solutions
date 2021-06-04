// JS
// https://www.codewars.com/kata/57f780909f7e8e3183000078
function grow(x){
    const res = x.reduce((total,value) => total * value, 1);
    return res;
}