// Equality and Inequality Tast 1
console.log("Equality Tast With Strings: ", "Banana" === "Banana");
// Equality and Inequality Tast 2
console.log("Inequality Tast With Strings: ", ("Banana" as string) != "Apple");

// Tast using the Lower case Function
console.log("Lower case function Tast: " , "HELLO".toLowerCase() === "hello");

// Numerical test involving equality 
console.log("Equality Tast With Numbers: " , 27 === 27);
// Numerical test involving  inequality
console.log("Inequality Tast With Numbers: " , (27 as number) != 34);

// Greater then test
console.log("Greater then Test: ", 12 > 6);
// less then test
console.log("less then Test: ", 6 < 12 );

// Greater then or equal to
console.log("Greater then or equal to test: " , 12 >= 12);
 // less then or equal to.
console.log("less then or equal to test: ", 6 <= 10);

// Test using "and"  operator.
console.log("And operator test: ", 6===6 && 5 < 9);
// Test using "or"  operator.
console.log("Or operator test: ", 6 != 6 || 5 < 9);


// Test Whether an items is in a array.
const fruitsName : string[] = ["Banana", "Apple", "Orange"];
console.log('Test "Banana" in the array: ', fruitsName.includes("Banana"));

// Test Whether an item in not in a array.
console.log('Testing "Nashpati" is not in array: ', !fruitsName.includes("Nashpati"));


