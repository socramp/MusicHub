const imagens = document.querySelector(".albunsGerais");

const slides = document.querySelectorAll(".album");

const imagens2 = document.querySelector(".outrosAlbuns");

const slides2 = document.querySelectorAll(".albunsDeluxe");

const botaoAnterior = document.querySelector(".anterior");

const botaoProximo = document.querySelector(".proximo");

const indicadoresContainer =
    document.querySelector(".carrosselIndicadores");

const indicadoresContainerDeluxe =
    document.querySelector(".carrosselIndicadores2");


let slideAtual = 0;

let intervalo;


/* ========= CRIA OS INDICADORES ============== */

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
    document.querySelectorAll(".indicador");


/* ================================================= */
/*             ATUALIZA O CARROSSEL                  */
/* ================================================= */

function atualizarCarrossel() {

    /*
        Cada álbum possui 200px
        O espaço entre eles é 50px

        Portanto:

        200 + 50 = 250px
    */

    const larguraAlbum = slides[0].offsetWidth;

    const gap = 50;


    const deslocamento =
        slideAtual * (larguraAlbum + gap);


    imagens.style.transform =
        `translateX(-${deslocamento}px)`;


    /* atualiza as bolinhas */

    indicadores.forEach((indicador) => {

        indicador.classList.remove("ativo");

    });


    indicadores[slideAtual].classList.add("ativo");

}


/* ================================================= */
/*                 PRÓXIMO                            */
/* ================================================= */

function proximoSlide() {

    slideAtual++;


    if (slideAtual >= slides.length) {

        slideAtual = 0;

    }


    atualizarCarrossel();

}


/* ================================================= */
/*                 ANTERIOR                           */
/* ================================================= */

function slideAnterior() {

    slideAtual--;


    if (slideAtual < 0) {

        slideAtual = slides.length - 1;

    }


    atualizarCarrossel();

}


/* ================================================= */
/*                   BOTÕES                           */
/* ================================================= */

botaoProximo.addEventListener("click", () => {

    proximoSlide();

    reiniciarIntervalo();

});


botaoAnterior.addEventListener("click", () => {

    slideAnterior();

    reiniciarIntervalo();

});


/* ================================================= */
/*             PASSAGEM AUTOMÁTICA                   */
/* ================================================= */

function iniciarIntervalo() {

    intervalo = setInterval(() => {

        proximoSlide();

    }, 5000);

}


/* ==================== REINICIA O INTERVALO   ========================== */

function reiniciarIntervalo() {

    clearInterval(intervalo);

    iniciarIntervalo();

}


/* ================ INICIA   ==================== */

atualizarCarrossel();

iniciarIntervalo();


// CARROSSEL 2 =================================



/* ========= CRIA OS INDICADORES ======== */

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
    document.querySelectorAll(".indicador");


/* ================================================= */
/*             ATUALIZA O CARROSSEL                  */
/* ================================================= */

function atualizarCarrossel() {

    /*
        Cada álbum possui 200px
        O espaço entre eles é 50px

        Portanto:

        200 + 50 = 250px
    */

    const larguraAlbum = slides[0].offsetWidth;

    const gap = 50;


    const deslocamento =
        slideAtual * (larguraAlbum + gap);


    imagens.style.transform =
        `translateX(-${deslocamento}px)`;


    /* atualiza as bolinhas */

    indicadores.forEach((indicador) => {

        indicador.classList.remove("ativo");

    });


    indicadores[slideAtual].classList.add("ativo");

}


/* ================================================= */
/*                 PRÓXIMO                            */
/* ================================================= */

function proximoSlide() {

    slideAtual++;


    if (slideAtual >= slides.length) {

        slideAtual = 0;

    }


    atualizarCarrossel();

}


/* ================================================= */
/*                 ANTERIOR                           */
/* ================================================= */

function slideAnterior() {

    slideAtual--;


    if (slideAtual < 0) {

        slideAtual = slides.length - 1;

    }


    atualizarCarrossel();

}


/* ================================================= */
/*                   BOTÕES                           */
/* ================================================= */

botaoProximo.addEventListener("click", () => {

    proximoSlide();

    reiniciarIntervalo();

});


botaoAnterior.addEventListener("click", () => {

    slideAnterior();

    reiniciarIntervalo();

});


/* ================================================= */
/*             PASSAGEM AUTOMÁTICA                   */
/* ================================================= */

function iniciarIntervalo() {

    intervalo = setInterval(() => {

        proximoSlide();

    }, 5000);

}


/* ================================================= */
/*             REINICIA O INTERVALO                  */
/* ================================================= */

function reiniciarIntervalo() {

    clearInterval(intervalo);

    iniciarIntervalo();

}


/* ================================================= */
/*                    INICIA                          */
/* ================================================= */

atualizarCarrossel();

iniciarIntervalo();