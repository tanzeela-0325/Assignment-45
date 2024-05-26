"use strict";
let Guest_list = ['Alveena', 'Mahira', 'Muskan'];
// for(let i=0; i<Guest_list.length; i++) {
//     console.log('Dear Friend: ' + Guest_list[i] + ',\n\nI Want To Invite You To My Party. \n\nThan You!\n\n');
// }
let absent_Guest = 'Alveena';
let new_Guest = 'Laiba';
Guest_list[0] = new_Guest;
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear Friend: ' + Guest_list[i] + ',\n\nI Want To Invite YouTo My Party. \n\nThan You!\n\n');
}
console.log(`Dear,${absent_Guest} Is Not Coming To The Party. `);
console.log('Good News! We find Big Table So We Are Inviting 3 More Guests. ');
Guest_list.unshift('Farah');
Guest_list.splice(2, 0, 'Aysha');
Guest_list.push('Noor Fatima');
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear Friend: ' + Guest_list[i] + ',\n\nI Want To Invite YouTo My Party. \n\nThan You!\n\n');
}
