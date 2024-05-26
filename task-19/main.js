"use strict";
let Guest_list = ['Alveena', 'Mahira', 'Muskan'];
// for(let i=0; i<Guest_list.length; i++) {
//     console.log('Dear Friend: ' + Guest_list[i] + ',\n\nI Want To Invite You To My Party. \n\nThan You!\n\n');
// }
let absent_Guest = 'Alveena';
let new_Guest = 'Laiba';
Guest_list[0] = new_Guest;
// for(let i=0; i<Guest_list.length; i++) {
//     console.log('Dear Friend: ' + Guest_list[i] + ',\n\nI Want To Invite YouTo My Party. \n\nThan You!\n\n');
// }
// console.log(`Dear,${absent_Guest} Is Not Coming To The Party. `);
// console.log('Good News! We find Big Table So We Are Inviting 3 More Guests. ');
//New 3 Guest invited fo Dinner.
Guest_list.unshift('Farah');
Guest_list.splice(2, 0, 'Aysha');
Guest_list.push('Noor Fatima');
//Yhan me ne 6 Array guest print kya he.
// for(let i=0; i<Guest_list.length; i++) {
//     console.log('Dear Friend: ' + Guest_list[i] + ',\n\nI Want To Invite YouTo My Party. \n\nThan You!\n\n');
// }
//print a message for not invited guest. 
//console.log('\nSorry We Can Not Arrange Big Table, Only Two Peoples Will Be Invited. ');
//sab guest remove kike hain.
while (Guest_list.length > 2) {
    let remove_Guest = Guest_list.pop();
    //console.log(`Sorrr Friend. ${remove_Guest}, You Are Not Invited For Dinner. `);
}
//only two array invited.
// for(let i=0; i<Guest_list.length; i++) {
//     console.log('Dear Friend: ' + Guest_list[i] + ',\n\nYou Are Still Invited.\n\nThan You!\n\n');
// }
// Remove all array guest 
Guest_list.splice(0, 2);
console.log(Guest_list);
//printing a message of indicanding the number of people you inviting to dinner.
console.log(`Total Number Of Guest Are: ${Guest_list.length}`);
