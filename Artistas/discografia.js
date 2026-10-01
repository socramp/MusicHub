const albuns = document.querySelector(".albunsGerais");
const botaoAnterior = document.getElementById("anterior");
const botaoProxima = document.getElementById("proxima");

let posicao = 0;

const larguraAlbum = 250;

botaoProxima.addEventListener("click", () => {
    posicao -= larguraAlbum;

    albuns.style.transform = `translateX(${posicao}px)`;
});

botaoAnterior.addEventListener("click", () => {
    posicao += larguraAlbum;

    if (posicao > 0) {
        posicao = 0;
    }

    albuns.style.transform = `translateX(${posicao}px)`;
});