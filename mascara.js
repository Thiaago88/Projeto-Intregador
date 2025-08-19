function aplicarMascaraTelefone(input) {
    input.addEventListener("input", function () {
      let valor = input.value.replace(/\D/g, ""); // Remove tudo que não é número
  
      if (valor.length > 10) valor = valor.substring(0, 10); // Limita a 10 dígitos
  
      if (valor.length > 6) {
        input.value = `(${valor.substring(0, 2)}) ${valor.substring(2, 6)}-${valor.substring(6)}`;
      } else if (valor.length > 2) {
        input.value = `(${valor.substring(0, 2)}) ${valor.substring(2)}`;
      } else if (valor.length > 0) {
        input.value = `(${valor}`;
      }
    });
  }
  
  // Ativar máscara nos campos de telefone
  document.addEventListener("DOMContentLoaded", function () {
    const telCadastro = document.getElementById("telefone");
    if (telCadastro) aplicarMascaraTelefone(telCadastro);
  });
  