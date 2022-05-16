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
        varietà : "y",
        peso : 5,
        lunghezza : 10,
    },
    {
        varietà : "y",
        peso : 5,
        lunghezza : 10,
    },
    {
        varietà : "y",
        peso : 5,
        lunghezza : 10,
    },
]

let sommaGrosse = 0;
let sommaPiccole = 0;
let zucchineGrosse = [];
let zucchinePiccole = [];
for(let i = 0; i<zucchine.length; i++){
    if (zucchine[i].lunghezza > 15){
        zucchineGrosse += zucchine[i].varietà;
        let n = zucchine[i].peso;
        sommaGrosse += n;
    }else{
        zucchinePiccole += zucchine[i].varietà;
        let n = zucchine[i].peso;
        sommaPiccole += n;
    }
    
}

console.log(zucchineGrosse, sommaGrosse);
console.log(zucchinePiccole, sommaPiccole);