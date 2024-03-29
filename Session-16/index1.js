document.getElementById("google").addEventListener("click",function(){
    open("https://www.google.com/")
})



let a = 10;

let b = 19;
 

let somme = a + b 


console.log(somme)

let i=0

// setInterval(function(){
//     i++
//     console.log(i)
// },1000)


// setTimeout(function() {
//     console.log("OK 5 sec AGO")
    
// }, 5000);
// Appels asynchrone                             // appels asynchrones(Callback/Promise)





//




// let stagiaires = getData(function(listestagaires){
//     console.log(listestagaires)
// });


//  function getData(myCallBackFunction){
//     setTimeout(function(){
//         return myCallBackFunction (["ElIdrysy","Hanafi","ZAk"])
//     },200)
// }






//!promise!//

//CONSAMATUER DE LA PROMISE´
let stgs2=[]
let sgtsnoteliste=[]
const sgts= getDataS().then(function(responde){
    console.log(responde);
    return getNotes()

.then(function(reponse){
    sgtsnoteliste=reponse;
        
    })
}).catch(function(error){
    console.log(error)
})


//PRODUCTION DE LA PREOMISE

function getDataS(){
    {
        let found = true
        return new Promise (function(resolve,reject){
            if (found === true){
                resolve([[{ids:1,nom:"el"},{ids:2,nom:"Ay"},{ids:3,nom:"men"}]]);
            }
            else{
                reject("not allowed");
            }
        })
}}

        console.log(sgts)




 function getNotes(){
    return new Promise (function(resolve,reject){
        resolve ([
            {idstg:1,module:"Js",note:17},
            {idstg:1,module:"Html",note:18},
            {idstg:1,module:"POO",note:18},
            {idstg:2,module:"Js",note:17},
            {idstg:2,module:"Html",note:16},
            {idstg:2,module:"POO",note:18},
            {idstg:3,module:"Js",note:19},
            {idstg:3,module:"Html",note:20},
            {idstg:3,module:"POO",note:18},

        ])
    })
 }



//   function getStagiarire().then (
//                         stagiarire => {
//                             console.log(stagiarire);
//                             return getModules()
//                         }
//                         ).then(module=>{
//                             console.log(modules);
//                             return getNotes()
//                         }).catch(function (error){
//                             console.log(error);
//                         }).finally(function(){
//                             console.log("finally!!!!!!!!")
//                         } )




    // if (found===true){
    //     return new Promise(function(resolve, reject) {
    //         resolve ("DATA RECUPERER")
            
    //     })
    // }else{
    //     reject("not allowed")
    // }
    // }



// document.getElementById("afficher-api-data").addEventListener("click",function(){
//     let dogA=fetch("fgñlknjcgxilkbjnjñjvkbnjgkl").then(function(reponse)){
        // return Response.json();
//     }.then(function(data){
//         console.log(data )
//     })
// =})



////17
/// GESTION DES ECEPTIONS (LES ERROS)

async  function executerCeCode(){
    let vnote=4

    try{
        const stagiaires = await getStagiarire();
        const modules = await getModules();
        const notes =await getNotes();
        console.log(stagiaires)
        console.log(modules)
        console.log(notes)
    }catch(err){
        console.log("err")
    }finally{
        console.log("remove lodading.....")

    }if (vnote<5){
        throw ("une error personalisé")
    }

}
//manipulation JSON