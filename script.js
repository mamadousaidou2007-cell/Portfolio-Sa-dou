/* =========================================
   1. Menu hamburger (mobile)
   ========================================= */
const boutton = document.querySelector("button");
const liste = document.querySelector("nav ul");

boutton.addEventListener("click", function () {
  liste.classList.toggle("menu-ouvert");
});

/* =========================================
   2. Bouton "retour en haut"
   - apparaît après un certain scroll
   - au clic, remonte en haut de la page
   ========================================= */
const retourHaut = document.querySelector("#retour-haut");

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    retourHaut.classList.add("visible");
  } else {
    retourHaut.classList.remove("visible");
  }
});

retourHaut.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* =========================================
   3. Lien de navigation actif selon la section
      visible à l'écran pendant le scroll
   ========================================= */
const sections = document.querySelectorAll("main > section");
const liensNav = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", function () {
  let sectionActuelle = "";

  sections.forEach(function (section) {
    const positionHaut = section.offsetTop - 100; // petite marge avant le haut de la section
    const hauteur = section.offsetHeight;

    if (window.scrollY >= positionHaut && window.scrollY < positionHaut + hauteur) {
      sectionActuelle = section.getAttribute("id");
    }
  });

  liensNav.forEach(function (lien) {
    lien.classList.remove("actif");
    if (lien.getAttribute("href") === "#" + sectionActuelle) {
      lien.classList.add("actif");
    }
  });
});
