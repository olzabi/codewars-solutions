// javaScript
//https://www.codewars.com/kata/5259b20d6021e9e14c0010d4
function reverseWords(input) {
    let word = "", output = ""
    for(var i = input.length - 1; i >= 0; i--) {
        if (input[i] == " ") { //upd: should be ===
            output = " " + word + output;
            word = "";
        } else { word += input[i] }
    }
    return word + output;
}