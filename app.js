const players = [
    { name: 'Cristiano Ronaldo', position: 'Forward', club: 'Al-Nassr' },
    { name: 'Lionel Messi', position: 'Forward', club: 'Inter Miami' },
    { name: 'Neymar Jr', position: 'Forward', club: 'Al-Hilal' },
    { name: 'Vinisus Junior', position: 'Forward', club: 'Real Madrid' },
    { name: 'Kylian Mbappe', position: 'Forward', club: 'Real Madrid' },
    { name: 'Kevin De Bruyne', position: 'Midfielder', club: 'Man City' },
    { name: 'Erling Haaland', position: 'Forward', club: 'Man City' },
    { name: 'Luka Modric', position: 'Midfielder', club: 'Real Madrid' },
    { name: 'Virgil van Dijk', position: 'Defender', club: 'Liverpool' },
    { name: 'Mohamed Salah', position: 'Forward', club: 'Liverpool' },
    { name: 'Harry Kane', position: 'Forward', club: 'Bayern Munich' },
    { name: 'Karim Benzema', position: 'Forward', club: 'Al-Ittihad' },
    { name: 'Son Heung-min', position: 'Forward', club: 'Tottenham' },
];

let displayedPlayers = new Set();

function StartTable() {
    for (let i = 0; i < 4; i++) {
        addPlayerToTable(i);
        displayedPlayers.add(i);
    }
}
function addPlayerToTable(index) {
    const tableBody = document.querySelector('#playerTable tbody');
    const newRow = document.createElement('tr');
    const player = players[index];

    newRow.innerHTML = `
        <td>${tableBody.rows.length + 1}</td>
        <td>${player.name}</td>
        <td>${player.position}</td>
        <td>${player.club}</td>
    `;

    tableBody.appendChild(newRow);
}

function addPlayer() {
    if (displayedPlayers.size >= players.length) {
        alert("All players have been added!");
        return;
    }

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * players.length);
    } while (displayedPlayers.has(randomIndex));

    displayedPlayers.add(randomIndex);
    addPlayerToTable(randomIndex);
}


StartTable()