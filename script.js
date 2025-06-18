window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  const conteudo = document.getElementById("conteudo");

  setTimeout(() => {
    preloader.style.opacity = "0";

    setTimeout(() => {
      preloader.style.display = "none";
    }, 1000);

    conteudo.style.display = "block";
    conteudo.style.opacity = "1";
  }, 10000);
});

function alternarFavorito(botao) {
  const icone = botao.querySelector("i");
  const estaFavoritado = icone.classList.contains("fa-solid");

  if (estaFavoritado) {
    // Desfavoritar
    icone.classList.remove("fa-solid");
    icone.classList.add("fa-regular");
    botao.innerHTML = `<i class="fa-regular fa-star"></i> Favoritar`;
  } else {
    // Favoritar
    icone.classList.remove("fa-regular");
    icone.classList.add("fa-solid");
    botao.innerHTML = `<i class="fa-solid fa-star"></i> Favoritado`;
  }
}

function nao() {
  alert(
    "Por ser um projeto simples, essa funcionalidade não foi configurada, e está onde está por questão de estética"
  );
}
