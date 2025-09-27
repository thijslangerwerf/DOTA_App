//button shananigans
document.getElementById('updateButton').addEventListener
('click', async () => 
    {
    const matchId = document.getElementById('matchIdInput').value;
    const container = document.getElementById('matchResults');
    

    const players = await matchOphalen(matchId);

    for (const player of players)
        {
        const heroName = await fetchDataHeroes(player.hero_id);
        const p = document.createElement('p');
        p.textContent = `${heroName} heeft deze pot ${player.kills} gemaakt.`;
        container.appendChild(p);
        }
        const idP =document.createElement('p');
        idP.textContent = `${matchId}`
        container.innerHTML = `oi`;

    }



)
