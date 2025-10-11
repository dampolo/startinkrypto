// Import templates as strings
import header from "./templates/header.html?raw";
import footer from "./templates/footer.html?raw";
import attachedEvents from "./events.js";


import "hamburgers/dist/hamburgers.css";
import "./styles/resets.css";
import "./styles/animations.css";
import "./styles/main-button.css";
import "./styles/career.css";
import "./styles/styles.css";

import "./appointment-button.js";
import "./career.js";
import "./config.js";
import "./script.js";

document.querySelector("header.header").innerHTML = header;
document.querySelector("footer.footer").innerHTML = footer;
attachedEvents();
