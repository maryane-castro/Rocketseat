
const pacientes = [
    {
      name: "Luiz",
      age: 20,
      weight: 100,
      height: 190
    },
    {
      name: "Alexandra",
      age: 27,
      weight: 70,
      height: 170
    },
    {
      name: "Carlos",
      age: 42,
      weight: 90,
      height: 180
    },
  ]

function IMC(weight, height){
    return (weight / ((height / 100) ** 2)).toFixed(2)
}

function mostrarIMC(paciente){
    return `Paciente ${paciente.name} possui o IMC de ${IMC(paciente.weight, paciente.height)}`
}

for (let paciente of pacientes){
    let mensagem = mostrarIMC(paciente)
    alert(mensagem)
}