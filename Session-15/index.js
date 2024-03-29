// function Stagiaire(nom,prenom,age,branche){
//     this.nom = nom;
//     this.prenom = prenom;
//     this.age = age ;
//     this.branche=branche;
//     this.presenterVous =function(){
//         console.log("I am "+" "+this.nom+" "+this.prenom)
//         // console.log(`I am`${this.nom} $(this.prenom)))
//     }
// }

// const stagiaire2 = new Stagiaire("idrysy","reda",24,"FntDEV")
// console.log(stagiaire2)
// console.log(stagiaire2.presenterVous())

// stagiaire1 = {
//     nom:"El",
//     prenom:"Aymen",
//     age:19,
//     branche:"Dev",
//     presenterVous : function(){
//         console.log("I am "+" "+this.nom+" "+this.prenom)
//     }
// }

// console.log(stagiaire.nom)
// console.log(stagiaire.branche)
// console.log(stagiaire1.presenterVous())



function Achat( id,labelle,prix,quantite){
    this.id = id ;
    this.labelle =labelle;
    this.prix=prix;
    this.quantite=quantite;
    this.calculerTva = function(){
        let Tva = 20/100 
        let totall = this.prix * this.quantite
        let totalTTC = totall+(totall*Tva);
        return totalTTC;
    }
    // this.calprixT=function(){
    //     return console.log(prix=prix+(prix*1/5))
 }
//   // const achat1 = new Achat("B-192","Lr-48",1500,15)
// console.log(achat1.calTva())
// achat1.calprixT()
///











class Achets {
    constructor(id,labelle,prix,quantite){
        this.id = id ;
        this.labelle =labelle;
        this.prix=prix;
        this.quantite=quantite;
    }
    //methode dpour calculer le prirx total 
    calculerTva(){
        const TVA = 0.2 ;
        let total = this.prix *this.quantite;
        let totalTTC = total + (total*TVA);
        return totalTTC;
    }
}
const achat1 = new Achat (1,"keyboard",300,5);
const achat2 = new Achat (2,"screen",1000,2);
console.log(achat1.calculerTva())
console.log(achat2.calculerTva())