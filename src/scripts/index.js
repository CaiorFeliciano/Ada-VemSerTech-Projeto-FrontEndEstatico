async function getProducts() {
  const response = await fetch (
    'http://localhost:3001/produtos'
  )
  if(response.ok) {
    const data = await response.json()
      renderTable(data)
  }
}

function renderTable(produtos) {
  const tableBody = document.querySelector('#userTable tbody');

  produtos.forEach(produto => {
    //criando uma nova row
    const row = document.createElement('tr'); 

    //criando novas cédulas
    const nome = document.createElement('td');
    const valor = document.createElement('td');
    const colhido = document.createElement('td');

    //adicionando conteúdo as cédulas
    nome.textContent = produto.nome;
    valor.textContent = produto.valor;
    colhido.textContent = produto.colhido;

    //adicionando conteúdo a tabela
    row.appendChild(nome)
    row.appendChild(valor)
    row.appendChild(colhido)

    tableBody.appendChild(row)


  })

}