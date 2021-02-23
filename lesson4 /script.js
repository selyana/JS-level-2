'use strict';

let str = document.querySelector('.text').innerHTML;
let regexToReplace = new RegExp('\'', 'gm');
let replaced = str.replace(regexToReplace, '"');
let regexNotToReplace = new RegExp('\b\"\b', 'gm');
// не понимаю, почему не работает это выражение, выбрала \b с обеих сторон, чтобы вычленить aren"t 
replaced = replaced.replace(regexNotToReplace, '\'');

str = document.querySelector('.text').innerHTML = replaced;


