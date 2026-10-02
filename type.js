const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
  mario.classList.add('jump');

  setTimeout(() => {
    mario.classList.remove('jump');
  }, 500);
};

const loop = setInterval(() => {

  const marioBox = mario.getBoundingClientRect();
  const pipeBox = pipe.getBoundingClientRect();

  const encostouNaHorizontal =
    pipeBox.left < marioBox.right - 30 &&
    pipeBox.right > marioBox.left + 30;

  const encostouNaVertical = marioBox.bottom > pipeBox.top + 10;
  console.log('JS carregou', mario, pipe);

  if (encostouNaHorizontal && encostouNaVertical) {

    pipe.style.animation = 'none';
    pipe.style.left = `${pipe.offsetLeft}px`;

    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;

    mario.src = 'images/game-over.png';
    mario.style.width = '75px';

    clearInterval(loop);
  }

}, 10);

document.addEventListener('keydown', jump);{

}

let pulando = false; {


const jump = () => {
  if (pulando) return;
  pulando = true;
  mario.classList.add('jump');

  setTimeout(() => {
    mario.classList.remove('jump');
    pulando = false;
  }, 500);
};
  }