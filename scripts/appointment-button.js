import { LitElement, css, html } from "lit";

class AppointmentButton extends LitElement {
  // Define scoped styles right with your component, in plain CSS
  static styles = [
      css`
    .contact-appointment svg path {
      color: #000000;
      transition: var(--first-transition);
    }

    .contact-appointment {
      background: linear-gradient(180deg, #d6a553, #8f5907);
      color: #000000;
      border-radius: var(--border-radius);
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.5rem;
      transition: var(--first-transition);
      width: fit-content;
      gap: 0.5rem;
      text-decoration: none
    }

    .contact-appointment:focus-visible {
      outline: var(--focus);
    }

    .contact-content .contact-appointment {
    margin: 2rem;
    }

    .contact-appointment:hover {
    color: #ffff;
    }

    .contact-appointment:hover svg path {
    color: #ffff;
    }

    .contact-appointment svg {
    min-width: 25px;
    min-height: 25px;
    }

    .contact-appointment span {
    display: contents;
    font-weight: bold;
    }
    `
    ];

  render() {
    return html`
        <a class="contact-appointment" href="appointment.html">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-calendar-month"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M16 3v4"/><path d="M8 3v4"/><path d="M4 11h16"/><path d="M8 14v4"/><path d="M12 14v4"/><path d="M16 14v4"/></svg>
                        Jetzt <span>kostenlosen Termin</span> vereinbaren.
                </a> 
    `;
  }
}
customElements.define("appointment-button", AppointmentButton);
