document.addEventListener("DOMContentLoaded", () => {
    const ball = document.getElementById("ball");
    const counterDisplay = document.getElementById("counter");
    const gameArea = document.getElementById("gameArea");
    let counter = 0;

    // Función para mover la bola dentro del área de juego
    function moveBall() {
        const maxX = gameArea.clientWidth - ball.clientWidth;
        const maxY = gameArea.clientHeight - ball.clientHeight;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        ball.style.left = `${randomX}px`;
        ball.style.top = `${randomY}px`;
    }

    // Mueve la bola cuando se le hace clic
    ball.addEventListener("click", (event) => {
        event.stopPropagation(); // Evita errores con otros clics

        counter++;
        counterDisplay.textContent = counter;

        if (counter >= 100) {
            alert("🎉 ¡Ganaste! Has alcanzado 100 clics.");
            counter = 0;
            counterDisplay.textContent = counter;
        }

        moveBall();
    });

    // Posición inicial de la bola dentro del área de juego
    moveBall();
});
