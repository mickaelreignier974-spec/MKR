/* =========================================================
   MKR — site de Mickaël Reignier, photographe
   ========================================================= */

/* ---------- 1. Données du portfolio ----------
   Remplacez "src" par le chemin réel de vos photos
   (ex: "rugby-01.jpg") pour qu'elles s'affichent
   à la place des vignettes de démonstration.
   "size: tall" donne une vignette plus verticale ; sans "size",
   la vignette prend le cadrage portrait standard. */
const PORTFOLIO_DATA = [
  { cat: "sport", label: "Portrait noir et blanc, regard vers le sol", src: "sport-01.jpg", pos: "center 20%" },
  { cat: "sport", label: "Frappe en pleine course", src: "sport-02.jpg", pos: "center 15%" },
  { cat: "sport", label: "Regard concentré — maillot CMA CGM", src: "sport-03.jpg", pos: "center 15%" },
  { cat: "sport", label: "Duel aérien", src: "sport-04.jpg", pos: "center 20%" },
  { cat: "sport", label: "Fin de match, crampons à la main", src: "sport-05.jpg", pos: "center 20%" },
  { cat: "sport", label: "Sortie de balle — maillot CMA CGM", src: "sport-06.jpg", pos: "center 15%" },
  { cat: "sport", label: "Concentration avant la mêlée", src: "sport-07.jpg", pos: "center 20%" },
  { cat: "sport", label: "Accolade, noir et blanc", src: "sport-08.jpg", pos: "center 20%" },
  { cat: "sport", label: "Face-à-face avant la mêlée", src: "sport-09.jpg", pos: "center 20%" },
  { cat: "sport", label: "Contrôle en pleine course", src: "sport-10.jpg", pos: "center 15%" },
  { cat: "sport", label: "Profil, lumière du soir", src: "sport-11.jpg", pos: "center 20%" },
  { cat: "sport", label: "Portrait avant-match, coucher de soleil", src: "sport-12.jpg", pos: "center 15%" },
  { cat: "sport", label: "Émotion, noir et blanc", src: "sport-13.jpg", pos: "center 15%" },
  { cat: "sport", label: "Portrait après-match", src: "sport-14.jpg", pos: "center 20%" },
  { cat: "sport", label: "Pause hydratation — n°10", src: "sport-15.jpg", pos: "center 15%" },
  { cat: "sport", label: "Profil — maillot CMA CGM", src: "sport-16.jpg", pos: "center 20%" },

  { cat: "mma", label: "Profil, dos tourné vers la forêt", src: "mma-01.jpg", pos: "center 20%" },
  { cat: "mma", label: "Garde haute sur le rocher", src: "mma-02.jpg", pos: "center 20%" },
  { cat: "mma", label: "Saut au-dessus du rocher", src: "mma-03.jpg", pos: "center 25%" },
  { cat: "mma", label: "Sous la voûte de pierre", src: "mma-04.jpg", pos: "center 20%" },
  { cat: "mma", label: "Silhouette dans la voûte", src: "mma-05.jpg", pos: "center 25%" },
  { cat: "mma", label: "Silhouette de dos — voûte de pierre", src: "mma-06.jpg", pos: "center 30%" },
  { cat: "mma", label: "Garde dans l'ombre", src: "mma-07.jpg", pos: "center 25%" },
  { cat: "mma", label: "Profil, gants de combat", src: "mma-08.jpg", pos: "center 25%" },
  { cat: "mma", label: "Garde haute sur le conteneur", src: "shooting-04.jpg", pos: "center 25%" },

  { cat: "shooting", label: "Portrait nocturne, bonnet blanc", src: "shooting-01.jpg", pos: "center 20%" },
  { cat: "shooting", label: "Duo, ceinture de champion", src: "shooting-02.jpg", pos: "center 20%" },
  { cat: "shooting", label: "Noir et blanc — conteneur & Mercedes", src: "shooting-03.jpg", pos: "center 25%" },
  { cat: "shooting", label: "jsp", src: "shooting-04.jpg", pos: "center 25%" },
  { cat: "shooting", label: "Silhouette sur le conteneur, noir et blanc", src: "shooting-05.jpg", pos: "center 25%" },
  { cat: "shooting", label: "Shooting équipe — terrain", src: "shooting-06.jpg", pos: "center 25%" },
  { cat: "shooting", label: "Shooting équipe — devant la fresque", src: "shooting-07.jpg", pos: "center 20%" },
  { cat: "shooting", label: "jen", src: "shooting-08.jpg.jpeg", pos: "center 20%" },
  { cat: "shooting", label: "jen1", src: "shooting-09.jpg.jpeg", pos: "center 20%" },
 
  { cat: "mariage", label: "Cortège sous les ombrelles", src: "mariage-01.jpg", pos: "center 20%" },
  { cat: "mariage", label: "Regards, noir et blanc", src: "mariage-02.jpg", pos: "center 20%" },
  { cat: "mariage", label: "Portrait — lunettes miroir", src: "mariage-03.jpg", pos: "center 25%" },
  { cat: "mariage", label: "Sourire", src: "mariage-04.jpg", pos: "center 20%" },
  { cat: "mariage", label: "Petite fille", src: "mariage-05.jpg", pos: "center 20%" },
];

/* ---------- 2. Rendu du portfolio ---------- */
function renderPortfolio(){
  const sheet = document.getElementById("proofSheet");
  sheet.innerHTML = "";
  PORTFOLIO_DATA.forEach((item, i) => {
    const el = document.createElement("div");
    el.className = "proof-sheet__item";
    if (item.size) el.classList.add(`proof-sheet__item--${item.size}`);
    el.dataset.cat = item.cat;
    el.dataset.index = i;

    const wrap = document.createElement("div");
    wrap.className = "ph-img";
    if (item.src){
      const img = document.createElement("img");
      img.src = item.src;
      img.alt = item.label || "";
      img.loading = "lazy";
      img.style.objectPosition = item.pos || "center";
      wrap.appendChild(img);
    } else {
      wrap.dataset.ph = "Photo à remplacer";
    }

    
    el.appendChild(wrap);
   
    if (item.src){
      el.addEventListener("click", () => openLightbox(i));
    }
    sheet.appendChild(el);
  });
}

function applyFilter(filter){
  document.querySelectorAll(".proof-sheet__item").forEach(el => {
    el.classList.toggle("is-hidden", filter !== "tous" && el.dataset.cat !== filter);
  });
  document.querySelectorAll(".filter").forEach(btn => {
    btn.classList.toggle("is-active", btn.dataset.filter === filter);
  });
}

/* ---------- 2bis. Visionneuse plein écran (lightbox) ----------
   Deux modes :
   - mode "portfolio" : ouverte depuis une vignette, avec flèches
     précédent/suivant pour parcourir les photos visibles.
   - mode "single" : ouverte depuis une photo isolée (accueil, à propos)
     recadrée sur la page ; permet simplement de voir l'image en entier,
     sans navigation. */
const lightbox = document.createElement("div");
lightbox.className = "lightbox";
lightbox.innerHTML = `
  <button class="lightbox__close" aria-label="Fermer">&times;</button>
  <button class="lightbox__nav lightbox__nav--prev" aria-label="Photo précédente">&#8249;</button>
  <img class="lightbox__img" alt="">
  <button class="lightbox__nav lightbox__nav--next" aria-label="Photo suivante">&#8250;</button>
  <span class="lightbox__caption"></span>
`;
document.body.appendChild(lightbox);

const lbImg = lightbox.querySelector(".lightbox__img");
const lbCaption = lightbox.querySelector(".lightbox__caption");
let lbIndex = 0;
let lbSingleMode = false;

function visibleIndexes(){
  const visible = [];
  document.querySelectorAll(".proof-sheet__item").forEach(el => {
    if (!el.classList.contains("is-hidden")){
      const idx = Number(el.dataset.index);
      if (PORTFOLIO_DATA[idx] && PORTFOLIO_DATA[idx].src) visible.push(idx);
    }
  });
  return visible;
}

function openLightbox(index){
  lbSingleMode = false;
  lightbox.classList.remove("lightbox--single");
  lbIndex = index;
  renderLightbox();
  lightbox.classList.add("is-open");
  document.body.style.overflow = "hidden";
}

/* Ouvre la visionneuse sur une image isolée (photo d'accueil, portrait
   à propos, etc.) sans les flèches de navigation. */
function openSingleImage(src, caption){
  lbSingleMode = true;
  lightbox.classList.add("lightbox--single");
  lbImg.src = src;
  lbImg.alt = caption || "";
  lbCaption.textContent = caption || "";
  lightbox.classList.add("is-open");
  document.body.style.overflow = "hidden";
}

function renderLightbox(){
  const item = PORTFOLIO_DATA[lbIndex];
  lbImg.src = item.src;
  lbImg.alt = item.label || "";
  lbCaption.textContent = item.label || "";
}

function closeLightbox(){
  lightbox.classList.remove("is-open");
  document.body.style.overflow = "";
}

function stepLightbox(dir){
  if (lbSingleMode) return;
  const visible = visibleIndexes();
  if (!visible.length) return;
  const pos = visible.indexOf(lbIndex);
  const nextPos = (pos + dir + visible.length) % visible.length;
  lbIndex = visible[nextPos];
  renderLightbox();
}

lightbox.querySelector(".lightbox__close").addEventListener("click", closeLightbox);
lightbox.querySelector(".lightbox__nav--prev").addEventListener("click", () => stepLightbox(-1));
lightbox.querySelector(".lightbox__nav--next").addEventListener("click", () => stepLightbox(1));
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});
window.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("is-open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowRight") stepLightbox(1);
  if (e.key === "ArrowLeft") stepLightbox(-1);
});

/* ---------- 2ter. Photos isolées cliquables (accueil, à propos) ----------
   Toute image portant la classe "is-clickable" s'ouvre en grand au clic,
   utile puisque ces photos sont recadrées sur la page. */
function initClickToEnlarge(){
  document.querySelectorAll(".is-clickable").forEach(el => {
    const img = el.querySelector("img");
    if (!img) return;
    el.addEventListener("click", () => openSingleImage(img.currentSrc || img.src, img.alt));
  });
}

/* ---------- 3. Navigation entre les "pages" ---------- */
const views = document.querySelectorAll(".view");
const navLinks = document.querySelectorAll(".nav__links a");

function setActiveNav(target){
  navLinks.forEach(a => a.classList.toggle("is-active", a.dataset.target === target));
}

function showView(target){
  views.forEach(v => {
    const isTarget = v.dataset.view === target;
    v.classList.toggle("active", isTarget);
    v.classList.toggle("is-visible", isTarget);
  });
  setActiveNav(target);
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
}

function goTo(target, filter){
  if (target === document.querySelector(".view.active")?.dataset.view && !filter) return;
  playTransition(() => {
    showView(target);
    if (filter) applyFilter(filter);
  });
}

document.querySelectorAll(".filter").forEach(btn => {
  btn.addEventListener("click", () => applyFilter(btn.dataset.filter));
});

document.querySelectorAll("[data-target]").forEach(el => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    goTo(el.dataset.target, el.dataset.filter);
    document.getElementById("navLinks").classList.remove("is-open");
  });
});

window.addEventListener("popstate", () => {
  const target = (location.hash || "#accueil").replace("#", "");
  goTo(views[0] ? target : "accueil");
});

/* menu mobile */
const navToggle = document.getElementById("navToggle");
const navLinksEl = document.getElementById("navLinks");
navToggle.addEventListener("click", () => {
  const open = navLinksEl.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(open));
});

/* ---------- 4. Transition entre les pages (fondu) ---------- */
const FADE_DURATION = 260; // doit correspondre à la durée CSS (.view)

function playTransition(onMid){
  const current = document.querySelector(".view.active");
  if (!current){ onMid(); return; }

  current.classList.remove("is-visible");
  window.setTimeout(() => {
    onMid();
    const next = document.querySelector(".view.active");
    if (next){
      // force un reflow pour que la transition d'entrée se déclenche
      void next.offsetWidth;
      next.classList.add("is-visible");
    }
  }, FADE_DURATION);
}

/* ---------- 6. Init ---------- */
document.getElementById("year").textContent = new Date().getFullYear();
renderPortfolio();
applyFilter("tous");
initClickToEnlarge();

const startTarget = (location.hash || "#accueil").replace("#", "");
if (document.querySelector(`.view[data-view="${startTarget}"]`)){
  showView(startTarget);
} else {
  showView("accueil");
}
