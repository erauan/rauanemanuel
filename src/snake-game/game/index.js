import { gameboard, isOutsideBoard } from './board/index.js';
import { SNAKE_SPEED, draw as snakeDraw, update as snakeUpdate, getSnakeHead, hasSelfCollision as hasSnakeSelfCollision } from './snake/index.js';
import { draw as foodDraw, update as foodUpdate } from './food/index.js';
  

let lastTimeRender = 0;

let gameOver = false;

// current time -> miliseconds
function main(currentTime){

    if (checkGameOver()){
        if(confirm('Você perdeu o jogo')){
            window.location.reload();
        } else {
            window.requestAnimationFrame(main);
        }

        return;
    }

    window.requestAnimationFrame(main);

    const secondsSinceLastRender = ( currentTime - lastTimeRender ) / 1000;
    
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

    lastTimeRender = currentTime;

    update();

    draw();
}

function update() {
    gameboard.innerHTML = '';
    snakeUpdate();
    foodUpdate();
};

function draw() {
    snakeDraw();
    foodDraw();
};

function checkGameOver(){
    return isOutsideBoard(getSnakeHead()) || hasSnakeSelfCollision();
}

window.requestAnimationFrame(main)