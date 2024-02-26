const UserList = []

document.querySelector("#Ajouter").addEventListener("click", function(e){
   e.preventDefault();
    let nom = document.querySelector("#nom").value;
    let pre = document.querySelector("#pre").value;
    let age = document.querySelector("#age").value;
    const UserInfo = {};
    UserInfo.noms = nom ;
    UserInfo.prenoms = pre ;
    UserInfo.ages = age ;
    UserList.push(UserInfo);

    
})


document.querySelector("#afficher").addEventListener("click" , (e) =>{
    e.preventDefault();
    console.log(UserList);
    UserList.map(function(item,number,array){
        console.log(item)
    })

    let FSet = document.createElement("fieldset");
    let Legend = document.createElement("legend");
    Legend.innerHTML="Les personnes";
    document.body.append(FSet)
    document.querySelector("fieldset").append(Legend)
    let ul =document.createElement("ul")
    document.querySelector("fieldset").append(ul)
    UserList.map(function(item,number, array){
        
        let Keys = Object.keys()
        for (let i=0 ; i< UserList.length;i++){
            let li=document.createElement("li")
            li.innerHTML= item[Keys[i]]
            document.querySelector("fieldset").append(li)
        }
    })
})

