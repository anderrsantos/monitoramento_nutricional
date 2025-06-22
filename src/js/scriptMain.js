import { carregarHtml } from "/src/js/scriptFuncion.js";

document.addEventListener("DOMContentLoaded", () => {
  const navBar = document.getElementById("nav_bar");
  const footerBody = document.getElementById("footer_body");

  // Carregamento inicial
  carregarHtml(navBar, "src/html/navbar.html", "Erro ao carregar navbar.");
  carregarHtml(footerBody, "src/html/footer.html", "Erro ao carregar footer.");
});
