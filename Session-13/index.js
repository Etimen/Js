let stagiare = {
    nom: "El idrysy",
    prenom:"Aymen",
    branche:"DD"
};
console.log(stagiare);
stagiare.branche="DEV";
console.log(stagiare);
delete stagiare.branche;
console.log(stagiare);

const stagiares = new Array('haitem','zak','nadir','zak');// to create a new array
console.log(stagiares.length)// pour savoir la longueru de cette array
console.log(stagiares[1])// `pour savoir la valeur de l index
console.log(stagiares.indexOf('nadir'));// pour savoir l index d 'un element
console.log (stagiares.indexOf('zak',3));

stagiares.forEach(function(itemValue,itemIndex,stArray){
    console.log(itemValue)
    console.log(itemIndex)
    console.log(stArray)
});
const copieStagiares = stagiares.map(function(itemValue,itemIndex){ // map is a "callback function"
    return itemValue  + " "+ (itemIndex + 10 );
   
});
console.log(copieStagiares)



//const stagiares = new Array(4);// to create a new array des cases
//stagiares.push('5th item') // in order to push items
//stagiares[0]='ahmed'// to push  by index
//console.log(stagiares.length)