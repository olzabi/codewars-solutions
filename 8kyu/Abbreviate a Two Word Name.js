// JS
// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3
function abbrevName(name) {
    let sName = name.trim().split(" "),
        abbr_name = sName[0].substr(0,1),
        abbr_surname = sName[1].substr(0,1);

    return abbr_name.toUpperCase() + "." + abbr_surname.toUpperCase();
}