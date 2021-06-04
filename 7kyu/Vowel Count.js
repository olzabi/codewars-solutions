// JavaScript
//https://www.codewars.com/kata/54ff3102c1bad923760001f3
function getCount(str) {
    let vowelsCount = 0,
        vowels = {
            a: 'a',
            e: 'e',
            i: 'i',
            o: 'o',
            u: 'u'
        };

    for (let i = 0; i < str.length;i++){
        if (str.split('')[i] in vowels) {
            vowelsCount++;
        }
    }
    return vowelsCount;
}