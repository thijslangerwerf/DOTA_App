let persoon = {
  naam: "John",
  leeftijd: 30,
  beroep: "Programmeur",
  hobbys:
  {
    sport: "Voetbal",
    muziek: "Gitaar",
    overige: "Scouting",
  }
};

console.log(persoon);


console.log(persoon.naam); // Toegang via puntnotatie
console.log(persoon["leeftijd"]); // Toegang via bracketnotatie
console.log(persoon.hobbys.muziek); // Toegang tot geneste objecten