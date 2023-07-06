/*

  Faça um programa que tenha um menu e apresente a seguinte mensagem:
  
  Olá usuário! Digite o número da opção desejada

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
  
  --- 
  O programa deverá capturar o número digitado pelo usuário e mostrar o seguintes cenários:

  Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
  Caso o usuário digite 2, ele poderá ver os itens cadastrados
    Se não houver nenhum item cadastrado, mostrar a mensagem: 
      "Não existem itens cadastrados"
  Caso o usuário digite 3, a aplicação deverá ser encerrada.

*/

const lista = []
let alternativa
while(alternativa != 3){
    alternativa = Number(prompt('1. Cadastrar um item na lista \n2. Mostrar itens cadastrados \n3. Sair do programa\nDigite o número da opção desejada: '))


    switch(alternativa){
        case 1:
            let item = prompt('Digite o nome do item')
            lista.push(item)
            break
        case 2:
            alert(lista)
            break
        case 3:
            break
    }

    
}


alert('Você saiu do programa')
