
console.log("The wall has been painted red");

// No arguments
const paintWall1 = function () {
    console.log("The wall has been painted red")
};
paintWall1();


// Single argument
const paintWall2 = function (color) {
    console.log("The wall has been painted " + color);
};
paintWall2("green");

const paint = "blue";
paintWall2(paint);

// Multiple arguments
const paintWall3 = function (whichWall, color) {
    console.log("The " + whichWall + " has been painted " + color);
};
paintWall3("south-east", "purple");
paintWall3("north", "yellow");
