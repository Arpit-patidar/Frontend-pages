const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let box = 20;
let snake;
let direction;
let food;
let score;
let game;

// Start setup
function startGame() {
    snake = [{ x: 15 * box, y: 15 * box }];
    direction = "RIGHT";
    score = 0;

    food = randomFood();

    document.getElementById("score").innerText = score;
    document.getElementById("gameOver").classList.add("hidden");

    clearInterval(game);
    game = setInterval(draw, 200); // ✔ speed slow ki
}

// food random function
function randomFood() {
    return {
        x: Math.floor(Math.random() * (canvas.width / box)) * box,
        y: Math.floor(Math.random() * (canvas.height / box)) * box
    };
}

// Controls
document.addEventListener("keydown", e => {
    if (e.key === "ArrowLeft" && direction !== "RIGHT") direction = "LEFT";
    if (e.key === "ArrowUp" && direction !== "DOWN") direction = "UP";
    if (e.key === "ArrowRight" && direction !== "LEFT") direction = "RIGHT";
    if (e.key === "ArrowDown" && direction !== "UP") direction = "DOWN";
});

// Draw grid
function drawGrid() {
    ctx.strokeStyle = "gray";
    ctx.lineWidth = 1;

    for (let i = 0; i < canvas.width; i += box) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
        ctx.stroke();
    }

    for (let j = 0; j < canvas.height; j += box) {
        ctx.beginPath();
        ctx.moveTo(0, j);
        ctx.lineTo(canvas.width, j);
        ctx.stroke();
    }
}

// Draw game
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawGrid(); // ✔ box grid added

    // Draw food
    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, box, box);

    // Draw snake
    snake.forEach((s, i) => {
        ctx.fillStyle = i === 0 ? "lime" : "lightgreen";
        ctx.fillRect(s.x, s.y, box, box);
    });

    // Move snake head
    let head = { ...snake[0] };

    if (direction === "LEFT") head.x -= box;
    if (direction === "UP") head.y -= box;
    if (direction === "RIGHT") head.x += box;
    if (direction === "DOWN") head.y += box;

    // WALL WRAP
    if (head.x < 0) head.x = canvas.width - box;
    if (head.x >= canvas.width) head.x = 0;
    if (head.y < 0) head.y = canvas.height - box;
    if (head.y >= canvas.height) head.y = 0;

    // SELF HIT
    if (snake.some(p => p.x === head.x && p.y === head.y)) {
        endGame();
        return;
    }

    snake.unshift(head);

    // FOOD EAT
    if (head.x === food.x && head.y === food.y) {
        score++;
        document.getElementById("score").innerText = score;
        food = randomFood();
    } else {
        snake.pop();
    }
}

// GAME OVER
function endGame() {
    clearInterval(game);
    document.getElementById("gameOver").classList.remove("hidden");
}

// BUTTONS
document.getElementById("restartBtn").addEventListener("click", startGame);
document.getElementById("playAgainBtn").addEventListener("click", startGame);

// AUTO START
startGame();
