
//gevuld met min 3 versch kleuren idv strings
const myArray = ["green", "blue", "red"];
console.log(myArray);
console.log(myArray.length);

//1e element vd array
console.log(myArray[0]);

/* laatste element uit onbekende array lengte:
var last_element = myArray[myArray.length - 1]
console.log(last_element)
*/
//kortere versie
console.log(myArray[myArray.length - 1]);

//adding elements
myArray.push("yellow");
console.log(myArray);
myArray.push(5);
console.log(myArray);

//adding an object
myArray.push({ greeting: "Hi ik ben een object" });
console.log(myArray);

//last greeting log
console.log(myArray[myArray.length - 1].greeting);