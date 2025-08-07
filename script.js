// Rotação de imagens principais
const images = ['imagem-pai.jpg', 'imagem-pai2.jpg', 'imagem-pai3.jpeg','imagem-pai4.jpg','imagem-pai5.jpg','imagem-pai6.jpg','imagem-pai7.jpg','imagem-pai8.jpg'];
let currentImage = 0;
const mainImage = document.getElementById('main-image');

setInterval(() => {
  currentImage = (currentImage + 1) % images.length;
  mainImage.src = images[currentImage];
}, 5000);

// Áudios para ícones
const corinthiansIcon = document.getElementById('corinthians-icon');
const bitcoinIcon = document.getElementById('bitcoin-icon');

const hinoAudio = new Audio('hino-corinthians.mp3');
const cifraoAudio = new Audio('cash-register.mp3');

function stopAllAudio() {
  hinoAudio.pause();
  cifraoAudio.pause();
  hinoAudio.currentTime = 0;
  cifraoAudio.currentTime = 0;
}

corinthiansIcon.addEventListener('click', () => {
  stopAllAudio();
  hinoAudio.play();
});

bitcoinIcon.addEventListener('click', () => {
  stopAllAudio();
  cifraoAudio.play();
});

// Movimento suave e contínuo dos ícones
function animateFloatingIcon(icon) {
  let speedX = (Math.random() * 2 - 1) * 0.5;
  let speedY = (Math.random() * 2 - 1) * 0.5;
  let posX = Math.random() * window.innerWidth;
  let posY = Math.random() * window.innerHeight;

  function move() {
    posX += speedX;
    posY += speedY;

    if (posX < 0 || posX > window.innerWidth - 100) speedX *= -1;
    if (posY < 0 || posY > window.innerHeight - 100) speedY *= -1;

    icon.style.left = posX + 'px';
    icon.style.top = posY + 'px';

    requestAnimationFrame(move);
  }

  move();
}

animateFloatingIcon(corinthiansIcon);
animateFloatingIcon(bitcoinIcon);

// Emojis subindo pela tela
function createFloatingEmoji() {
  const emojis = ['❤️', '⚽', '🏓'];
  const emoji = document.createElement('div');
  emoji.className = 'floating-emoji';
  emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.style.left = Math.random() * 100 + 'vw';
  document.body.appendChild(emoji);

  setTimeout(() => {
    emoji.remove();
  }, 4000);
}

setInterval(createFloatingEmoji, 800);





