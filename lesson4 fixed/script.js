'use strict';

let str = document.querySelector('.text').innerHTML;
let regexToReplace = new RegExp('\'', 'gm');
let replaced = str.replace(regexToReplace, '"');
let regexNotToReplace = new RegExp('\\b"\\b', 'gm');
replaced = replaced.replace(regexNotToReplace, '\'');
document.querySelector('.text').innerHTML = replaced;

