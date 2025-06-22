import { carregarHtml } from "./scriptFuncion.js";

document.addEventListener("DOMContentLoaded", () => {
  const navBar_cadastro = document.getElementById("nav_bar_cadastro");
  const footerBody_cadastro = document.getElementById("footer_body_cadastro");

  const navBarCadastro = () => {
    const navbarContent = document.getElementById("navbarContent");
    const btnHamburger = document.getElementById("bnt_hamburger");
    const logo = document.getElementById("logo");

    if (navbarContent) navbarContent.classList.remove("show");
    if (btnHamburger) btnHamburger.style.display = "none";
    if (logo) {
      logo.classList.remove("mx-auto", "d-flex", "align-items-center");
      logo.style.display = "flex";
      logo.style.justifyContent = "center";
      logo.style.width = "100%";
    }

    ["bnt_criarConta_desktop", "bnt_criarConta_mobile"].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.display = "none";
    });

    ["bnt_entrar_desktop", "bnt_entrar_mobile"].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.display = "none";
    });

    const formularioCadastro = document.getElementById("formulario_cadastro");
    const formularioVerificacao = document.getElementById("formulario_cadastro_verificacao");
    const botaoCriarConta = document.getElementById("bnt_criarConta_formulario");

    if (botaoCriarConta) {
        botaoCriarConta.addEventListener("click", (event) => {
        event.preventDefault(); // Evita envio do formulário

        // Oculta o formulário de cadastro
        if (formularioCadastro) {
            formularioCadastro.classList.add("d-none");
        }

        // Exibe o formulário de verificação
        if (formularioVerificacao) {
            formularioVerificacao.classList.remove("d-none");
        }
        });
    }

  };

  // Carregamentos principais
  carregarHtml(navBar_cadastro, "../html/navbar.html", "Erro ao carregar navbar.", navBarCadastro);
  carregarHtml(footerBody_cadastro, "../html/footer.html", "Erro ao carregar footer.");
  
});
