window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  const conteudo = document.getElementById("conteudo");

  setTimeout(() => {
    // Aplica fade-out no preloader
    preloader.style.opacity = "0";

    // Depois de 1 segundo (tempo da transição), oculta totalmente
    setTimeout(() => {
      preloader.style.display = "none";
    }, 1000);

    // Aplica fade-in no conteúdo
    conteudo.style.display = "block";
    conteudo.style.opacity = "1";
  }, 10000); // 10 segundos
});
