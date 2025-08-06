const tabela = document.getElementById("tabelaPessoas");
const pessoas = listarPessoas();

pessoas.forEach((pessoa, index) => {
  const linha = document.createElement("tr");

  linha.innerHTML = `
    <td>${pessoa.nome}</td>
    <td>${pessoa.email}</td>
    <td>${pessoa.telefone}</td>
    <td>
      <button onclick="editar(${index})">Editar</button>
      <button onclick="excluir(${index})">Excluir</button>
    </td>
  `;

  tabela.appendChild(linha);
});

function excluir(index) {
  removerPessoa(index);
  location.reload();
}

function editar(index) {
  localStorage.setItem("editarIndex", index);
  window.location.href = "editar.html";
}
