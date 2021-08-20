
const add = function (number1, number2) {
    const sum = number1 + number2;
    return sum;
};

const result = add(4, 5);
console.log(result);

//If a number is >
/*
const biggerThan = function (number) {
    if (number > 100) {
        return true;
    } else {
        return false;
    }
};
*/

//Alternative solution:
const biggerThan = function (number) {
    return number > 100;
};

console.log(biggerThan(150));
console.log(biggerThan(50));
console.log(biggerThan(0));



//Bouncer at the club
const aiBrenda = function (
    maxVisitor,
    currentVisitors,
    agePotentialVisitor
) {
    if (agePotentialVisitor < 18) {
        return "no entrance!";
    }

    if (currentVisitors >= maxVisitor) {
        return "too busy";

    } else {
        return "come in";
    }
};

console.log(aiBrenda(2000, 0, 15)); // "this is a club for adults"
console.log(aiBrenda(2000, 1999, 50)); // "come in"
console.log(aiBrenda(2000, 2000, 40)); // "it's too busy now, come back later"
console.log(aiBrenda(2000, 2999, 30)); // "it's too busy now, come back later"



//Alternative solutions "Bouncer at the club":

//1.skip the curly braces for an if statement
//  if you only want one statement to be run after the if
/*
const aiBrenda = function (
    maxVisitors,
    currentVisitors,
    ageOfPotentialVisitor
) {
    if (ageOfPotentialVisitor < 18)
        return "this is a club for adults";
    if (currentVisitors >= maxVisitors)
        return "it's too busy now, come back later";
    return "come in";
};
console.log(aiBrenda(2000, 0, 15)); // "this is a club for adults"
console.log(aiBrenda(2000, 1999, 50)); // "come in"
console.log(aiBrenda(2000, 2000, 40)); // "it's too busy now, come back later"
console.log(aiBrenda(2000, 2999, 30)); // "it's too busy now, come back later"
*/

/*
//2. temporary response variable,
//   put a value into it and then return that variable at the end of the function
const aiBrenda = function (
    maxVisitors,
    currentVisitors,
    ageOfPotentialVisitor
) {
    let response;
    if (ageOfPotentialVisitor < 18) {
        response = "this is a club for adults";
    } else if (currentVisitors >= maxVisitors) {
        response = "it's too busy now, come back later";
    } else {
        response = "come in";
    }
    return response;
};
*/



//Calculating the average

const calcAverage = function (
    number1,
    number2,
    number3,
    number4,
    number5,
) {
    const sum = number1 + number2 + number3 + number4 + number5;
    const average = sum / 5;
    return average;
};

console.log(calcAverage(1, 2, 3, 4, 5));


//Bonus (average rounded):
/*
const calcAverage = function (
    number1,
    number2,
    number3,
    number4,
    number5,
 ) {
     const sum = number1 + number2 + number3 + number4 + number5;
     const average = sum / 5;
     const averageRounded = Math.round(average)
     return averageRounded;
 };

 console.log(calcAverage(1, 2, 3 ,4, 5.5));
 */