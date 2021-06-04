// JavaScript
// https://www.codewars.com/kata/54ba84be607a92aa900000f1
function isIsogram(str){
    return str.match(/(\w).*\1/i) ? false : true;
}

//UPD: 04.06.2021 much better to use !str.match(/(\w).*\1/i)