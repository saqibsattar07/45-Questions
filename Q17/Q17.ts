//Question NO: 17
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

//• Print a message to each of the two people still on your list, letting them know they’re still invited.

//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.



let guests = ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Marie Curie", "Leonardo da Vinci", "Nikola Tesla"];


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


guests.pop();
guests.pop();


//console.log("Remaining guests:", guests);
