// interface Person {
//     firstname: string;
//     lastname: string;
// }

// function someone(p: Person): string {
//     return `${p.firstname} ${p.lastname}`;
// }

// const ray: Person = {
//     firstname: "Raymond Ato",
//     lastname: "Ghanney",
// };

// console.log(someone(ray));

export const url = fetch("https://jsonplaceholder.typicode.com/users");

const fetch_method = url
    .then((data) => {
        if (data.ok) {
            return data.json();
        } else {
            throw new Error("Data not found");
        }
    })
    .then((reason) => {
        return reason;
    })
    .catch((err) => {
        return err.message;
    });

console.log(await fetch_method);

console.log("some data working");
