import {
  openMenu,
  closeMenu,
  handleLastLinkFocus,
  handleSpaceClick,
  handleCloseMenuOnLogo,
  headerAnimation,
  getCurrentYear
} from "./script";

export default function attachedEvents() {
  document
    .querySelector(".hamburger")
    .addEventListener("click", () => openMenu());
  closeMenu();
  handleLastLinkFocus();
  handleSpaceClick();
  handleCloseMenuOnLogo();
  headerAnimation();
  getCurrentYear();
}
