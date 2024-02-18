//Question NO: 22
//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.



const countries = [
    {
        name: "Pakistan",
        capital: "Islamabad",
        population: 245_209_815,
        officialLanguage: "Urdu"
    },
    {
        name: "China",
        capital: "Beijing",
        population: 1_444_216_107,
        officialLanguage: "Standard Chinese"
    },
    {
        name: "India",
        capital: "New Delhi",
        population: 1_393_409_038,
        officialLanguage: "Hindi, English"
    },
    {
        name: "Brazil",
        capital: "Brasília",
        population: 213_993_437,
        officialLanguage: "Portuguese"
    }
];


//console.log("Information about different countries:");
countries.forEach(country => {
    console.log(`
        Country: ${country.name}
        Capital: ${country.capital}
        Population: ${country.population}
        Official Language: ${country.officialLanguage}
    `);
});


//console.log(countries[4].name); 

