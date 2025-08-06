const index = localStorage.getItem("editarIndex");
const pessoa = listarPessoas()[index];

if (!pessoa) {
  alert("Registro não encontrado.");
  window.location.href = "listagem.html";
}

document.getElementById("nome").value = pessoa.nome;
document.getElementById("cpf").value = pessoa.cpf;
document.getElementById("email").value = pessoa.email;
document.getElementById("telefone").value = pessoa.telefone;
document.getElementById("nascimento").value = pessoa.nascimento;
document.getElementById("senha").value = pessoa.senha;

document.getElementById("formEditar").addEventListener("submit", function (e) {
  e.preventDefault();

  const novaPessoa = {
    nome: document.getElementById("nome").value,
    cpf: document.getElementById("cpf").value,
    email: document.getElementById("email").value,
    telefone: document.getElementById("telefone").value,
    nascimento: document.getElementById("nascimento").value,
    senha: document.getElementById("senha").value
  };

  atualizarPessoa(index, novaPessoa);
  alert("Pessoa atualizada com sucesso!");
  window.location.href = "listagem.html";
});
