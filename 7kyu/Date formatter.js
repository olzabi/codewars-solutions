// JavaScript
// https://www.codewars.com/kata/5846aaffdbb1b19d300001fb
const moment = require('moment');

function getDate(uts, loc) {
    return moment.unix(uts).format((formats[loc] || 'DD/MM/YYYY').toUpperCase());
}