let nombre = 5.4

// console.log(Math.abs(nombre));

// console.log(Math.ceil(nombre));

// console.log(Math.floor(nombre))

// console.log(Math.trunc(nombre))

console.log(Math.sqrt(nombre))


console.log(Math.max(19,4,3,65,5,24))

console.log(Math.min(19,4,3,65,5,24))



let nombres = [19,4,3,65,5,24]

console.log(Math.max(...nombres))


const stagiaires= [ { id :1,nom:"ElIdrysy",note:18},
                    { id :1,nom:"Hanafi",note:17},
                    { id :1,nom:"hekki",note:16},
                    { id :1,nom:"aittable",note:15},
                    { id :1,nom:"noha",note:14},
                

                    ]
let listeNotes=stagiaires.map(function(itemValue){
    return itemValue.note;
}
)
console.log(listeNotes)
let maxnote = Math.max(...listeNotes)

console.log(maxnote)



let majorantsListe = stagiaires.filter(function(itemValue){
    return itemValue.note=== maxnote
})
console.log(majorantsListe)


console.log(Math.round(Math.random()*20));


console.log(Math.floor(Math.random()*20+1));



//



