import { getInputCareerValue, submitInputCareerValue } from "./career";
import { openMenu, closeMenu, handleLastLinkFocus, handleSpaceClick, handleCloseMenuOnLogo, headerAnimation } from "./script";

export default function attachedEvents() {
    document.querySelector(".hamburger").addEventListener("click", () => openMenu())
    closeMenu();
    handleLastLinkFocus();
    handleSpaceClick();
    handleCloseMenuOnLogo();
    headerAnimation();

    if (document.querySelector("form")) {
    getInputCareerValue();
    submitInputCareerValue();
  }
}