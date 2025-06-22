document.addEventListener("DOMContentLoaded", () => {
  const navBar = document.getElementById("nav_bar");
  const estruturaBody = document.getElementById("estrutura_body");
  const footerBody = document.getElementById("footer_body");

  //Variáveis globais compartilhadas
  const botoesCriarConta = ["bnt_criarConta_desktop", "bnt_criarConta_mobile"];
  const botoesEntrar = ["bnt_entrar_desktop", "bnt_entrar_mobile"];
  let btnHamburger, navbarContent, logo;

  const carregarHtml = (elemento, url, fallbackMsg) => {
    if (!elemento) return;
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error(`Erro ao carregar ${url}`);
        return res.text();
      })
      .then(html => {
        elemento.innerHTML = html;
        if (url.includes("navbar")) adicionarEventosNavbar(); // só adiciona eventos se for a navbar
      })
      .catch(err => {
        elemento.innerHTML = `<p>${fallbackMsg}</p>`;
        console.error(err);
      });
  };

  const carregarPagina = (url) => {
    if (!estruturaBody) return;
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error("Erro ao carregar página");
        return res.text();
      })
      .then(html => estruturaBody.innerHTML = html)
      .catch(err => {
        estruturaBody.innerHTML = "<p>Erro ao carregar conteúdo.</p>";
        console.error(err);
      });
  };

  // Função que altera o layout da navbar ao entrar na tela de cadastro
  const navBarCadrastro = () => {
    if (navbarContent) {
      navbarContent.classList.remove("show");
    }

    if (btnHamburger) {
      btnHamburger.style.display = "none";
    }

    if (logo) {
      logo.classList.remove("mx-auto", "d-flex", "align-items-center");
      logo.style.display = "flex";
      logo.style.justifyContent = "center";
      logo.style.width = "100%";
    }

    botoesCriarConta.forEach(criarId => {
      const criarBtn = document.getElementById(criarId);
      if (criarBtn) criarBtn.style.display = "none";
    });

    botoesEntrar.forEach(entrarId => {
      const entrarBtn = document.getElementById(entrarId);
      if (entrarBtn) entrarBtn.style.display = "none";
    });
  };

  // Evento nos botões da navbar (executado após navbar ser carregada)
  const adicionarEventosNavbar = () => {
    btnHamburger = document.getElementById("bnt_hamburger");
    navbarContent = document.getElementById("navbarContent");
    logo = document.getElementById("logo");

    botoesCriarConta.forEach(id => {
      const btn = document.getElementById(id);
      if (btn) {
        btn.addEventListener("click", e => {
          e.preventDefault();
          navBarCadrastro();
          carregarPagina("src/html/paginaCadastroDados.html");
        });
      }
    });
  };

  // Suporte adicional para botão genérico (dinamicamente carregado no conteúdo)
  document.addEventListener("click", (e) => {
    const target = e.target;
    if (target && target.id === "bnt_criarConta") {
      e.preventDefault();
      navBarCadrastro();
      carregarPagina("src/html/paginaCadastroDados.html");
    }
  });

  // Carregamentos principais
  carregarHtml(navBar, "src/html/navbar.html", "Erro ao carregar navbar.");
  carregarHtml(estruturaBody, "src/html/paginaPrincipal.html", "Erro ao carregar conteúdo principal.");
  carregarHtml(footerBody, "src/html/footer.html", "Erro ao carregar footer.");
});
