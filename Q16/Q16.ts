//Question NO: 16
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

//• Add one new guest to the beginning of your array.

//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list. 




let guests = ["Saqib Sattar", "Abdul Sattar", "Fahad Sattar"];


//console.log("Invitations to dinner:");
for (let i = 0; i < guests.length; i++) {
    //console.log(`Dear ${guests[i]}, I would be honored to have you join me for dinner.`);
}


//console.log("Good news! We found a bigger dinner table.");


guests.unshift("Siraj");


guests.splice(2, 0, "Sarang");


guests.push("Zeeshan");


//console.log("Updated invitations to dinner:");
for (let i = 0; i < guests.length; i++) {
    //console.log(`Dear ${guests[i]}, I would be honored to have you join me for dinner.`);
}
