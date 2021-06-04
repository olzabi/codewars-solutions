// JavaScript
// https://www.codewars.com/kata/54edbc7200b811e956000556
// TODO May the force be with you
function countSheeps(arrayOfSheep) {
    let sheepCounter = 0,
        nothing = null;

    for (let i = 0; i < arrayOfSheep.length; i++) {
        if (arrayOfSheep[i] === true) {
            sheepCounter++;
        } else if (arrayOfSheep[i] === false) {
            nothing;
        }
    }
    return sheepCounter;
}