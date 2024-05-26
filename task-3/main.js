"use strict";
//declaring a person name
let person_Name = "Tanzeela Muzammil shah";
//printing a person name in difrent cases
//lowercase
console.log(person_Name.toLowerCase());
//Uppercase
console.log(person_Name.toUpperCase());
//titlecase
let title_case = person_Name.split(" ");
let title_case_name = " ";
for (let i = 0; i < title_case.length; i++) {
    title_case_name +=
        title_case[i].charAt(0).toUpperCase() +
            title_case[i].slice(1).toLowerCase() +
            "";
}
console.log("In title case : ", title_case_name);
