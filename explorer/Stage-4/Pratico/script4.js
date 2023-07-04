//meu
let itens = Number(prompt('Quantos itens quer adicionar? '))
array = []

for (let item = 0; item < itens; item++){
    let comprar = prompt('Nome do item: ')
    array.push(comprar)
}
alert(array)


//do curso
let items = [];

for(let item = 0; item < 2; item++) {
  let itemName = prompt("Digite o item " + (item + 1))

  items[item] = itemName
}

alert(items)