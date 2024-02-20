"use strict";
let PersonName = '';
PersonName = prompt('What is your name?') || '';
if (PersonName !== null && PersonName !== '') {
    alert(`Hello ${PersonName},would you like to learn some python today?`);
}
else {
alert(`Please fill up your name.`);
}