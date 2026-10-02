const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');


let pulando = false;
let fim = false;

// ---------- Pulo ----------
const jump = () => {
  if (pulando || fim) return;
  pulando = true;
  mario.classList.add('jump');

  setTimeout(() => {
    mario.classList.remove('jump');
    pulando = false;
  }, 500);
};

document.addEventListener('keydown', (event) => {
  if (event.code === 'Space') {
    event.preventDefault(); // evita a página rolar ao apertar espaço
    jump();
  }
});

// ---------- Tela de Game-Over ----------
const mostrarGameOver = () => {
  const estilo = document.createElement('style');
  estilo.textContent = `
    #tela-gameover {
      position: fixed; inset: 0; z-index: 9999;
      display: flex; flex-direction: column;
      align-items: center; justify-content: center; gap: 24px;
      background: rgba(0, 0, 0, 0.75);
    }
    #tela-gameover h1 {
      margin: 0; color: #e52521; font: bold 64px Arial, sans-serif;
      text-shadow: 3px 3px 0 #000;
    }
    #tela-gameover button {
      padding: 14px 32px; font: bold 22px Arial, sans-serif;
      color: #fff; background: #43b047; border: 3px solid #fff;
      border-radius: 8px; cursor: pointer;
    }
    #tela-gameover button:hover { background: #2f8a33; }
  `;
  document.head.appendChild(estilo);

  const tela = document.createElement('div');
  tela.id = 'tela-gameover';
  tela.innerHTML = '<h1>Game-Over</h1><button id="btn-reviver">Reviver</button>';
  document.body.appendChild(tela);

  // Clicar em Reviver atualiza a página
  document.getElementById('btn-reviver').addEventListener('click', () => {
    location.reload();
  });
};

// ---------- Colisão ----------
const loop = setInterval(() => {
  const marioBox = mario.getBoundingClientRect();
  const pipeBox = pipe.getBoundingClientRect();

  const encostouNaHorizontal =
    pipeBox.left < marioBox.right - 30 &&
    pipeBox.right > marioBox.left + 30;

  const encostouNaVertical = marioBox.bottom > pipeBox.top + 10;

  if (encostouNaHorizontal && encostouNaVertical) {
    fim = true;

    pipe.style.animation = 'none';
    pipe.style.left = `${pipe.offsetLeft}px`;

    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;

    mario.src = 'images/game-over.png';
    mario.style.width = '75px';

    clearInterval(loop);
    mostrarGameOver(); // mostra a mensagem e o botão
  }
}, 10);


{
  const mario = new Image();
mario.src = "imagens/mario.png";
}

{
  mario.src = "images/mario.gif";
}

{
  
}