
export function closeMenu() {
  const links = document.querySelectorAll(".nav-link");
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

export function handleCloseMenuOnLogo() {
  document.querySelector(".logo").addEventListener("focus", () => {
    handleCloseMenu()
  })
}

export function openMenu() {
    document.querySelector(".hamburger").classList.toggle("is-active");
    document.querySelector(".hamburger").classList.toggle("pos-fix-hamburger");
    document.querySelector(".menu-list").classList.toggle("show-menu");
    document.querySelector(".header").classList.remove("reveal");
    document.querySelector(".header").classList.toggle("menu-open");
    toggleAriaLabel();
    toggleAriaExpanded()
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


export function handleLastLinkFocus() {
   const links = document.querySelectorAll(".nav-link");  
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

export function handleSpaceClick() {
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

// Animate of header fade-in
export function headerAnimation() {
  const header = document.querySelector(".header");
  
  window.addEventListener("scroll", () => {
    let revealed = false;
    if (window.scrollY > 50 && !revealed && !header.classList.contains("menu-open")) {
      header.classList.add("reveal");
      revealed = true; // play animation only once
    } else if (window.scrollY === 0) {
      header.classList.remove("reveal");
      revealed = false;
    }
  });
}

export function getCurrentYear() {
  document.querySelector(".year").textContent = new Date().getFullYear();
}