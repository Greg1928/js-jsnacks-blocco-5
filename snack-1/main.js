const zucchine = [
    {
        varietà : "x",
        peso : 5,
        lunghezza : 22,
    },
    {
        varietà : "x",
        peso : 5,
        lunghezza : 22,
    },
    {
        varietà : "x",
        peso : 5,
        lunghezza : 22,
    },
    {
        varietà : "x",
        peso : 5,
        lunghezza : 22,
    },
    {
        varietà : "x",
        peso : 5,
        lunghezza : 22,
    },
    {
        varietà : "x",
        peso : 5,
        lunghezza : 22,
    },
    {
        varietà : "x",
        peso : 5,
        lunghezza : 22,
    },
    {
        varietà : "x",
        peso : 5,
        lunghezza : 22,
    },
    {
        varietà : "x",
        peso : 5,
        lunghezza : 22,
    },
    {
        varietà : "x",
        peso : 5,
        lunghezza : 22,
    },
]

let somma = 0;

for(let i = 0; i<zucchine.length; i++){
    let n = zucchine[i].peso;
    somma += n;
}

console.log(somma);