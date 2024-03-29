// let branche = "Développement "
// console.log(branche.length)
// console.log(branche.charAt(3))
// console.log(branche.substring(2,6))
// let brannche = "DD105 "
// let nom = "mohamed"
// let prenom ="MOHAMED"
// console.log(brannche.length)
// console.log(brannche.charAt(3))
// console.log(brannche.substring(2,5))

// console.log(nom.toUpperCase())
// console.log(prenom.toLowerCase())
let prenom = "Hmd"
let phrase = "this|is|a|char|method "
console.log(prenom.endsWith("d"))
console.log(prenom.startsWith("H"))
console.log(Array.from(prenom))
console.log(phrase.split("|"))

let vDate = new Date();
console.log(vDate)
console.log(vDate.getFullYear())
console.log(vDate.getDate())
console.log(vDate.getHours())
console.log(vDate.getMinutes())
console.log(vDate.getSeconds())


let vDateY =new Date ("2005-04-19")
console.log(vDateY)
vDateY.setDate("08")
console.log(vDateY)