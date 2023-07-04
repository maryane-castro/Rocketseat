//manipulando strings e arrays
//Verificar se o texto tem palavra especifica

let phrase = "Eu quero viver o Amor!"
let myarray1 = phrase.split("o")  //separa por espaços em branco
console.log(myarray1)

let myarray2 = phrase.split(" ")  //separa por espaços em branco
console.log(myarray2)


let phraseWithUnderscore = myarray2.join("_")
console.log(phraseWithUnderscore.toLowerCase())

let phrase1 = "Eu quero viver o Amor!"
console.log(phrase1.includes("amor"))


