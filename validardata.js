document.addEventListener("DOMContentLoaded", function () {
    const hoje = new Date().toISOString().split("T")[0]; // pega data atual (AAAA-MM-DD)
  
    const nascimentoCadastro = document.getElementById("nascimento");
    if (nascimentoCadastro) {
      nascimentoCadastro.setAttribute("max", hoje);
  
      nascimentoCadastro.addEventListener("change", function () {
        if (this.value > hoje) {
          alert("A data de nascimento não pode ser maior que a data atual.");
          this.value = "";
        }
      });
    }
  });
  