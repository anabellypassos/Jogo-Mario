/*const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');


const jump = () => {
mario.classList.add('jump');

setTimeout(() => {

mario.classList.remove('jump');

},500);

}

const loop = setInterval(() =>{

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(marioPosition);

if(pipePosition <=  120 && pipePosition> 0 && marioPosition <80 ){
    
    pipe.style.animation = 'none';
    pipe.style.left =`${pipePosition}px`;


    pipe.style.animation = 'none';
    mario.style.bottom =`${pipePosition}px`;




    mario.src='./images/game-over.png';
    mario.style.width='75px'
    mario.style.left='50px'
    

  
    clearInterval(loop);
   

}
 

},10);



document.addEventListener('keydown', jump);
*/
/*
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const startButton = document.getElementById('start-button'); // Adicione o ID 'start-button' ao botão de início
let gameStarted = false;


// Função para iniciar o jogo
function startGame() {
    startButton.style.display = 'none'; // Esconde o botão de início
    pipe.style.animation = 'pipe-animation 1.5s infinite linear'; // Inicie a animação do cano
    gameStarted = true; // Defina a variável de controle para indicar que o jogo está em execução
}

startButton.addEventListener('click', () => {
    if (!gameStarted) {
        startGame();
    }
});

const jump = () => {
    if (!gameStarted) return; // Não permita saltos antes do início do jogo
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {
    if (!gameStarted) return; // Não execute o loop antes do início do jogo

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        pipe.style.animation = 'none';
        mario.style.bottom = `${pipePosition}px`;
        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.left = '50px';
        clearInterval(loop);
    }
}, 10);

document.addEventListener('keydown', jump);*/

const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const fim = document.querySelector('.fim');
const startButton = document.getElementById('start-button');
let gameStarted = false;
let gameEnded = false;

// Função para iniciar o jogo
function startGame() {
    startButton.style.display = 'none';
    pipe.style.animation = 'pipe-animation 1.5s infinite linear';
    gameStarted = true;
}

// Função para encerrar o jogo
function endGame() {
    gameEnded = true;
    pipe.style.animation = 'none';
    mario.style.bottom = '0'; // Define a posição inicial do Mario
    mario.src = './images/game-over.png';
    mario.style.width = '75px';
    mario.style.left = '50px';
    fim.style.display = 'block'; // Exibe a imagem de "fim" quando o jogo terminar
}

startButton.addEventListener('click', () => {
    if (!gameStarted && !gameEnded) {
        startGame();
    }
});

const jump = () => {
    if (!gameStarted || gameEnded) return;
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {
    if (!gameStarted || gameEnded) return;

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        endGame();
        clearInterval(loop);
    }
}, 10);

document.addEventListener('keydown', jump);