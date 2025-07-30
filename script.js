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
