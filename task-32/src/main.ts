// chaking username: Do the following to create a program that simulates how wedsites ensure has a unique current_users.

// . Make another list of five usernames called new_users. Make sure one or two of the new username .

let current_users: string[] = ["MuSkan","AlveEna","Mahira","TaNzi"];
let new_users: string[] = ["Aysha","AlveEna","Hira", "Hina","Mahira" ];

  new_users.forEach(newUsername => {
    let lowerCase: string = newUsername.toLowerCase();

    if(current_users.map(c_user => c_user.toLowerCase()).includes(lowerCase)){
        console.log(`The username ${newUsername} is not available. Pleas write a diffrent username`);
    }
    else{
        console.log(`The username ${newUsername} is available`);
        
    }
}); 
    
  