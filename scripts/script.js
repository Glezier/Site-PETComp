// Identificando elementos
const anterior = document.getElementById("anterior");
const proximo = document.getElementById("proximo");
const img = document.getElementById("imagem");

// Índice das imagens a serem mostradas
let indice = 0;

// Vetor de imagens do carrossel
const imagens = [
    "midias/img1.jpg",
    "midias/img2.jpg",
    "midias/img3.jpg",
    "midias/img4.jpg",
    "midias/img5.jpg"
];

// Função para o botão anterior
anterior.addEventListener('click', () => {
    indice--;
    if (indice < 0) {
        indice = imagens.length - 1;
    }
    img.src = imagens[indice];
});

// Função para o botão próximo
proximo.addEventListener('click', () => {
    indice++;
    if (indice >= imagens.length) {
        indice = 0;
    }
    img.src = imagens[indice];
});