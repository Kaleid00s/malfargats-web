document.getElementById("login-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = this.querySelector("input[type='email']").value;
  localStorage.setItem("userEmail", email);

  document.querySelector(".login-container").style.display = "none";
  mostrarPinya(); // crida la funció que mostra els castellers
});

const usuaris = {
  "guillem@malfargats.cat": { nom: "Guillem", contrasenya: "castells123", posicio: "Baix" },
  "teixi@malfargats.cat": { nom: "Teixi", contrasenya: "faixa456", posicio: "Crossa" },
  "gaia@malfargats.cat": { nom: "Gaia", contrasenya: "enxaneta789", posicio: "Terça" }
};

const castellers = [
  { nom: "Capó Vent", posicio: "Vent" },
  { nom: "Guillem", posicio: "Baix" },
  { nom: "Pepo", posicio: "Lateral" },
  { nom: "Fonti", posicio: "Lateral" },
  { nom: "Lara", posicio: "Contrafort" },
  { nom: "Teixi", posicio: "Crossa" },
  { nom: "Olga", posicio: "Crossa" },
  { nom: "Martí", posicio: "Primeres" },
  { nom: "Isaac", posicio: "Agulla" },
  { nom: "Ganapia", posicio: "Segon" },
  { nom: "Gaia", posicio: "Terça" }
];

function iniciarSessio() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  if (usuaris[email] && usuaris[email].contrasenya === pass) {
    localStorage.setItem("usuari", JSON.stringify(usuaris[email]));
    document.getElementById("login").style.display = "none";
    document.getElementById("pinya").style.display = "block";
    mostrarPinya();
  } else {
    alert("Credencials incorrectes");
  }
}

function mostrarPinya() {
  const taula = document.getElementById("taulaPinya");
  const usuari = JSON.parse(localStorage.getItem("usuari"));
  taula.innerHTML = "";

  castellers.forEach(c => {
    const fila = document.createElement("tr");
    const remarcat = usuari && usuari.posicio === c.posicio;
    fila.innerHTML = `
      <td>${c.nom}</td>
      <td style="${remarcat ? 'background: yellow; font-weight: bold' : ''}">
        ${c.posicio}
      </td>
    `;
    taula.appendChild(fila);
  });
}

function tancarSessio() {
  localStorage.removeItem("usuari");
  document.getElementById("pinya").style.display = "none";
  document.getElementById("login").style.display = "block";
}
function mostrarPinya() {
  const user = localStorage.getItem("userEmail");

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

  const container = document.createElement("div");
  container.id = "pinya-container";
  document.body.appendChild(container);

  const centerX = 250;
  const centerY = 250;
  const radius = 180;

  castellers.forEach((c) => {
    const angleRad = (c.angle * Math.PI) / 180;
    const x = centerX + radius * Math.cos(angleRad) - 25;
    const y = centerY + radius * Math.sin(angleRad) - 25;

    const div = document.createElement("div");
    div.className = "casteller";
    if (c.nom.toLowerCase().includes("guillem")) {
      div.classList.add("self"); // destaca si ets tu
    }

    div.style.left = `${x}px`;
    div.style.top = `${y}px`;
    div.textContent = c.nom;

    container.appendChild(div);
  });
}

