//old classic function
function addNumbers(numA, numB)
{
    return numA + numB;
}

//new arrow function
//don't need to specify return type if it's intuitive based on arguments
const addThings = (numA: number, numB: number) =>
{
    return numA + numB;
}

//does same thing as arrow function, intuitive return after arrow
const addStuff = (numA, numB) => numA + numB;

//thunk = function w/ no arguments/paramaters
const thunk = () => 42;

console.log(addNumbers(4, 5));
console.log(addThings(6, 7));
console.log(addStuff(10, 9));
console.log(thunk());