class AppointmentButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.textContent = 'Jetzt <span>kostenlosen Termin</span> vereinbaren.';

    // Create the wrapper
    const wrapper = document.createElement("a");
    wrapper.setAttribute("class", "main-button");
    wrapper.setAttribute("href", "appointment.html");

    // Insert SVG
    wrapper.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/>
        <path d="M16 3v4"/>
        <path d="M8 3v4"/>
        <path d="M4 11h16"/>
        <path d="M8 14v4"/>
        <path d="M12 14v4"/>
        <path d="M16 14v4"/>
      </svg>${this.textContent}
    `;

    // Add styles
    const link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", "./styles/main-button.css")

    this.shadowRoot.append(link, wrapper);
  }
}

// Define the custom element
customElements.define("appointment-button", AppointmentButton);
