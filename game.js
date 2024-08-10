let resources = {
    wood: 0,
    stone: 0
};
let hunger = 100;
let health = 100;
let day = true;
let weather = 'clear';
let turn = 0;

function updateStatus() {
    const output = document.getElementById('output');
    output.innerHTML = `
        <p>Wood: ${resources.wood}</p>
        <p>Stone: ${resources.stone}</p>
        <p>Hunger: ${hunger}%</p>
        <p>Health: ${health}%</p>
        <p>Time: ${day ? 'Day' : 'Night'}</p>
        <p>Weather: ${weather}</p>
        <p>Turn: ${turn}</p>
    `;
}

function performAction(action) {
    if (action === 'chop') {
        resources.wood += 10;
        hunger -= 5;
    } else if (action === 'mine') {
        resources.stone += 5;
        hunger -= 10;
    } else if (action === 'craft') {
        if (resources.wood >= 10 && resources.stone >= 5) {
            resources.wood -= 10;
            resources.stone -= 5;
            // Example crafting item
            alert('Crafted a basic tool!');
        } else {
            alert('Not enough resources to craft!');
        }
    }

    // Check if player has starved or is injured
    if (hunger <= 0) {
        alert("You have starved to death! Game Over.");
        resetGame();
    } else if (health <= 0) {
        alert("You have died from injuries! Game Over.");
        resetGame();
    } else {
        updateStatus();
    }
}

function nextTurn() {
    turn++;
    hunger -= 10;
    health -= 5;

    // Change day/night cycle
    day = !day;

    // Random weather effect
    const weatherOptions = ['clear', 'rainy', 'stormy'];
    weather = weatherOptions[Math.floor(Math.random() * weatherOptions.length)];

    // Weather effects
    if (weather === 'rainy') {
        hunger -= 5;
    } else if (weather === 'stormy') {
        health -= 10;
    }

    // Check if player has starved or is injured
    if (hunger <= 0) {
        alert("You have starved to death! Game Over.");
        resetGame();
    } else if (health <= 0) {
        alert("You have died from injuries! Game Over.");
        resetGame();
    } else {
        updateStatus();
    }
}

function resetGame() {
    resources = { wood: 0, stone: 0 };
    hunger = 100;
    health = 100;
    day = true;
    weather = 'clear';
    turn = 0;
    updateStatus();
}

// Initial status update
updateStatus();
