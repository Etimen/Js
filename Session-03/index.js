//type of  
console.log(typeof(5))
console.log(typeof(undefined))
console.log(typeof("to be or not to be "))
console.log(typeof(null))
// instance of
//instanceof(5)
//instanceof(undefined)
//instanceof("to be or not to be ")
 console.log(Object(3) instanceof Number )
//les types structurels

console.log(typeof(null))
let numStagiaires = [1,2,3]

let cNumStagiares = numStagiaires

cNumStagiares.push(5)

console.log(numStagiaires)
console.log(cNumStagiares)

let etudiant = {
    id:0,
    nom: "ait said",
    prenom: "kaoutar"
}

let cEtudiant = etudiant

cEtudiant.age = 14

console.log(etudiant)
console.log(cEtudiant)


// spread operator 

let liste=[20,30,40]

 let cliste=[...liste,50]

console.log(liste)
console.log(cliste)

let st={
    id:1,
    noms : "ahmed"
}
let cSt = {...st,age:19}
console.log(st
    )
console.log(cSt);