(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(t){if(t.ep)return;t.ep=!0;const a=n(t);fetch(t.href,a)}})();const l=`\r
<nav class="main-nav" id="aside-main-nav">\r
    \r
    <a href="/" class="logo pos-fix-logo">\r
        <img src="./assets/SK-logo.svg" alt="Start in Krypto">\r
    </a>\r
\r
    <button class="hamburger hamburger--collapse" \r
        type="button" \r
        aria-label="Öffne das Menu" \r
        aria-expanded="false">\r
        <span class="hamburger-box">\r
            <span class="hamburger-inner"></span>\r
        </span>\r
    </button>\r
    \r
        \r
        <ul class="menu-list">\r
            <li>\r
                <a href="/#start" class="nav-link">\r
                    Start\r
                </a>\r
            </li>\r
            <li>\r
                <a href="/#dein-weg" class="nav-link">\r
                    Dein Weg\r
                </a>\r
            </li>\r
            <li>\r
                <a href="/#angebot" class="nav-link">\r
                    Angebot\r
                </a>\r
            </li>\r
            <li>\r
                <a href="/#uber-mich" class="nav-link">\r
                    Über mich\r
                </a>\r
            </li>\r
            <li>\r
                <a href="/#Rezensionen" class="nav-link">\r
                    Rezensionen\r
                </a>\r
            </li>\r
            <li>\r
                <a href="/#kontakt" class="nav-link">\r
                    Kontakt\r
                </a>\r
            </li>\r
            <li>\r
                <a class="main-button header-button" href="appointment.html" title="Termin">\r
                    <span class="visually-hidden">Jetzt kostenlosen Termin verinbaren</span>\r
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\r
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\r
                        <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"></path>\r
                        <path d="M16 3v4"></path>\r
                        <path d="M8 3v4"></path>\r
                        <path d="M4 11h16"></path>\r
                        <path d="M8 14v4"></path>\r
                        <path d="M12 14v4"></path>\r
                        <path d="M16 14v4"></path>\r
                    </svg> \r
                </a>\r
            </li>\r
    </ul>\r
</nav>`,c=`<nav>\r
    <a href="/" class="logo pos-fix-logo">\r
        <img src="./assets/SK-favicon.svg" alt="Start in Krypto">\r
    </a>\r
    \r
    <ul>\r
        <li>\r
            <a href="/impressum.html">Impressum</a>\r
        </li>\r
        <li>\r
            <a href="/datenschutz.html">Datenschutz</a>\r
        </li>\r
    </ul>\r
\r
    <ul class="social-media">\r
        <li>\r
            <a target="_blank" href="https://www.instagram.com/startinkrypto.de/">\r
                <img src="./assets/instagram.svg" alt="instagram">\r
            </a>\r
        </li>\r
        <li>\r
            <a target="_blank" href="https://x.com/startinkrypto">\r
                <img src="./assets/x.svg" alt="x">\r
            </a>\r
        </li>\r
    </ul>\r
</nav>\r
<span class="footer-copyright">© 2025 Start in Krypto - Dein Einstieg in die Krypto-Welt.</span>\r
`;function u(){document.querySelectorAll(".nav-link").forEach(e=>{e.addEventListener("click",()=>{o()})})}function o(){document.querySelector(".hamburger").classList.remove("pos-fix-hamburger"),document.querySelector(".hamburger").classList.remove("is-active"),document.querySelector(".menu-list").classList.remove("show-menu"),document.querySelector(".hamburger").setAttribute("aria-expanded","false"),document.querySelector(".hamburger").setAttribute("aria-label","Öffne das Menu")}function d(){document.querySelector(".logo").addEventListener("focus",()=>{o()})}function h(){document.querySelector(".hamburger").classList.toggle("is-active"),document.querySelector(".hamburger").classList.toggle("pos-fix-hamburger"),document.querySelector(".menu-list").classList.toggle("show-menu"),document.querySelector(".header").classList.remove("reveal"),document.querySelector(".header").classList.toggle("menu-open"),p(),m()}function m(){const r=document.querySelector(".hamburger"),e=r.getAttribute("aria-expanded")==="true";r.setAttribute("aria-expanded",!e)}function p(){const r=document.querySelector(".hamburger"),e=r.getAttribute("aria-label")==="Öffne das Menu";r.setAttribute("aria-label",e?"Schließe das Menu":"Öffne das Menu")}function f(){const r=document.querySelectorAll(".nav-link"),e=r[r.length-1];let n=!1;e.addEventListener("keydown",s=>{s.key==="Tab"&&s.shiftKey?n=!0:n=!1}),e.addEventListener("blur",()=>{n||o()})}function g(){document.querySelectorAll(".link").forEach(e=>{e.addEventListener("keydown",n=>{n.key==="Tab"&&n.shiftKey||((n.code==="Space"||n.key===" ")&&!n.shiftKey&&(n.preventDefault(),e.click(),o()),(n.key==="Enter"||n.code==="Enter")&&(console.log(n.code),o()))})})}function v(){const r=document.querySelector(".header");window.addEventListener("scroll",()=>{let e=!1;window.scrollY>50&&!e&&!r.classList.contains("menu-open")?(r.classList.add("reveal"),e=!0):window.scrollY===0&&(r.classList.remove("reveal"),e=!1)})}function b(){document.querySelector(".hamburger").addEventListener("click",()=>h()),u(),f(),g(),d(),v()}const y="/assets/main-button-CTR2caet.css";class k extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"});const e=document.createElement("a");e.className="main-button",e.href="appointment.html",e.innerHTML=`
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/>
        <path d="M16 3v4"/>
        <path d="M8 3v4"/>
        <path d="M4 11h16"/>
        <path d="M8 14v4"/>
        <path d="M12 14v4"/>
        <path d="M16 14v4"/>
      </svg>Jetzt <span>kostenlosen Termin</span> vereinbaren.
    `;const n=document.createElement("link");n.rel="stylesheet",n.href=y,this.shadowRoot.append(n,e)}}customElements.define("appointment-button",k);document.querySelector("header.header").innerHTML=l;document.querySelector("footer.footer").innerHTML=c;b();
