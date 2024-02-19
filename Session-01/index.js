console.log("Hello world!");
let nombreUn;
let nombreDeux;
let sommme;


nombreUn=16;
nombreDeux=20;


sommme = nombreUn + nombreDeux;

console.log(sommme)
 

// fonctions 
function greet(nom) {
    console.log("hello youuuu "+nom)
}


greet("NOHA")
greet("mouad")
greet("yahya")


// fontction sommme
function sum(s=nombreUn+nombreDeux){
    console.log("la somme est "+ s)
    return s
}
sum(15+7);

function inscrire(){
    let nom='aaa'
    let prenom ='nilah'
    let age=19
    
    if (age==19){
        let statut ="etudian"
        console.log(statut)
    }

}
inscrire()