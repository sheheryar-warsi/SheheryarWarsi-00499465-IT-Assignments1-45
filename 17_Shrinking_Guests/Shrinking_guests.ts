let Guest_list :string[] =['kashif', 'Arham', 'Arsalan', 'Zafir'];

// for(let i=0; i<Guest_list.length; i++){

//     console.log('Hello Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in this exciting event. Your presence in this event will be gratifying.\n\nThank You!\n\n');

// }
let absent_guest :string = 'Arham';
let new_guest :string = 'Fahad';

Guest_list[1] = new_guest;

// for(let i=0; i<Guest_list.length; i++){

//     console.log('Hello Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in this exciting event. Your presence in this event will be gratifying.\n\nThank You!\n\n');

// }

// console.log(absent_guest + ' will not be attending the event due to some personal issues.')

// Exercise # 16

console.log('I am pleased to announce that 3 more guests are invited in this event');
Guest_list.unshift('Bilal');
Guest_list.splice(3, 0, 'Kamran');
Guest_list.push('Asher');

for(let i=0; i<Guest_list.length; i++){

    console.log('Hello Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in this exciting event. Your presence in this event will be gratifying.\n\nThank You!\n\n');
}

// Exercise # 17
console.log(`We are sorry to announce that we can only arrange table for two people`);
while(Guest_list.length>2){

let removed_guest = Guest_list.pop();
console.log(`Sorry Mr. ${removed_guest}, you are not invited in the event.`)

}

for(let i=0; i<Guest_list.length; i++){

    console.log('Hello Mr. ' + Guest_list[i] + ',\n\nYou are still invited.\n\nThank You!\n\n');
}

