//Question NO: 45
//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.




function car_info(manufacturer, model, ...options) {
    let car = {
        manufacturer: manufacturer,
        model: model
    };

    
    options.forEach(option => {
        let [key, value] = option.split(':');
        car[key.trim()] = value.trim();
    });

    return car;
}


//let my_car = car_info('Toyota', 'Camry', 'color: blue', 'year: 2022', 'fuel type: gasoline');


//console.log(my_car);
