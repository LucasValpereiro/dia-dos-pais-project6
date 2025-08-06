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
    "imagem-corinthians.jpg",
    "imagem-bitcoin.jpg",
    "imagem-pickeball.jpg"
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

// ===== Movimento "balão ao vento" =====
function flutuar(elemento) {
    let x = Math.random() * (window.innerWidth - 150);
    let y = Math.random() * (window.innerHeight - 150);
    let angulo = Math.random() * 2 * Math.PI;
    let velocidade = 0.5 + Math.random(); // pixels por frame

    function mover() {
        x += Math.cos(angulo) * velocidade;
        y += Math.sin(angulo) * velocidade;

        // Rebote nas bordas
        if (x < 0 || x > window.innerWidth - 150) angulo = Math.PI - angulo;
        if (y < 0 || y > window.innerHeight - 150) angulo = -angulo;

        elemento.style.left = x + "px";
        elemento.style.top = y + "px";

        requestAnimationFrame(mover);
    }
    mover();
}

const corinthians = document.getElementById("icone-corinthians");
const bitcoin = document.getElementById("icone-bitcoin");

// Inicia nos cantos opostos
corinthians.style.left = "10px";
corinthians.style.top = "10px";

bitcoin.style.left = (window.innerWidth - 130) + "px";
bitcoin.style.top = (window.innerHeight - 130) + "px";

// Começa a flutuar
flutuar(corinthians);
flutuar(bitcoin);




