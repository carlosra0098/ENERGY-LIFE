// Contadores de Puntos
let points = [0, 0, 0, 0]; // Array para almacenar los puntos de los 4 contadores

function changePoints(counterIndex, value) {
    points[counterIndex] += value;
    updatePoints(counterIndex);
}

function updatePoints(counterIndex) {
    document.getElementById(`points-${counterIndex}`).textContent = points[counterIndex];
}

// Dado
function rollDice() {
    const diceResult = Math.floor(Math.random() * 6) + 1;
    const diceImage = document.getElementById('diceImage');
    diceImage.src = `img/${diceResult}.png`; // Cambia la imagen según el resultado
}