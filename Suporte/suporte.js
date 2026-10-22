function enviarFeedback(isUtil) {
    const blocoComentario = document.getElementById('feedback-campo');
    const msgObrigado = document.getElementById('feedback-mensagem-obrigado');
    const botoes = document.querySelector('.feedback-botoes');

    if (isUtil) {
        botoes.style.display = 'none';
        msgObrigado.style.display = 'block';
    } else {
        botoes.style.display = 'none';
        blocoComentario.style.display = 'block';
    }
}

function confirmarComentario() {
    document.getElementById('feedback-campo').style.display = 'none';
    document.getElementById('feedback-mensagem-obrigado').style.display = 'block';
}
