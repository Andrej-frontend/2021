
const age = 18;
const isFemale = true;
const driverStatus = "bob";
const firstName = "Bram" || "Sarah";
const totalAmount = 50;

/*
Alternative data
const age = 17;
const isFemale = false;
const driverStatus = "404"
const firstName = Peter;
const totalAmount = 8;
*/

//leeftijd check
if (age >= 18) {
    console.log("Je mag naar binnen!");
} else {
    console.log("U wordt vriendelijk verzocht buiten te blijven");
}

// gender aktie
if (isFemale) {
    console.log("Volgens de ticket ben je een vrouw!");
} else {
    console.log("Sorry: Tonight Females only");
}

// "bob" controle
if (driverStatus == "bob") {
    console.log("Gefeliciteerd bob, u mag rijden!");
} else {
    console.log("Helaas, u bent geen bob en mag niet achter het stuur");
}

// 50% korting
if (age => 18 && age <= 25) {
    console.log("50% korting!")
} else {
    console.log("Volle prijs")
}

// Ludieke actie
if (firstName === "Bram" || firstName === "Sarah") {
    console.log("Wij bestaan 50 jaar! Iedereen met de naam Sarah of Bram krijgt een gratis biertje!");
} else {
    console.log("normale bier prijs");
}


// Jubileum korting
if (totalAmount > 25) {
    console.log("Gratis (vega)bitterballen");
} else if (totalAmount > 50) {
    console.log("Gratis portie nachos");
} else if (totalAmount > 100) {
    console.log("Gratis een flesje champagne");
}