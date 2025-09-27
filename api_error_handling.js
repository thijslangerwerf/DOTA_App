async function fetchDataHeroes(hero_id) //Haal alle heroes inclusief namen op en zoek de hero met het opgegeven hero_id
{
  try {
    let response = await fetch(`https://api.opendota.com/api/heroes/`);
    if (!response.ok) throw new Error('Netwerkrespons was niet ok');
    let heroes = await response.json();
let outputHero = heroes.find(heroe => heroe.id === hero_id); //Zoekt in een array van alle spelers, naar de speler met het opgegeven hero_id
if (outputHero)
{
return outputHero.localized_name;
}
else
{
    return "Onbekende hero";
}

  } catch (error) {
    console.log("KAPOT!", error);
    return "Onbekende hero";
  }
}
   
async function matchOphalen(matchId) //Match ophalen met een bepaald ID
{
    try {
    let response = await fetch(`https://api.opendota.com/api/matches/${matchId}`);
    if (!response.ok) {
      throw new Error('Netwerkrespons was niet ok');
    }
    let data = await response.json();
    const container = document.getElementById('matchResults');
    container.innerHTML = ''; // leeg de container eerst

    
    for (const player of data.players) {
    const heroName = await fetchDataHeroes(player.hero_id);
    const p = document.createElement('p');
    p.textContent = `Speler ${heroName} heeft ${player.kills} gemaakt.`;
    container.appendChild(p);
    }

  } catch (error) {
    console.log("Er is een fout opgetreden:", error);
  }
}
    matchOphalen(7123456789);

    
    
