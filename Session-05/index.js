let vDate = new Date ().getDay()
//console.log(vDate)
switch (vDate){
    case 0 :
        jour = "Dimanche"
        break ;
    case 1 :
        jour = "Lundi"
        break ;
    case 2 :
        jour = "mardi"
        break ;
    case 3 :
        jour = "mercredi"
        break ;
    case 4 :
        jour = "jeudi"
        break ;
    case 5 :
        jour = "vendredi"
        break ; 
    case 6 :
        jour = "samedi"
        break ;
} 
//console.log(jour)

// Autre exemples
let Abrev;
let branche ;
Abrev = "ID"


switch (Abrev){
    case "DD":
        branche = "Développement digital"
        break ;
    case "ID":
        branche = "Infrastructure Digital"
        break ;
    case "WD":
        branche = "Web Deisgn"
        break ;
    default:
        branche=""
}
//console.log("la branche est :",branche)


// les boucles // 
jours = ["lundi","mardi","mercredi","Jeudi","Vendredi"]
for (i=0 ;i<=4; i ++){
    console.log(jours[i]);
}


// in l indice


//for(item in  jours){
//  console.log(jours)}

for(item in  jours){
    console.log(jours[item]);
}


// of la valeur
for (jr of jours ){
    console.log(jr);
}
// 
let txt = "";
jours.forEach(myFunction);
function myFunction(value,index,array) {
    txt += value + " ";
}
console.log(txt)


// la bloucle while 
let n = 10;
while (n>=0){
    console.log(n)
    n = n -1 
}
do{
    console.log(n)
    n = n - 1
}
while ( n >= 0)



// La déclaration continue 
let text= ""
for (let i = 0 ; i < 10 ; i++){
    if (i===3){continue;}
    text += "The number is "+ i +"<br>";
}
console.log(text)
// La déclaration break
let txts = ""
for (let i = 0 ; i < 10 ; i++){
    if (i===3){break;}
    txts += "The number is "+ i +"<br>";
}
console.log(txts)