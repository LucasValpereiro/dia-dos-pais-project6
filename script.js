function criarAnimacao() {
    const elemento = document.createElement("div");
    elemento.classList.add("animado");

    // Lista com corações, bolas de Pickleball e Bitcoin
    const itens = ["❤️", "🏓", "₿"];
    const itemAleatorio = itens[Math.floor(Math.random() * itens.length)];
    elemento.textContent = itemAleatorio;

    // Posição horizontal aleatória
    elemento.style.left = Math.random() * 100 + "vw";

    // Velocidade aleatória entre 3s e 5s
    elemento.style.animationDuration = (Math.random() * 2 + 3) + "s";

    document.body.appendChild(elemento);

    // Remove depois de subir
    setTimeout(() => {
        elemento.remove();
    }, 5000);
}

// Criar um novo elemento a cada meio segundo
setInterval(criarAnimacao, 500);
