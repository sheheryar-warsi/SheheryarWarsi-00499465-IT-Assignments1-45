"use strict";
let Guest_list = ['kashif', 'Arham', 'Arsalan', 'Zafir'];
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Hello Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in this exciting event. Your presence in this event will be gratifying.\n\nThank You!\n\n');
}
let absent_guest = 'Arham';
let new_guest = 'Fahad';
Guest_list[1] = new_guest;
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Hello Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in this exciting event. Your presence in this event will be gratifying.\n\nThank You!\n\n');
}
console.log(absent_guest + ' will not be attending the event due to some personal issues.');
