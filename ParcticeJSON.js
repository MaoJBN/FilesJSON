const job = "profesor"

const data = {
    name: "Juana",
    age: 30,
    job,
    active: true,
    hobbies:[
        "Play games",
        "Read books",
        "Sleep"
    ],
    studies:{
        primary:"Argelino",
        school: "Caro",
        college: "UFPSO"
    },
    greeting: function () {
        console.log("te hablo desde la prision");
    }
}
console.log(data.greeting());
console.log(data.name);
console.log(data.studies);

const drink = '{"ingredients":[{"idIngredient":"552","strIngredient":"Elderflower cordial","strDescription":"Elderflower cordial is a soft drink made largely from a refined sugar and water solution and uses the flowers of the European elderberry. Historically the cordial has been popular in North Western Europe where it has a strong Victorian heritage.","strType":"Cordial","strAlcohol":"No","strABV":null}]}'

console.log(JSON.parse(drink));

console.log(JSON.stringify(data));
delete data.active;