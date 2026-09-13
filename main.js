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
  { cat: "sport", label:"1", src: "walid.JPEG", pos: "center 20%" },
  { cat: "sport", label:"2", src: "mel.JPEG", pos: "center 20%" },
  { cat: "sport", label:"3", src: "sport-01.jpg", pos: "center 20%" },
  { cat: "sport", label:"4", src: "sport-02.jpg", pos: "center 15%" },
  { cat: "sport", label:"5", src: "sport-03.jpg", pos: "center 15%" },
  { cat: "sport", label:"6", src: "sport-04.jpg", pos: "center 20%" },
  { cat: "sport", label:"7", src: "sport-05.jpg", pos: "center 20%" },
  { cat: "sport", label:"8", src: "sport-06.jpg", pos: "center 15%" },
  { cat: "sport", label:"9", src: "sport-07.jpg", pos: "center 20%" },
  { cat: "sport", label:"10", src: "sport-08.jpg", pos: "center 20%" },
  { cat: "sport", label:"11", src: "sport-09.jpg", pos: "center 20%" },
  { cat: "sport", label:"12", src: "sport-10.jpg", pos: "center 15%" },
  { cat: "sport", label:"13", src: "sport-11.jpg", pos: "center 20%" },
  { cat: "sport", label:"14", src: "sport-12.jpg", pos: "center 15%" },
  { cat: "sport", label:"15", src: "sport-13.jpg", pos: "center 15%" },
  { cat: "sport", label:"16", src: "sport-14.jpg", pos: "center 20%" },
  { cat: "sport", label:"17", src: "sport-15.jpg", pos: "center 15%" },
  { cat: "sport", label:"18", src: "sport-16.jpg", pos: "center 20%" },

  { cat: "mma", label:"1", src: "mma-01.jpg", pos: "center 20%" },
  { cat: "mma", label:"2", src: "mma-02.jpg", pos: "center 20%" },
  { cat: "mma", label:"3", src: "mma-03.jpg", pos: "center 25%" },
  { cat: "mma", label:"4", src: "mma-04.jpg", pos: "center 20%" },
  { cat: "mma", label:"5", src: "mma-05.jpg", pos: "center 25%" },
  { cat: "mma", label:"8", src: "mma-08.jpg", pos: "center 25%" },
  { cat: "mma", label:"9", src: "shooting-04.jpg", pos: "center 25%" },
  { cat: "mma", label:"10", src: "shooting-05.jpg", pos: "center 25%" }, 
 
  { cat: "shooting", label:"1", src: "shooting-01.jpg", pos: "center 20%" },
  { cat: "shooting", label:"2", src: "shooting-02.jpg", pos: "center 20%" },
  { cat: "shooting", label:"3", src: "shooting-03.jpg", pos: "center 25%" },
  { cat: "shooting", label:"4", src: "shooting-04.jpg", pos: "center 25%" },
  { cat: "shooting", label:"5", src: "shooting-05.jpg", pos: "center 25%" },
  { cat: "shooting", label:"6", src: "shooting-06.jpg", pos: "center 25%" },
  { cat: "shooting", label:"7", src: "shooting-07.jpg", pos: "center 20%" },
  { cat: "shooting", label:"8", src: "shooting-08.jpg.jpeg", pos: "center 20%" },
  { cat: "shooting", label:"9", src: "shooting-09.jpg.jpeg", pos: "center 20%" },
  { cat: "shooting", label:"1", src: "mma-01.jpg", pos: "center 20%" },
  { cat: "shooting", label:"4", src: "mma-04.jpg", pos: "center 20%" },
  { cat: "shooting", label:"5", src: "mma-05.jpg", pos: "center 25%" },

  { cat: "mariage", label:"1", src: "mariage-01.jpg", pos: "center 20%" },
  { cat: "mariage", label:"2", src: "mariage-02.jpg", pos: "center 20%" },
  { cat: "mariage", label:"3", src: "mariage-03.jpg", pos: "center 25%" },
  { cat: "mariage", label:"4", src: "mariage-04.jpg", pos: "center 20%" },
  { cat: "mariage", label:"5", src: "mariage-05.jpg", pos: "center 20%" }
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
  lbCaption.textContent = "";
  lightbox.classList.add("is-open");
  document.body.style.overflow = "hidden";
}

function renderLightbox(){
  const item = PORTFOLIO_DATA[lbIndex];
  lbImg.src = item.src;
  lbImg.alt = item.label || "";
  lbCaption.textContent = "";
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
