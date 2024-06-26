class Activites_stagiaires {
    constructor (id,prenom,nom,nb_jours,activite,date_activite,valide){
        this.id = id;
        this.prenom = prenom ;
        this.nom = nom ;
        this.nb_jours = nb_jours ;
        this.activite = activite ;
        this.date_activite = date_activite ;
        this.valide = valide ;
    }
}
// activite1 = new Activites_stagiaires()

// declaration
let stagiairesArray = [];
let activitesArray = [];
let activites_stagiaires = [];
let selected_activite ;
let selected_activite_row 


// events
document.addEventListener("DOMContentLoaded",chargement);

document.getElementById("btn_search").addEventListener("click",search)

document.getElementById("ajouter").addEventListener("click",ajouter_activite)

document.getElementById("supprimer").addEventListener("click",supprimer);

document.getElementById("modifier").addEventListener("click",modifier)


// functions

function chargement(){
    const request = new XMLHttpRequest();
    request.open("GET","data.json",true);
    request.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            let responseData = JSON.parse(this.responseText);
            stagiairesArray = responseData.stagiaires;
            activitesArray = responseData.activites;
            let activitesOption = "";
            for(let i = 0 ; i < activitesArray.length ; i++){
                activitesOption += `<option value =" ${activitesArray[i].libelle}" >${activitesArray[i].libelle} </option> `
            }
            document.getElementById("activite").innerHTML = activitesOption;

        }
    }
    request.send();
}

let searchedStagiaire;
function search(){
    searchedStagiaire = stagiairesArray.find(function(itemValue){
        let searchInput = document.getElementById("searchText").value;
        return itemValue.nom == searchInput;

    }) 
    if(!searchedStagiaire){
        console.log("not found")
    }
    // console.log(searchedStagiaire)

}




function ajouter_activite(e){
    e.preventDefault();
    let nom = searchedStagiaire.nom,
        id =searchedStagiaire.id ,
        prenom = searchedStagiaire.prenom,
        activite = document.getElementById("activite").value,
        nb_jours = document.getElementById("jours").value,
        date_activite = document.getElementById("date_debut").value,
        valide = document.getElementById("valideCheckbox").checked;

    let activite_stagiaire = new Activites_stagiaires(id,prenom,nom,nb_jours,activite,date_activite,valide);

    activites_stagiaires.push(activite_stagiaire);
    console.log(activites_stagiaires);
    console.log(date_activite);
    console.log(valide)
    afficher_activites();

}



function afficher_activites(){
    let content_data = "";
    for(let i = 0 ; i < activites_stagiaires.length ; i++){
    let valideCh = activites_stagiaires[i].valide ? checked : "" ;//ternary operation
    comsole.log(valideCh)  
        content_data += `<tr>
                            <td>${activites_stagiaires[i].id}</td>
                            <td>${activites_stagiaires[i].prenom}</td>
                            <td>${activites_stagiaires[i].nom}</td>
                            <td>${activites_stagiaires[i].activite}</td>
                            <td>${activites_stagiaires[i].nb_jours}</td>
                            <td>${activites_stagiaires[i].date_activite}</td>
                            <td><input type ="checkbox" /></td>
                        </tr>`
    }
    document.getElementById("tdata").innerHTML = content_data;
    let table_activites = document.getElementById("stagiare_activite_table")
    console.log(table_activites.rows.length)
    for (let i = 1 ; i < table_activites.rows.length ; i++){
        selected_activite_row = table_activites.rows[i]
        table_activites.rows[i].onclick = function(){
            for (let j = 1 ; j < table_activites.rows.length ; j++){
                table_activites.rows[j].classList.remove("table-success")
            } 
           selected_activite_row.classList.add("table-success");

            selected_activite = table_activites.rows[i].getElementsByTagName("td")[0].textContent;
            console.log(selected_activite);
        }  
    }
}


function supprimer (){
    activites_stagiaires = activites_stagiaires.filter(function(itemValue){
        return itemValue.id != selected_activite
    })
    afficher_activites();
}

// function modifier

// function modifier (){
//     document.querySelector("#button-search").style.display="none"
//     document.querySelector("#tdata").style.display="none"
//     document.querySelector("#ajouter").style.display="flex"


//     stagiaireModifier= stagiairesShow.find(function(itemValue){
//         return itemValue.id == valueStagiaire;
// }
//     )
//     document.querySelector("#id").value=stagiaireModifier.id
//     document.querySelector("#nb_jours").value=stagiaireModifier.nb_jours
//     document.querySelector("#date_activite").value=stagiaireModifierdate_activite
//     document.querySelector("#valideCheckbox").checked=stagiaireModifier.valideCheckbox
    
// }


function modifier(){

    let tr_data = selected_activite_row.getElementById("td")
    document.getElementById("activite").value = tr_data[3].textContent;


    document.getElementById("jours").value = tr_data[4].textContent;


    document.getElementById("date_debut").value = tr_data[5].textContent;



    document.getElementById("valideCheckbox").checked = tr_data[6].getElementsByTagName("input")[0].checked
    



}

function modifier_activite(){
    let activite_index

    let updated_activite = activites_stagiaires.find(function(itemValue,itemIndex){
       return itemValue.id == selected_activite
    
    })
 updated_activite.activite = document.getElementById("activite").value;
 updated_activite.nb_jours=document.getElementById("jours")
}