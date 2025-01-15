let x = 10;
const y = 20;

while (x < y)
{
    console.log("while:", x);
    x++;
}

do {
    console.log("do-while:", x);
    x++;
} while (x < y);

for (let i = 5; i >= 0; i--)
{
    console.log("for: ", i);
}

console.log("Done!");