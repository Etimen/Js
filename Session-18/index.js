// const sta = {
//     "id" : 1,
//     "nom" : "elidrysy",
//     "prenom":"EYMEN",
//     "AGe" :19

// }
// console.log(sta)


// let stagjson = JSON.stringify(sta) // stringify sert a render un object sous format JSON

// console.log(stagjson)

//  stagjson =JSON.parse(stagjson) // perse sert a render un format json sous forme d' un object 


//  console.log(stagjson)








// document.querySelector("#btn-load").addEventListener("click",loadTxt);
// function loadTxt(e){
//     e.preventDefault()
//     let request = new XMLHttpRequest();

//     request.open("Get","index.txt",true);

//     request.onreadystatechange= function(){
//         if(this.readyStaate == 4 && this.status == 200){
//             console.log(request.responseText);
//             vTitle= request.responseText
//             document.getElementById("cnt").innerHTML=request.responseText
//         }

//     };
//     request.send()
// }



document.getElementById("btn-load").addEventListener("click",loadTxt);

function loadTxt(e){
   e.preventDefault();

    let request = new XMLHttpRequest();

    request.open("GET","sample.txt",true);

    // method 1
    // request.onreadystatechange = function(){
    //     // console.log(request.readyState);
    //     // console.log(this.readyState)
    //     if (this.readyState == 4 && this.status == 200){
    //         document.getElementById("container").innerHTML = this.responseText
    //     }

    // };

    // method 2
    request.onload = function(){
        if (this.status == 200){

        }
    }

    request.send()
}


// const students= {
//     "S1":
// }



// document.getElementById("btn-loadjson").addEventListener("click",function(){
//     let req = new XMLHttpRequest(),

//     req.open("GET","sample.txt",true);
// })