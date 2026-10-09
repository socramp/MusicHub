// ================ CARROSSEL 1==========================
const imagens = document.querySelector(".albunsGerais");
const slides = document.querySelectorAll(".album");

const botaoAnterior = document.querySelector(".carrossel-botao.anterior");
const botaoProximo = document.querySelector(".carrossel-botao.proximo");

const indicadoresContainer =
    document.querySelector(".carrosselIndicadores");

let slideAtual = 0;
let intervalo;

// ================INDICADORES DO CARROSSEL 1===============

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

const indicadores =
    document.querySelectorAll(".carrosselIndicadores .indicador");

// ================ATUALIZA CARROSSEL 1====================================
function atualizarCarrossel() {

    const larguraAlbum = slides[0].offsetWidth;

    const gap = 50;

    const deslocamento =
        slideAtual * (larguraAlbum + gap);

    imagens.style.transform =
        `translateX(-${deslocamento}px)`;


    indicadores.forEach((indicador) => {

        indicador.classList.remove("ativo");

    });

    indicadores[slideAtual].classList.add("ativo");

}


// ========PRÓXIMO - CARROSSEL 1 ==============================

function proximoSlide() {

    slideAtual++;

    if (slideAtual >= slides.length) {

        slideAtual = 0;

    }

    atualizarCarrossel();

}

// ================ANTERIOR - CARROSSEL 1===========================

function slideAnterior() {

    slideAtual--;

    if (slideAtual < 0) {

        slideAtual = slides.length - 1;

    }

    atualizarCarrossel();

}

// =============== BOTÕES - CARROSSEL 1 ====================

botaoProximo.addEventListener("click", () => {

    proximoSlide();

    reiniciarIntervalo();

});

botaoAnterior.addEventListener("click", () => {

    slideAnterior();

    reiniciarIntervalo();

});


// ================PASSAGEM AUTOMÁTICA - CARROSSEL 1===================

function iniciarIntervalo() {

    intervalo = setInterval(() => {

        proximoSlide();

    }, 5000);

}


function reiniciarIntervalo() {

    clearInterval(intervalo);

    iniciarIntervalo();

}

// =================INICIA CARROSSEL 1=============================

atualizarCarrossel();

iniciarIntervalo();

// ===============CARROSSEL 2===================================
const imagens2 =
    document.querySelector(".outrosAlbuns");

const slides2 =
    document.querySelectorAll(".albunsDeluxe");

const botaoAnterior2 =
    document.querySelector(".carrossel2-botao.anterior");

const botaoProximo2 =
    document.querySelector(".carrossel2-botao.proximo");

const indicadoresContainer2 =
    document.querySelector(".carrosselIndicadores2");

let slideAtual2 = 0;
let intervalo2;

// ==============INDICADORES DO CARROSSEL 2=====================
slides2.forEach((slide, index) => {

    const indicador2 = document.createElement("div");

    indicador2.classList.add("indicador2");

    if (index === 0) {

        indicador2.classList.add("ativo");

    }

    indicador2.addEventListener("click", () => {

        slideAtual2 = index;

        atualizarCarrossel2();

        reiniciarIntervalo2();

    });

    indicadoresContainer2.appendChild(indicador2);

});


const indicadores2 =
    document.querySelectorAll(".carrosselIndicadores2 .indicador2");


// ==============ATUALIZA CARROSSEL 2 ===========

function atualizarCarrossel2() {

    const larguraAlbum2 =
        slides2[0].offsetWidth;

    const gap2 = 50;

    const deslocamento2 =
        slideAtual2 * (larguraAlbum2 + gap2);

    imagens2.style.transform =
        `translateX(-${deslocamento2}px)`;


    indicadores2.forEach((indicador) => {

        indicador.classList.remove("ativo");

    });

    indicadores2[slideAtual2].classList.add("ativo");

}


// =============== PRÓXIMO - CARROSSEL 2 ======================

function proximoSlide2() {

    slideAtual2++;

    if (slideAtual2 >= slides2.length) {

        slideAtual2 = 0;

    }

    atualizarCarrossel2();

}


// ================ANTERIOR - CARROSSEL ==========================

function slideAnterior2() {

    slideAtual2--;

    if (slideAtual2 < 0) {

        slideAtual2 = slides2.length - 1;

    }

    atualizarCarrossel2();

}


// ============= BOTÕES - CARROSSEL 2 =======================

botaoProximo2.addEventListener("click", () => {

    proximoSlide2();

    reiniciarIntervalo2();

});

botaoAnterior2.addEventListener("click", () => {

    slideAnterior2();

    reiniciarIntervalo2();

});


// =============== PASSAGEM AUTOMÁTICA - CARROSSEL 2 ======================

function iniciarIntervalo2() {

    intervalo2 = setInterval(() => {

        proximoSlide2();

    }, 5000);

}


function reiniciarIntervalo2() {

    clearInterval(intervalo2);

    iniciarIntervalo2();

}


// ============ INICIA O CARROSSEL 2 ======================

atualizarCarrossel2();

iniciarIntervalo2();