let wood = 0;
let stone = 0;
let experience = 0;
let level = 1;
let cooldowns = { chop: 0, mine: 0 };

// Function to handle chopping wood
function chop() {
    const now = Date.now();
    if (now >= cooldowns.chop) {
        const woodGathered = Math.floor(Math.random() * 10) + 1; // Random wood gathered
        wood += woodGathered;
        experience += 10; // Add experience
        cooldowns.chop = now + 5000; // 5 seconds cooldown

        levelUp();
        updateOutput(`Chopped ${woodGathered} wood!`);
    } else {
        updateOutput(`Chop is on cooldown. Wait ${(cooldowns.chop - now) / 1000} seconds.`);
    }
}

// Function to handle mining stone
function mine() {
    const now = Date.now();
    if (now >= cooldowns.mine) {
        const stoneGathered = Math.floor(Math.random() * 10) + 1; // Random stone gathered
        stone += stoneGathered;
        experience += 15; // Add experience
        cooldowns.mine = now + 7000; // 7 seconds cooldown

        levelUp();
        updateOutput(`Mined ${stoneGathered} stone!`);
    } else {
        updateOutput(`Mine is on cooldown. Wait ${(cooldowns.mine - now) / 1000} seconds.`);
    }
}

// Function to handle level-up
function levelUp() {
    if (experience >= level * 100) {
        level++;
        updateOutput(`Leveled up! You are now level ${level}.`);
    }
}

// Function to update the output
function updateOutput(message) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
        <p>${message}</p>
        <p>Wood: ${wood} | Stone: ${stone} | XP: ${experience} | Level: ${level}</p>
    `;
}
