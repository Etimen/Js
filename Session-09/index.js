//création des élement DOM
document.querySelector(".creer-titre").addEventListener("click",function(){
    const parent = document.querySelector(".section-1")
    const titre = document.createElement("h1");
    titre.innerHTML = "This is a title"
    titre.style.backgroundColor="black"
    titre.style.color="white"
    parent.append(titre)
  
})




document.querySelector(".creer-para").addEventListener("click",function(){
    const parent = document.querySelector(".section-2")
    const para = document.createElement("p");
    para.innerHTML="Sabes que tú no vales (vale'), como sueno yo en instrumentales";
    para.style.backgroundColor="black"
    para.style.color="White"
    parent.append(para)
    
}) 
 



//document.querySelector(".delete-btn").addEventListener("click",function(){
 //   document.querySelector(".delte").remove()

  //  document.querySelector(".section-1").removeChild.querySelector(".paragraph-1")
//})

document.querySelector(".delete-btn").addEventListener("click",function(){
   const parent = document.querySelector(".section-1")
    const enfant = document.querySelector(".paragraph-1")
    document.querySelector(".delte").remove();
    parent.removeChild(enfant)
})

document.querySelector(".btn-remplace").addEventListener("click",function(){
    const parent = document.querySelector(".section-1")
    const ancEle= document.querySelector(".paragraph-1")
    const nouvEle= document.querySelector(".delte")

    parent.replaceChild(nouvEle,ancEle)

})
document.querySelector(".btn-creer-cnt").addEventListener("click",function(){
    const VConteneur = document.createElement("div");
    VConteneur.classList.add("Container")
    VConteneur.classList.add("border")


    //set attribute
   
    document.body.append(VConteneur)
    document.querySelector(".delte").classList.add("border")
    document.querySelector(".delte").setAttribute("id","Aymen")
})
