// Lista de fotos para trocar no centro
const fotos = [
    "imagem-pai.jpg",
    "imagem-pai2.jpg",
    "imagem-pai3.jpeg",
    "imagem-pai4.jpg",
    "imagem-pai5.jpg",
    "imagem-pai6.jpg",
    "imagem-pai7.jpg",
    "imagem-pai8.jpg"
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

// Troca a cada 5 segundos
setInterval(trocarFoto, 5000);

// -------------------- Animação de emojis e escudo --------------------
function criarAnimacao() {
    const elemento = document.createElement("div");
    elemento.classList.add("animado");

    // Lista de elementos: ❤️, 🏓, escudo Corinthians (imagem)
    const itens = ["❤️", "🏓", "imagem-corinthians.jpg", "imagem-bitcoin.jpg"];
    const itemAleatorio = itens[Math.floor(Math.random() * itens.length)];

    if (itemAleatorio.includes("img/")) {
        // Se for imagem (escudo)
        const img = document.createElement("img");
        img.src = itemAleatorio;
        img.classList.add("emoji-img");
        elemento.appendChild(img);
    } else {
        // Se for emoji normal
        elemento.textContent = itemAleatorio;
    }

    elemento.style.left = Math.random() * 100 + "vw"; // Posição aleatória
    elemento.style.animationDuration = (Math.random() * 3 + 3) + "s"; // 3s a 6s

    document.body.appendChild(elemento);

    setTimeout(() => elemento.remove(), 6000);
}

// Cria um emoji/escudo a cada 400ms
setInterval(criarAnimacao, 400);

