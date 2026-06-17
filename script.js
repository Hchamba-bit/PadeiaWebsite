const body = document.body;
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".main-nav");
const currentPage = window.location.pathname.split("/").pop() || "index.html";

if (nav) {
  nav.innerHTML = `
    <a href="index.html">Accueil</a>
    <a href="index.html#nos-solutions">Nos solutions</a>
    <a href="ressources.html">Actualités</a>
    <a class="nav-cta" href="contact.html">Contacts</a>
  `;
}

const modulesSection = document.querySelector(".modules-section");
if (modulesSection && !modulesSection.id) {
  modulesSection.id = "nos-solutions";
}

const heroChecks = document.querySelector(".hero-checks");
if (currentPage === "index.html" && heroChecks) {
  heroChecks.innerHTML = `
    <li><a href="padeia-edu.html">PADEIA EDU pour institutions et PsyEN</a></li>
    <li><a href="padeia-lib.html">PADEIA LIB pour cabinets libéraux</a></li>
    <li><a href="padeia-rdv.html">PADEIA RDV pour rendez-vous en ligne</a></li>
  `;
}

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = body.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      body.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

document.querySelectorAll(".main-nav a").forEach((link) => {
  const href = link.getAttribute("href") || "";
  const targetPage = href.split("#")[0];
  const isCurrentPage = targetPage === currentPage || (!targetPage && currentPage === "index.html");
  const isSolutionsAnchor = href.includes("#nos-solutions") && currentPage === "index.html" && window.location.hash === "#nos-solutions";

  if (isCurrentPage || isSolutionsAnchor) {
    link.classList.add("active");
    link.setAttribute("aria-current", "page");
  }
});
