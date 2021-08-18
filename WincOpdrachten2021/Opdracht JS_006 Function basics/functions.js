
//1. Function Defining for Pizza
const makePizza = function () {
    console.log("Roll dough");
    console.log("Spread tomato sauce");
    console.log("Grate cheese");
    console.log("Bake in the oven");
};

// Call the Pizza function 3x (2x)
makePizza();
makePizza();
makePizza();

//2. Fucntion Defining for Sushi
const makeSushi = function () {
    console.log("Boil rice");
    console.log("Cut avocado and Fishy fish");
    console.log("Roll sushi");
};

// Call the Sushi function 5x (3x)
makeSushi();
makeSushi();
makeSushi();
makeSushi();
makeSushi();

// Call the Sushi function 3x + Call the Pizza function 2x
makeSushi();
makeSushi();
makeSushi();
makePizza();
makePizza();
