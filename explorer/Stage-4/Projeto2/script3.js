//function scope

let subject = 'create video'
function createThink1(subject){  
    subject = 'study'
    return subject
}

function createThink2(){    //sem subject
    subject = 'study'
    return subject
}

console.log(subject)
console.log(createThink1(subject))
console.log(createThink2(subject))
