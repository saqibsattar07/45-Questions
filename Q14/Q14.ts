//Question NO:14
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.


const guests = ["Saqib Sattar", "Fahad Sattar", "Bisma Sattar"];


//console.log("Invitations to dinner:");
for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i]}, I would be honored to have you join me for dinner.`);
}