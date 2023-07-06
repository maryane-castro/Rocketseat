/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes
*/


const pacientes = [
    {
        nome: 'Luiz',
        idade: 20,
        altura: 80,
        peso: 87
    },
    {
        nome: 'Alexandra',
        idade: 20,
        altura: 80,
        peso: 87
    },
    {
        nome: 'Carlos',
        idade: 20,
        altura: 80,
        peso: 87
    }
]

let pacientesNome = []

for(let paciente of pacientes) {
  pacientesNome.push(paciente.nome)
}

alert(pacientesNome)
