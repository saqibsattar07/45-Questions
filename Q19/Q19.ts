//Question NO: 19
//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.



let guests = ["Saqib Sattar", "Abdul Sattar", "Fahad Sattar", "Sarang", "Siraj", "Zeeshan"];


//console.log(`You are inviting ${guests.length} people to dinner.`);


//console.log("Invitations to dinner:");
for (let i = 0; i < guests.length; i++) {
    //console.log(`Dear ${guests[i]}, I would be honored to have you join me for dinner.`);
}


//console.log("Unfortunately, we can only invite two people for dinner.");


while (guests.length > 2) {
    const removedGuest = guests.pop();
    //console.log(`Sorry ${removedGuest}, we can't invite you to dinner.`);
}


//console.log("Invitations to the remaining guests:");
for (let i = 0; i < guests.length; i++) {
    //console.log(`Dear ${guests[i]}, you're still invited to dinner.`);
}
