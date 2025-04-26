async function includeHTML() {
  const includeElements = document.querySelectorAll("[w3-include-html]");
  const errorActive = document.querySelector(".error");
  const errorType = document.querySelector(".error-type");

  for (let i = 0; i < includeElements.length; i++) {
    const element = includeElements[i];
    const file = element.getAttribute("w3-include-html");
    try {
      const resp = await fetch(file);
      if (resp.ok) {
        const html = await resp.text();
        element.innerHTML = html;
      } else {
        errorActive.classList.add("active")
        errorType.innerHTML = /*html*/ `<div>ERROR ${resp.status}</div>`;
      }
    } catch (error) {
      errorActive.classList.add("active")
      }
  }
}

includeHTML();


function init() {
  renderServices();
}

const services = [
  {
    title: "Vom Einstieg bis zum Ziel komplett erklärt",
    description:
      "Ich begleite dich Schritt für Schritt durch die Welt der Kryptowährungen.",
  },
  {
    title: "Einstieg in die wichtigsten Börsen",
    description:
      "Du lernst, wie du dich bei seriösen Krypto-Börsen anmeldest und dich zurechtfindest.",
  },
  {
    title: "Kauf deiner ersten Coins",
    description:
      "Gemeinsam machen wir deinen ersten Krypto-Kauf, einfach und sicher.",
  },
  {
    title: "Start mit deiner persönlichen Wallet",
    description:
      "Ich zeige dir, wie du eine sichere Wallet einrichtest und nutzt.",
  },
];

function renderServices() {
  const servicesList = document.querySelector(".road-lists");
  for (let i = 0; i < services.length; i++) {
    const service = services[i];
    servicesList.innerHTML += /*html*/ `
        <li>
          <img class="coin" src="./assets/coin.png" alt="coin">
          <div class="question-answer">
            <h2 class="question">${service.title}</h2>
            <p class="answer">${service.description}</p>
          </div>
        </li>
      `;
  }
}


function openMenu() {
  document.querySelector(".hamburger").classList.toggle("is-active")
  document.querySelector(".hamburger").classList.toggle("pos-fix-hamburger")
  document.querySelector(".menu-list").classList.toggle("show-menu")
}

function closeMenu(params) {
  document.querySelector(".hamburger").classList.remove("is-active")
  document.querySelector(".hamburger").classList.remove("pos-fix-hamburger")
  document.querySelector(".menu-list").classList.remove("show-menu")

  
}