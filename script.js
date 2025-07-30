// Castellers de prova
const castellers = [
  { nom: "Capó", posicio: "vent", angle: 0 },
  { nom: "Guillem", posicio: "baix", angle: 45 },
  { nom: "Pepo", posicio: "lateral", angle: 90 },
  { nom: "Fonti", posicio: "lateral", angle: 135 },
  { nom: "Lara", posicio: "contrafort", angle: 180 },
  { nom: "Teixi", posicio: "crossa", angle: 225 },
  { nom: "Olga", posicio: "crossa", angle: 270 },
  { nom: "Martí", posicio: "primeres", angle: 315 },
  { nom: "Isaac", posicio: "agulla", angle: 360 },
  { nom: "Ganapia", posicio: "segon", angle: 30 },
  { nom: "Gaia", posicio: "terça", angle: 60 }
];

// Centrar cada casteller en forma circular
const centerX = 250;
const centerY = 250;
const radius = 180;

const container = document.getElementById("pinya-container");

castellers.forEach((c) => {
  const angleRad = (c.angle * Math.PI) / 180;
  const x = centerX + radius * Math.cos(angleRad) - 25;
  const y = centerY + radius * Math.sin(angleRad) - 25;

  const div = document.createElement("div");
  div.className = "casteller";
  if (c.nom === "Guillem") div.classList.add("self"); // Exemple de casteller loguejat
  div.style.left = `${x}px`;
  div.style.top = `${y}px`;
  div.textContent = c.nom;

  container.appendChild(div);
});

