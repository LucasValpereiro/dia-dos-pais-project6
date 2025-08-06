// ===== Fotos centrais =====
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

// ===== Emojis subindo =====
function criarAnimacao() {
    const elemento = document.createElement("div");
    elemento.classList.add("animado");

    const itens = ["❤️", "🏓", "⚽", "🪙"];
    elemento.textContent = itens[Math.floor(Math.random() * itens.length)];

    elemento.style.left = Math.random() * 100 + "vw";
    elemento.style.animationDuration = (Math.random() * 3 + 3) + "s";

    document.body.appendChild(elemento);
    setTimeout(() => elemento.remove(), 6000);
}
setInterval(criarAnimacao, 400);

// ===== Movimento suave aleatório para Corinthians e Bitcoin =====
function moverSuavemente(elemento) {
    const larguraJanela = window.innerWidth - elemento.width;
    const alturaJanela = window.innerHeight - elemento.height;

    const novaX = Math.random() * larguraJanela;
    const novaY = Math.random() * alturaJanela;

    elemento.style.transition = "all 4s ease-in-out";
    elemento.style.left = novaX + "px";
    elemento.style.top = novaY + "px";
}

const corinthians = document.getElementById("icone-corinthians");
const bitcoin = document.getElementById("icone-bitcoin");

// Posicionamento inicial (cantos opostos)
corinthians.style.left = "10px";
corinthians.style.top = "10px";

bitcoin.style.right = "10px";
bitcoin.style.bottom = "10px";

// Movimentação contínua
setInterval(() => moverSuavemente(corinthians), 4000);
setInterval(() => moverSuavemente(bitcoin), 4000);



