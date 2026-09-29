const menu = document.querySelector(".conteudo");
const itemAtivo = document.querySelector(".item-menu.ativo");

menu.addEventListener("mouseenter", () => {
    itemAtivo.classList.remove("ativo");
});

menu.addEventListener("mouseleave", () => {
    itemAtivo.classList.add("ativo");
});