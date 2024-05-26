"use strict";
// Alien color #3: Turn your if-else chain from Exercise 5-4 in to a if-else chain.
//write a three version of this program, making sure each message is print for the approprite color alien.
let alienColor = "green";
// . If the alien is green, print a message that the player earned 5 points.
// . If the alien is yellow, print a message that the player earned 10 points.
// . If the alien is red, print a message that the player earned 15 points.
// version 1 of the program.
if (alienColor === "green") {
    console.log("version 1: player earnsd 5 points. ");
}
else if (alienColor === "yellow") {
    console.log("player earnsd 10 points. ");
}
else if (alienColor === "red") {
    console.log("player earnsd 15 points. ");
}
else {
    console.log("pleas right color select in alien. ");
}
// version 2 of the program.
alienColor = "yellow";
if (alienColor === "green") {
    console.log("player earnsd 5 points. ");
}
else if (alienColor === "yellow") {
    console.log("version 2: player earnsd 10 points. ");
}
else if (alienColor === "red") {
    console.log("player earnsd 15 points. ");
}
else {
    console.log("pleas right color select in alien. ");
}
// version 3 of the program.
alienColor = "red";
if (alienColor === "green") {
    console.log("player earnsd 5 points. ");
}
else if (alienColor === "yellow") {
    console.log("player earnsd 10 points. ");
}
else if (alienColor === "red") {
    console.log("version 3: player earnsd 15 points. ");
}
else {
    console.log("pleas right color select in alien. ");
}
