// const arrays

const cars = ["Saab", "Volvo", "BMW"];

// you can change an element
cars[0] = "Toyota";

// you can add element
cars.push("Audi");

console.table(cars);

// but you can not reassign the array
//cars = []; // error

// constants object

const myCar = {
  type: "Fiat",
  model: "500",
  color: "white",
};

// you can change a property
myCar.color = "red";

// you can add a property 
myCar.owner = "Johnson";

console.table(myCar); 

// but you can NOT reassign the object 
