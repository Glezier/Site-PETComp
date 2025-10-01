// Identificando elementos
const form = document.getElementById("form");
const sucesso = document.getElementById("sucesso");
const nova = document.getElementById("nova");

// Função para mensagem de inscrição realizada
form.addEventListener("submit", function(e){
    e.preventDefault();
    sucesso.classList.add("ativo");
    document.body.classList.add("sem-scroll");
});

// Função para realizar nova inscrição
nova.addEventListener("click", function() {
    sucesso.classList.remove("ativo");
    document.body.classList.remove("sem-scroll");
    form.reset();
    window.scrollTo({ top: 0, behavior: 'smooth' });
})