// Great Magicians: Start with a copy of your program from Exercise 40. Write a function called make_great()
//  that array of magnicians'names.

let magician : string[] = ['Herry Potter', 'Hermione Granger', 'Ron Weasley', 'Albus Dumbledore'];

function copyArray(arr:string[]){
   return [...arr]
}

function make_great(magicianArray: string[]){
    for(let i=0; i<magicianArray.length; i++){
     magicianArray[i] = 'the Great: '+  magicianArray[i]
    }

}

function show_magicians(magicians: string[]){
   magicians .forEach(element => {
        console.log(element);
        
    });
}
const copyMagicianArray = copyArray(magician)

make_great(copyMagicianArray);

console.log('\n\nThis is my orignal array: ');

show_magicians(magician)

console.log('\n\nThis is my modfide copy of the array: ');

show_magicians(copyMagicianArray)


