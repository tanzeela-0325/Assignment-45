// stage of Life: Write an if-else chain that determines a person's stage of life. 

// set a value for the variable age,and then:
let age: number = 20;

// . If the person is less then 2 years old, print a message the person is a baby
// . If the person is at least 2 years old but less then 4, print a message the person is a toddler.
// . If the person is at least 4 years old but less then 13, print a message the person is a kid.
// . If the person is at least 13 years old but less then 20, print a message the person is a teenager.
// . If the person is at least 20 years old but less then 65, print a message the person is a adult.
// . If the person is age 65 or older, print a message the person is a elder.
if(age <2){
    console.log("person is a baby. ");
}
else if(age >= 2 && age < 4){
    console.log("the person is a toddler. ");
}
else if(age >= 4 && age < 13){
    console.log("person is a kid. ");    
}
else if(age >= 13 && age < 20){
    console.log("person is a teenager. ")
}
else if(age >= 20 && age < 65){
    console.log("person is a adult. ");
}
else{
    console.log("person is an elder");
}