document.getElementById("formLogin").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const pessoas = listarPessoas();
  const usuario = pessoas.find(p => p.email === email && p.senha === senha);

  if (usuario) {
    alert("Login bem-sucedido!");
    window.location.href = "listagem.html";
  } else {
    alert("Email ou senha inválidos!");
  }
});
