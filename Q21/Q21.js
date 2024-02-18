"use strict";
//Question NO: 21
//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
// Define TypeScript objects containing information about different countries
const countries = [
    {
        name: "Pakistan",
        capital: "Islamabad",
        population: 245 - 209815,
        officialLanguage: "Urdu"
    },
    {
        name: "China",
        capital: "Beijing",
        population: 1444216107,
        officialLanguage: "Standard Chinese"
    },
    {
        name: "India",
        capital: "New Delhi",
        population: 1393409038,
        officialLanguage: "Hindi, English"
    },
    {
        name: "Brazil",
        capital: "Brasília",
        population: 213993437,
        officialLanguage: "Portuguese"
    }
];
console.log("Information about different countries:");
countries.forEach(country => {
    console.log(`
        Country: ${country.name}
        Capital: ${country.capital}
        Population: ${country.population}
        Official Language: ${country.officialLanguage}
    `);
});
