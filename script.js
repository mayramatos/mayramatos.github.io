document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form');
    const feedbackMsg = document.querySelector('#form-feedback');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensagem = document.getElementById('mensagem').value.trim();

            if (nome === "" || email === "" || mensagem === "") {
                mostrarMensagem("Por favor, preencha todos os campos.", "red");
                return;
            }

            mostrarMensagem("Enviando...", "orange");

            setTimeout(() => {
                form.reset();
                mostrarMensagem("Mensagem enviada com sucesso!", "green");
            }, 1500);
        });
    }

    function mostrarMensagem(texto, cor) {
        if (feedbackMsg) {
            feedbackMsg.textContent = texto;
            feedbackMsg.style.color = cor;
        }
    }
}); 
