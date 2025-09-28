document.querySelector("header.header").innerHTML = header;
document.querySelector("footer.footer").innerHTML = footer;

import header from "./templates/header.html?raw";
import footer from "./templates/footer.html?raw";

import "hamburgers/dist/hamburgers.css";
import "./styles/resets.css";
import "./styles/animations.css";
import "./styles/main-button.css";
import "./styles/career.css";
import "./styles/styles.css";


document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const firstname = params.get("firstname");
  if (firstname) {
    document.querySelector(".first-name").innerText = firstname;
  }
});
