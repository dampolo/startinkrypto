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
      "Gemeinsam machen wir deinen ersten Krypto-Kauf – einfach und sicher.",
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
    servicesList.innerHTML += /*html*/`
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

renderServices();
