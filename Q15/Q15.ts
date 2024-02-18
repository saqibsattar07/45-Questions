//Question NO: 15
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

//• Print a second set of invitation messages, one for each person who is still in your list.




let guests = ["Saqib Sattar", "Abdul Sattar", "Fahad Sattar"];


//console.log("Invitations to dinner:");
for (let i = 0; i < guests.length; i++) {
    //console.log(`Dear ${guests[i]}, I would be honored to have you join me for dinner.`);
}


const guestWhoCantMakeIt = guests[1];
//console.log(`${guestWhoCantMakeIt} can't make it to dinner.`);


guests[1] = "Isaac Newton";


//console.log("Updated invitations to dinner:");
for (let i = 0; i < guests.length; i++) {
    //console.log(`Dear ${guests[i]}, I would be honored to have you join me for dinner.`);
}