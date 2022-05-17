const auto = [
    {
        marca : "a",
        modello : "1",
        alimentazione : "benzina",
    },
    {
        marca : "b",
        modello : "2",
        alimentazione : "diesel",
    },
    {
        marca : "c",
        modello : "3",
        alimentazione : "elettrico",
    },
    {
        marca : "d",
        modello : "4",
        alimentazione : "benzina",
    },
    {
        marca : "e",
        modello : "5",
        alimentazione : "diesel",
    },
    {
        marca : "f",
        modello : "6",
        alimentazione : "benzina",
    },
    {
        marca : "g",
        modello : "7",
        alimentazione : "elettrico",
    },
    {
        marca : "h",
        modello : "8",
        alimentazione : "elettrico",
    },
    {
        marca : "i",
        modello : "9",
        alimentazione : "benzina",
    },
    {
        marca : "l",
        modello : "10",
        alimentazione : "elettrico",
    },

]

let altro = [];
let benzina = [];
let diesel = [];

altro = auto.filter(auto => auto.alimentazione === "elettrico");
console.log(altro);

benzina = auto.filter(auto => auto.alimentazione === "benzina");
console.log(benzina);

diesel = auto.filter(auto => auto.alimentazione === "diesel");
console.log(diesel);