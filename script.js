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
        errorActive.classList.add("active");
        errorType.innerHTML = /*html*/ `<div>ERROR ${resp.status}</div>`;
      }
    } catch (error) {
      errorActive.classList.add("active");
      errorType.innerHTML = /*html*/ `<div>ERROR ${error.message}</div>`;
    }
  }
  initEventListeners();
}

includeHTML();

function init() {
  renderServices();
}



const services = [
  {
    title: "Die wichtigsten Börsen",
    description:
      "Zusammen melden wir Dich bei seriösen Börsen an und ich zeige dir, wie du dich dort zurecht findest.",
  },
  {
    title: "Kauf deiner ersten Coins",
    description:
      "Gemeinsam machen wir deinen ersten Krypto-Kauf, einfach und sicher.",
  },
  {
    title: "Deine persönliche Wallet",
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
          <img width="55" height="55" class="coin" src="./assets/bitcoin-coin.svg" alt="">
          <div class="question-answer">
            <strong class="question">${service.title}</strong>
            <p class="answer">${service.description}</p>
          </div>
        </li>
      `;
  }
}

function initEventListeners() {
  openMenu();
  closeMenu();
  handleLastLinkFocus();
  handleSpaceClick();
  handleCloseMenuOnLogo();
}

function closeMenu() {
  const links = document.querySelectorAll(".link");

  links.forEach((link) => {
    link.addEventListener("click", () => {
      handleCloseMenu();
    });
  });
}

function handleCloseMenu() {
      document.querySelector(".hamburger").classList.remove("pos-fix-hamburger");
      document.querySelector(".hamburger").classList.remove("is-active");
      document.querySelector(".menu-list").classList.remove("show-menu");
      document.querySelector(".hamburger").setAttribute("aria-expanded", "false");
      document.querySelector(".hamburger").setAttribute("aria-label", "Öffne das Menu");
}

function handleCloseMenuOnLogo() {
  document.querySelector(".logo").addEventListener("focus", () => {
    handleCloseMenu()
  })
}

function openMenu() {
  document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".hamburger").classList.toggle("is-active");
    document.querySelector(".hamburger").classList.toggle("pos-fix-hamburger");
    document.querySelector(".menu-list").classList.toggle("show-menu");
    toggleAriaLabel();
    toggleAriaExpanded()
  });
}

function toggleAriaExpanded() {
  const hamburger = document.querySelector(".hamburger");
  const isExpanded = hamburger.getAttribute("aria-expanded") === "true";
  hamburger.setAttribute("aria-expanded", !isExpanded);
}

function toggleAriaLabel() {
  const hamburger = document.querySelector(".hamburger");
  const isOpen = hamburger.getAttribute("aria-label") === "Öffne das Menu";
  hamburger.setAttribute(
    "aria-label",
    isOpen ? "Schließe das Menu" : "Öffne das Menu"
  );
}


function handleLastLinkFocus() {
   const links = document.querySelectorAll(".link");  
   const lastLink = links[links.length - 1];

    let isShiftTab = false;

    lastLink.addEventListener("keydown", (event) => {
      if(event.key === "Tab" && event.shiftKey) {
        isShiftTab = true
      } else {
        isShiftTab = false
      }
    })

    lastLink.addEventListener("blur", () => {
      if(!isShiftTab) {
        handleCloseMenu();
      }
    })
}

function handleSpaceClick() {
  const links = document.querySelectorAll(".link");

  links.forEach(link => {
    link.addEventListener("keydown", (event) => {
      if (event.key === "Tab" && event.shiftKey) {
        return;
      }

      // If Space is pressed (without Shift), trigger click
      if ((event.code === "Space" || event.key === " ") && !event.shiftKey) {
        event.preventDefault(); // Prevent page scrolling
        link.click();
        handleCloseMenu();
      }

      // If Enter is pressed (without Shift+Tab)
      if (event.key === "Enter" || event.code === "Enter") {
        console.log(event.code);
        
        handleCloseMenu();

      }
    });
  });
}