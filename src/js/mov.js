import "../css/main.css";

document.addEventListener("DOMContentLoaded", function () {
  const estrutura_Body = document.getElementById("estrutura_body");

  if (!estrutura_Body) {
    console.error("Elemento estrutura_body não encontrado.");
    return;
  }

  const carregarPaginaCadastro = () => {
    console.error("Carregando página de cadastro...");

    fetch("src/html/paginaCadastroDados.html")
      .then((response) => {
        if (!response.ok) throw new Error("Erro ao carregar página");
        return response.text();
      })
      .then((html) => {
        estrutura_Body.innerHTML = html;
      })
      .catch((error) => {
        estrutura_Body.innerHTML = "<p>Erro ao carregar conteúdo.</p>";
        console.error(error);
      });
  };

  if (btnDesktop) {
    btnDesktop.addEventListener("click", function (e) {
      e.preventDefault();
      carregarPaginaCadastro();
    });
  }
  if (btnMobile) {
    btnMobile.addEventListener("click", function (e) {
      e.preventDefault();
      carregarPaginaCadastro();
    });
  }
  if (btnTela) {
    btnTela.addEventListener("click", function (e) {
      e.preventDefault();
      carregarPaginaCadastro();
    });
  }

});
