export const carregarHtml = (elemento, url, fallbackMsg, callback ) => {
  if (!elemento) {
    console.error("Elemento não encontrado:", elemento);
    return;
  }
  console.log(`Carregando conteúdo`);
  fetch(url)
    .then(res => {
      if (!res.ok) throw new Error(`Erro ao carregar ${url}`);
      return res.text();
    })
    .then(html => {
      elemento.innerHTML = html;
      if (typeof callback === "function") callback(); // Executa o callback após carregar
    })
    .catch(err => {
      elemento.innerHTML = `<p>${fallbackMsg}</p>`;
      console.error(err);
    });
};
