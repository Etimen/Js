



//let zone = document.getElementById('message');
//zone.addEventListener('keydown', (event) => {
//console.log(`key=${event.key},code=${event.code}`);
//});



// let msg = document.getElementById('message');
// msg.addEventListener("keydown", (event) => {
// // traitement keydown
// console.log('Keydown')
// });

// msg.addEventListener("keypress", (event) => {
// // traitement keypress
// console.log('Keypress')
// });

// msg.addEventListener("keyup", (event) => {
// // traitement keyup
// console.log('Keyup')
// });



// document.getElementById('message').addEventListener("keydown",function(event){
//     if(event.keyCode === 13){
//         console.log("you click on ENter )))))) downn !")
//     }
// })

// document.getElementById('message').addEventListener("keypress",function(event){
//     if(event.keyCode === 13){
//         console.log("you click on ENter )))))) presssssssssssss !")
//     }
// })
// document.getElementById('message').addEventListener("keydown",function(event){
//     if(event.keyCode === 9){
//         console.log("you click on ENteTabr )))))) downn !")
//     }
// })
// document.getElementById('message').addEventListener("keypress",function(event){
//     if(event.keyCode === 9){
//         console.log("you click on tab )))))) presssssssssssss !")
//     }
// })


document.querySelector(".btn").addEventListener("click" , function(e){
    e.preventDefault();
    let Username = document.querySelector("#input1")
    if(Username.value.length == '' ){
        Username.classList.add('error')
    }
})