document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formEditar");
  const params = new URLSearchParams(window.location.search);
  const index = params.get("index");

  let pessoas = JSON.parse(localStorage.getItem("pessoas")) || [];
  const pessoa = pessoas[index];

  // Preenche os campos
  document.getElementById("nome").value = pessoa.nome;
  document.getElementById("cpf").value = pessoa.cpf;
  document.getElementById("email").value = pessoa.email;
  document.getElementById("telefone").value = pessoa.telefone;
  document.getElementById("nascimento").value = pessoa.nascimento;
  document.getElementById("senha").value = pessoa.senha;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const nascimento = document.getElementById("nascimento").value;
    const senha = document.getElementById("senha").value;

    // 🔴 Valida CPF duplicado (ignora o próprio registro)
    const existeCPF = pessoas.some((p, i) => p.cpf === cpf && i != index);
    if (existeCPF) {
      alert("Já existe um usuário cadastrado com este CPF.");
      return;
    }

    pessoas[index] = { nome, cpf, email, telefone, nascimento, senha };
    localStorage.setItem("pessoas", JSON.stringify(pessoas));

    alert("Dados atualizados com sucesso!");
    window.location.href = "listar.html";
  });
});
