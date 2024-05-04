"use strict";
//Question NO: 43
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name
function show_magicians(magicians) {
    magicians.forEach((magician) => console.log(magician));
}
function make_great(magicians) {
    let great_magicians = [];
    for (let i = 0; i < magicians.length; i++) {
        great_magicians.push("Great " + magicians[i]);
    }
    return great_magicians;
}
let magicians = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller"];
let great_magicians = make_great([...magicians]);
console.log("Original Magicians:");
show_magicians(magicians);
console.log("\nGreat Magicians:");
show_magicians(great_magicians);
