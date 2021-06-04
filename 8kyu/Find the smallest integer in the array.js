// JS
// https://www.codewars.com/kata/55a2d7ebe362935a210000b2
class SmallestIntegerFinder {
    findSmallestInt(args) {
        const min = Math.min.apply(Math, args);
        return min;
    }
}