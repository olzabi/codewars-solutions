// JS
// https://www.codewars.com/kata/563f037412e5ada593000114
function calculateYears(principal, interest, tax, desired) {
    let y = 0;

    while (principal < desired) {
        principal += (principal * interest - (principal * interest * tax));
        y += 1;
    }
    return y;
}