/* изучил код, убрал лишние комментарии, пересмотрел видео 3 раза, попробывал разные варианты
но так и не смог добиться того что требует задачи домашнего задания.
Либо я ничего не понял, либо неудачное время в такие дни для решения домашнего задания))))
В любом случае спасибо за курс.
Надеюсь получить хоть какие-нибудь комментарии к тому, что написал в коде, 
который не работает, и в конце концов разобраться позже с этой игрой, когда появится больше свободного времеи
*/



const GAME_STATUS_STARTED = 'started';
const GAME_STATUS_PAUSED = 'paused';
const GAME_STATUS_STOPPED = 'stopped';

const SNAKE_DIRECTION_UP = 'up';
const SNAKE_DIRECTION_DOWN = 'down';
const SNAKE_DIRECTION_LEFT = 'left';
const SNAKE_DIRECTION_RIGHT = 'right';


const config = {
    size: 20
};


const game = {
    getElement() {
        return document.getElementById('game');
    },


    start() {
        this.setGameStatus(GAME_STATUS_STARTED);

        board.render();
        snake.render();
        food.render();
    },

    /**
     * Функция выполняет паузу игры.
     */
    pause() {
        //  this.setGameStatus(GAME_STATUS_PAUSED);
        this.pauseGame = function () {
            if (currentState === GAME_STATUS_STARTED) {
                clearInterval(frameIntervalId);
                currentState = GAME_STATUS_PAUSED;
            }
        }
    },

    /**
     * Функция выполняет конец игры.
     */
    stop() {
        // this.setGameStatus(GAME_STATUS_STOPPED);
        if (position.top === getNextPosition()) {
            // Конец игры.
            GAME_STATUS_STOPPED = true
            break
        }
    },
    /* добавить сюда код */


    move(event) {
        let direction = null;
        switch (event.keyCode) {
            case 38:
                direction = SNAKE_DIRECTION_UP;
                break;
            case 40:
                direction = SNAKE_DIRECTION_DOWN;
                break;
            case 37:
                direction = SNAKE_DIRECTION_LEFT;
                break;
            case 39:
                direction = SNAKE_DIRECTION_RIGHT;
                break;
            default:
                return;
        }


        snake.setDirection(direction);
        const nextPosition = snake.getNextPosition();


        const foundFood = food.foundPosition(nextPosition);

        if (foundFood !== -1) {
            snake.setPosition(nextPosition, false);

            food.removeItem(foundFood);

            food.generateItem();

            food.render();
        } else {
            snake.setPosition(nextPosition);
        }
        snake.render();
    },


    setGameStatus(status) {
        const element = game.getElement();

        element.classList.remove(GAME_STATUS_STARTED, GAME_STATUS_PAUSED, GAME_STATUS_STOPPED);
        element.classList.add(status);
    }
};

const board = {

    getElement() {
        return document.getElementById('board');
    },


    render() {
        const board = this.getElement();

        for (let i = 0; i < config.size ** 2; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.top = Math.trunc(i / config.size);
            cell.dataset.left = i % config.size;

            board.appendChild(cell);
        }
    }
};


const cells = {



    getElements() {
        return document.getElementsByClassName('cell');
    },


    renderItems(coordinates, className) {
        const cells = this.getElements();

        for (let cell of cells) {
            cell.classList.remove(className);
        }

        for (let coordinate of coordinates) {
            const cell = document.querySelector(`.cell[data-top="${coordinate.top}"][data-left="${coordinate.left}"]`);
            cell.classList.add(className);
        }
    }
};


const snake = {
    direction: SNAKE_DIRECTION_RIGHT,
    parts: [
        { top: 0, left: 0 },
        { top: 0, left: 1 },
        { top: 0, left: 2 },
    ],

    setDirection(direction) {
        if (this.direction === SNAKE_DIRECTION_UP && direction === SNAKE_DIRECTION_DOWN
            || this.direction === SNAKE_DIRECTION_DOWN && direction === SNAKE_DIRECTION_UP
            || this.direction === SNAKE_DIRECTION_LEFT && direction === SNAKE_DIRECTION_RIGHT
            || this.direction === SNAKE_DIRECTION_RIGHT && direction === SNAKE_DIRECTION_LEFT) {
            return;
        }

        this.direction = direction;
    },


    getNextPosition() {
        const position = { ...this.parts[this.parts.length - 1] };
        switch (this.direction) {
            case SNAKE_DIRECTION_UP:
                position.top -= 1;
                break;
            case SNAKE_DIRECTION_DOWN:
                position.top += 1;
                break;
            case SNAKE_DIRECTION_LEFT:
                position.left -= 1;
                break;
            case SNAKE_DIRECTION_RIGHT:
                position.left += 1;
                break;
        }

        if (position.top === -1) {
            position.top = config.size - 1;
        } else if (position.top > config.size - 1) {
            position.top = 0;
        }


        if (position.left === -1) {
            position.left = config.size - 1;
        } else if (position.left > config.size - 1) {
            position.left = 0;
        }

        return position;
    },


    setPosition(position, shift = true) {
        if (shift) {
            this.parts.shift();
        }
        this.parts.push(position);
    },


    render() {
        cells.renderItems(this.parts, 'snake');
    }
};


const food = {


    items: [
        { top: 5, left: 5 },
        { top: 1, left: 2 },
        { top: 8, left: 6 }
    ],


    foundPosition(snakePosition) {

        return this.items.findIndex((item) =>
            item.top === snakePosition.top && item.left === snakePosition.left
        );
    },


    removeItem(foundPosition) {
        this.items.splice(foundPosition, 1);
    },


    generateItem() {
        const newItem = {
            top: getRandomNumber(0, config.size - 1),
            left: getRandomNumber(0, config.size - 1)
        };

        this.items.push(newItem);
    },


    render() {
        cells.renderItems(this.items, 'food');
    }
};


function init() {
    const startButton = document.getElementById('button-start');
    const pauseButton = document.getElementById('button-pause');
    const stopButton = document.getElementById('button-stop');

    startButton.addEventListener('click', game.start.bind(game));
    pauseButton.addEventListener('click', game.pause.bind(game));
    stopButton.addEventListener('click', game.stop.bind(game));

    window.addEventListener('keydown', game.move);
}


function getRandomNumber(min, max) {
    return Math.trunc(Math.random() * (max - min) + min);
}

window.addEventListener('load', init);
