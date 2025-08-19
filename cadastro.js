document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formCadastro");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const nascimento = document.getElementById("nascimento").value;
    const senha = document.getElementById("senha").value;

    let pessoas = JSON.parse(localStorage.getItem("pessoas")) || [];

    // 🔴 Valida CPF duplicado
    const existeCPF = pessoas.some(p => p.cpf === cpf);
    if (existeCPF) {
      alert("Já existe um usuário cadastrado com este CPF.");
      return;
    }

    const novaPessoa = { nome, cpf, email, telefone, nascimento, senha };
    pessoas.push(novaPessoa);

    localStorage.setItem("pessoas", JSON.stringify(pessoas));

    alert("Cadastro realizado com sucesso!");
    window.location.href = "index.html";
  });
});
