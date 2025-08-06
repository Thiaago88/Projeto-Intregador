function salvarPessoa(pessoa) {
  const pessoas = JSON.parse(localStorage.getItem("pessoas") || "[]");
  pessoas.push(pessoa);
  localStorage.setItem("pessoas", JSON.stringify(pessoas));
}

function listarPessoas() {
  return JSON.parse(localStorage.getItem("pessoas") || "[]");
}

function atualizarPessoa(index, novaPessoa) {
  const pessoas = listarPessoas();
  pessoas[index] = novaPessoa;
  localStorage.setItem("pessoas", JSON.stringify(pessoas));
}

function removerPessoa(index) {
  const pessoas = listarPessoas();
  pessoas.splice(index, 1);
  localStorage.setItem("pessoas", JSON.stringify(pessoas));
}
