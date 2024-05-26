let Guest_list :string[] = ['Alveena', 'Mahira', 'Muskan'];

for(let i=0; i<Guest_list.length; i++) {

    console.log('Dear Friend: ' + Guest_list[i] + ',\n\nI Want To Invite You To My Party. \n\nThan You!\n\n');
    
}


let absent_Guest :string = 'Mahira';

let new_Guest  :string  = 'Laiba';

Guest_list[1] = new_Guest;

for(let i=0; i<Guest_list.length; i++) {

    console.log('Dear Friend: ' + Guest_list[i] + ',\n\nI Want To Invite You To My Party. \n\nThan You!\n\n');
    
}

console.log(`Dear,${absent_Guest} Is Not Coming To The Party. `);
