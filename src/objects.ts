//"type" class is only a typescript thing, not javascript
//?: means it's optional
type Person = {
    firstName?: string;
    lastName?: string;
    age?: number;
}

const rufus: Person = {
    firstName: "Rufus",
    lastName: "The Dog",
    age: 7
}

console.log(rufus);