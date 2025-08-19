document.addEventListener("DOMContentLoaded", function () {
    const listaPessoas = document.getElementById("listaPessoas");
    const filtroNome = document.getElementById("filtroNome");
  
    function carregarPessoas(filtro = "") {
      listaPessoas.innerHTML = "";
      let pessoas = JSON.parse(localStorage.getItem("pessoas")) || [];
  
      // aplica filtro por nome
      if (filtro) {
        pessoas = pessoas.filter(p => p.nome.toLowerCase().includes(filtro.toLowerCase()));
      }
  
      pessoas.forEach((pessoa, index) => {
        const tr = document.createElement("tr");
  
        tr.innerHTML = `
          <td>${pessoa.nome}</td>
          <td>${pessoa.cpf}</td>
          <td>${pessoa.email}</td>
          <td>${pessoa.telefone}</td>
          <td>${pessoa.nascimento}</td>
          <td>
            <a href="editar.html?index=${index}">Editar</a>
          </td>
        `;
  
        listaPessoas.appendChild(tr);
      });
    }
  
    // evento para filtrar enquanto digita
    filtroNome.addEventListener("input", function () {
      carregarPessoas(this.value);
    });
  
    carregarPessoas();
  });
  