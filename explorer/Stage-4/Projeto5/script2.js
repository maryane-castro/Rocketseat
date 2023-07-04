//throw - try... catch


function sayMyName(name = ''){
    if (name === ''){
        //throw new Error("nome é necessario")
        throw "nome é necessario"
    }

    console.log('depois do erro')
}

try{
    sayMyName('das')
} catch (e){
    console.log(e)
}

console.log('após try/catch')
