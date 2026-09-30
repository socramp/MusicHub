const imagens = document.querySelector(".carrossel-imagens");
const slides = document.querySelectorAll(".carrossel-imagens img");

const botaoAnterior = document.querySelector(".anterior");
const botaoProximo = document.querySelector(".proximo");

const indicadoresContainer = document.querySelector(".carrossel-indicadores");

let slideAtual = 0;
let intervalo;


/* CRIA AS BOLINHAS */

slides.forEach((slide, index) => {

    const indicador = document.createElement("div");

    indicador.classList.add("indicador");

    if (index === 0) {
        indicador.classList.add("ativo");
    }

    indicador.addEventListener("click", () => {

        slideAtual = index;

        atualizarCarrossel();

        reiniciarIntervalo();
    });

    indicadoresContainer.appendChild(indicador);
});


const indicadores = document.querySelectorAll(".indicador");


/* MOVE O CARROSSEL */

function atualizarCarrossel() {

    const larguraCarrossel =
        document.querySelector(".carrossel").clientWidth;

    imagens.style.transform =
        `translateX(-${slideAtual * larguraCarrossel}px)`;

    indicadores.forEach(indicador => {
        indicador.classList.remove("ativo");
    });

    indicadores[slideAtual].classList.add("ativo");
}


/* PRÓXIMA IMAGEM */

function proximoSlide() {

    slideAtual++;

    if (slideAtual >= slides.length) {
        slideAtual = 0;
    }

    atualizarCarrossel();
}


/* IMAGEM ANTERIOR */

function slideAnterior() {

    slideAtual--;

    if (slideAtual < 0) {
        slideAtual = slides.length - 1;
    }

    atualizarCarrossel();
}


/* BOTÕES */

botaoProximo.addEventListener("click", () => {

    proximoSlide();

    reiniciarIntervalo();
});


botaoAnterior.addEventListener("click", () => {

    slideAnterior();

    reiniciarIntervalo();
});


/* PASSA AUTOMATICAMENTE */

function iniciarIntervalo() {

    intervalo = setInterval(() => {

        proximoSlide();

    }, 5000);

}


/* REINICIA O TEMPO AO CLICAR */

function reiniciarIntervalo() {

    clearInterval(intervalo);

    iniciarIntervalo();
}


iniciarIntervalo();