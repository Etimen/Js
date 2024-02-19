function greet (){
    console.log("Hello!")
}
greet()
// function somme(a,b){
//     return a + b  
// }
// let sm =somme(5,9)



// function expressions
let somme =function (a,b){
    return a + b
}
let sm = somme (5,9)


console.log(sm)

// Les fonctions flechées (arrow function)


// let ay= function (){
//     return console.log ("Welcome to Js world !!")
// };



// let greet = ()=> {
//     console.log ("Welcome to JS world !!")
// };


let Nomcomplet = (nom,prenom )=> {


    let fullname =  nom  +" " + prenom

    return fullname
  
}
console.log(Nomcomplet("El Idrysy","Aymen"));



const variable=()=> {
    return "ma_variable"
}
console.log(variable())


// les exepression lamdas
const language = [
    'Java',
    'Python',
    'PHP',
    'Scala',
];

//console.Fore( langages.map( L => ))



// exemple 2
//Map(il ne modifie pas le tableau mais il ne redonne une copie)
let jours = ["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","et","Dimanche"]


jours.map(function(item){

    return console.log(item)
})




jours.map((item)=>{

    return console.log(item)
})


const jourss = ["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","et","Dimanche"]

jourss.map((item)=>{
    if (item === "Jeudi"){
        item = item + "* jour férier"
    }

    return console.log(item)
})

const stagiaires = [
    {nom:"El Idrysy",prenom:"Aymen",age:18},
    {nom:"Hanafi",prenom:"Zakaria",age:19},
    {nom:"Hekki",prenom:"Haitam",age:19},
    {nom:"Mohimi",prenom:"Yusra",age:19}
]
let nomstagiaires ;
nomstagiaires=stagiaires.map((info)=>{
    fullname = info['nom']+" "+ info['prenom']
    return fullname
})


console.log(stagiaires)
console.log(nomstagiaires)


let nameAge;
nameAge = stagiaires.map((item,index,aarstagiaires) => {
    //{nom:"El Idrysy",prenom:"Aymen",age:18,branche :"DD",remarque : "plus de 20 ans"}// moin de 20  ans pour <20
    let st;
    st={...item,branche:"DD",id:index+1}; // {El Idrysy",prenom:"Aymen",age:18}
    return st;
});
console.log(nameAge);

// l' ajout du remarque
let remarqueage ;
remarqueage =stagiaires.map((item,index,aarstagiaires)=> {
    let st;
    if((item.age)<20){
        st={...item,branche:"DD",id:index+1,remarque:"age < 20 ans"};
    }else{
        st={...item,branche:"DD",id:index +1 ,remarque:"age > 20 ans"}
    }
    return st;
})
console.log(remarqueage);







