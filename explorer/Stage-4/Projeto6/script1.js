// for (let i = 1; i < 10; i++){
//     if (i === 5){
//         break;
//     }
//     console.log(i)
// }

// let a = 0
// while (a < 10){
//     console.log(a)
//     a++;
// }


// let name = 'maik'
// let names = ['joao', 'paulo', 'pedro']
// for(let char of names[1]){
//     console.log(char)
// }


let person = {
    name: 'josh',
    age: 30,
    peso: 6.5
}

for (let propety in person){
    console.log(propety)
    console.log(person[propety])
}