const alunos = [
    {
      name: "Luiz",
      nota1: 10,
      nota2: 10,
    },
    {
      name: "Alexandra",
      nota1: 10,
      nota2: 10,
    },
    {
      name: "Carlos",
      nota1: 5,
      nota2: 5,
    },
  ]


function media(nota1, nota2){
    return ((nota1 + nota2) / 2).toFixed(2)
}

function mostrarMedia(aluno){
    let mediaFinal = media(aluno.nota1, aluno.nota2)
    if (mediaFinal >= 7){
        final = 'Aprovado(a)'
    } else{
        final = 'Reprovado(a)'
    }
    return `${aluno.name} tirou ${mediaFinal} e foi ${final}` 
}


for (let aluno of alunos){
    aux = mostrarMedia(aluno)
    alert(aux)
}