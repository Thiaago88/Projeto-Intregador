document.getElementById("formCadastro").addEventListener("submit", function (e) {
  e.preventDefault();

  const pessoa = {
    nome: document.getElementById("nome").value,
    cpf: document.getElementById("cpf").value,
    email: document.getElementById("email").value,
    telefone: document.getElementById("telefone").value,
    nascimento: document.getElementById("nascimento").value,
    senha: document.getElementById("senha").value
  };

  salvarPessoa(pessoa);
  alert("Pessoa cadastrada com sucesso!");
  window.location.href = "index.html";
});
