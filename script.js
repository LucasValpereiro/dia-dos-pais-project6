// Fotos centrais que vão trocando
const fotos = [
    "imagem-pai.jpg",
    "imagem-pai2.jpg",
    "imagem-pai3.jpeg",
    "imagem-pai4.jpg",
    "imagem-pai5.jpg",
    "imagem-pai6.jpg",
    "imagem-pai7.jpg",
    "imagem-pai8.jpg",
    "imagem-pickeball.jpg",
    "imagem-corinthians.jpg",
    "imagem-bitcoin.jpg"
];

let fotoAtual = 0;
const fotoPrincipal = document.getElementById("foto-principal");

function trocarFoto() {
    fotoAtual = (fotoAtual + 1) % fotos.length;
    fotoPrincipal.style.opacity = 0;

    setTimeout(() => {
        fotoPrincipal.src = fotos[fotoAtual];
        fotoPrincipal.style.opacity = 1;
    }, 500);
}

setInterval(trocarFoto, 5000);

// Animação de emojis subindo
function criarAnimacao() {
    const elemento = document.createElement("div");
    elemento.classList.add("animado");

    // Emojis representando amor, pickleball, Corinthians e Bitcoin
    const itens = ["❤️", "🏓", "⚽", "🪙"];
    elemento.textContent = itens[Math.floor(Math.random() * itens.length)];

    elemento.style.left = Math.random() * 100 + "vw";
    elemento.style.animationDuration = (Math.random() * 3 + 3) + "s";

    document.body.appendChild(elemento);

    setTimeout(() => elemento.remove(), 6000);
}

setInterval(criarAnimacao, 400);



