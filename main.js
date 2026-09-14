/* =========================================================
   MKR — site de Mickaël Reignier, photographe
   MAIN.JS — VERSION CORRIGÉE
   ========================================================= */


/* =========================================================
   1. DONNÉES DU PORTFOLIO
   ========================================================= */

const PORTFOLIO_DATA = [

  /* ---------- SPORT ---------- */

  {
    cat: "sport",
    label: "1",
    src: "WLD.JPEG",
    pos: "center 20%"
  },

  {
    cat: "sport",
    label: "2",
    src: "melv.JPEG",
    pos: "center 20%"
  },

  {
    cat: "sport",
    label: "3",
    src: "sport-01.jpg",
    pos: "center 20%"
  },

  {
    cat: "sport",
    label: "4",
    src: "sport-02.jpg",
    pos: "center 15%"
  },

  {
    cat: "sport",
    label: "5",
    src: "sport-03.jpg",
    pos: "center 15%"
  },

  {
    cat: "sport",
    label: "6",
    src: "sport-04.jpg",
    pos: "center 20%"
  },

  {
    cat: "sport",
    label: "7",
    src: "sport-05.jpg",
    pos: "center 20%"
  },

  {
    cat: "sport",
    label: "8",
    src: "sport-06.jpg",
    pos: "center 15%"
  },

  {
    cat: "sport",
    label: "9",
    src: "sport-07.jpg",
    pos: "center 20%"
  },

  {
    cat: "sport",
    label: "10",
    src: "sport-08.jpg",
    pos: "center 20%"
  },

  {
    cat: "sport",
    label: "11",
    src: "sport-09.jpg",
    pos: "center 20%"
  },

  {
    cat: "sport",
    label: "12",
    src: "sport-10.jpg",
    pos: "center 15%"
  },

  {
    cat: "sport",
    label: "13",
    src: "sport-11.jpg",
    pos: "center 20%"
  },

  {
    cat: "sport",
    label: "14",
    src: "sport-12.jpg",
    pos: "center 15%"
  },

  {
    cat: "sport",
    label: "15",
    src: "sport-13.jpg",
    pos: "center 15%"
  },

  {
    cat: "sport",
    label: "16",
    src: "sport-14.jpg",
    pos: "center 20%"
  },

  {
    cat: "sport",
    label: "17",
    src: "sport-15.jpg",
    pos: "center 15%"
  },

  {
    cat: "sport",
    label: "18",
    src: "sport-16.jpg",
    pos: "center 20%"
  },


  /* ---------- MMA / BLEED ---------- */

  {
    cat: "mma",
    label: "1",
    src: "mma-01.jpg",
    pos: "center 20%"
  },

  {
    cat: "mma",
    label: "2",
    src: "mma-02.jpg",
    pos: "center 20%"
  },

  {
    cat: "mma",
    label: "3",
    src: "mma-03.jpg",
    pos: "center 25%"
  },

  {
    cat: "mma",
    label: "4",
    src: "mma-04.jpg",
    pos: "center 20%"
  },

  {
    cat: "mma",
    label: "5",
    src: "mma-05.jpg",
    pos: "center 25%"
  },

  {
    cat: "mma",
    label: "8",
    src: "mma-08.jpg",
    pos: "center 25%"
  },

  {
    cat: "mma",
    label: "9",
    src: "shooting-04.jpg",
    pos: "center 25%"
  },

  {
    cat: "mma",
    label: "10",
    src: "shooting-05.jpg",
    pos: "center 25%"
  },


  /* ---------- SHOOTING ---------- */

  {
    cat: "shooting",
    label: "1",
    src: "shooting-01.jpg",
    pos: "center 20%"
  },

  {
    cat: "shooting",
    label: "2",
    src: "shooting-02.jpg",
    pos: "center 20%"
  },

  {
    cat: "shooting",
    label: "3",
    src: "shooting-03.jpg",
    pos: "center 25%"
  },

  {
    cat: "shooting",
    label: "4",
    src: "shooting-04.jpg",
    pos: "center 25%"
  },

  {
    cat: "shooting",
    label: "5",
    src: "shooting-05.jpg",
    pos: "center 25%"
  },

  {
    cat: "shooting",
    label: "6",
    src: "shooting-06.jpg",
    pos: "center 25%"
  },

  {
    cat: "shooting",
    label: "7",
    src: "shooting-07.jpg",
    pos: "center 20%"
  },

  {
    cat: "shooting",
    label: "8",
    src: "shooting-08.jpg.jpeg",
    pos: "center 20%"
  },

  {
    cat: "shooting",
    label: "9",
    src: "shooting-09.jpg.jpeg",
    pos: "center 20%"
  },

  {
    cat: "shooting",
    label: "1",
    src: "mma-01.jpg",
    pos: "center 20%"
  },

  {
    cat: "shooting",
    label: "4",
    src: "mma-04.jpg",
    pos: "center 20%"
  },

  {
    cat: "shooting",
    label: "5",
    src: "mma-05.jpg",
    pos: "center 25%"
  },


  /* ---------- MARIAGE ---------- */

  {
    cat: "mariage",
    label: "1",
    src: "mariage-01.jpg",
    pos: "center 20%"
  },

  {
    cat: "mariage",
    label: "2",
    src: "mariage-02.jpg",
    pos: "center 20%"
  },

  {
    cat: "mariage",
    label: "3",
    src: "mariage-03.jpg",
    pos: "center 25%"
  },

  {
    cat: "mariage",
    label: "4",
    src: "mariage-04.jpg",
    pos: "center 20%"
  },

  {
    cat: "mariage",
    label: "5",
    src: "mariage-05.jpg",
    pos: "center 20%"
  }

];


/* =========================================================
   2. RENDU DU PORTFOLIO
   ========================================================= */

function renderPortfolio(){

  const sheet = document.getElementById("proofSheet");

  if (!sheet) return;

  sheet.innerHTML = "";

  PORTFOLIO_DATA.forEach((item, i) => {

    const el = document.createElement("div");

    el.className = "proof-sheet__item";

    if (item.size){
      el.classList.add(`proof-sheet__item--${item.size}`);
    }

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

      el.addEventListener("click", () => {

        openLightbox(i);

      });

    }


    sheet.appendChild(el);

  });

}


/* =========================================================
   3. FILTRES PORTFOLIO
   ========================================================= */

function applyFilter(filter){

  document.querySelectorAll(".proof-sheet__item").forEach(el => {

    const hidden =
      filter !== "tous" &&
      el.dataset.cat !== filter;

    el.classList.toggle("is-hidden", hidden);

  });


  document.querySelectorAll(".filter").forEach(btn => {

    btn.classList.toggle(
      "is-active",
      btn.dataset.filter === filter
    );

  });

}


/* =========================================================
   4. LIGHTBOX
   ========================================================= */

const lightbox = document.createElement("div");

lightbox.className = "lightbox";

lightbox.innerHTML = `

  <button
    class="lightbox__close"
    aria-label="Fermer"
  >
    &times;
  </button>

  <button
    class="lightbox__nav lightbox__nav--prev"
    aria-label="Photo précédente"
  >
    &#8249;
  </button>

  <img
    class="lightbox__img"
    alt=""
  >

  <button
    class="lightbox__nav lightbox__nav--next"
    aria-label="Photo suivante"
  >
    &#8250;
  </button>

  <span class="lightbox__caption"></span>

`;

document.body.appendChild(lightbox);


const lbImg =
  lightbox.querySelector(".lightbox__img");

const lbCaption =
  lightbox.querySelector(".lightbox__caption");


let lbIndex = 0;

let lbSingleMode = false;


/* =========================================================
   5. INDEX DES PHOTOS VISIBLES
   ========================================================= */

function visibleIndexes(){

  const visible = [];

  document
    .querySelectorAll(".proof-sheet__item")
    .forEach(el => {

      if (!el.classList.contains("is-hidden")){

        const idx =
          Number(el.dataset.index);

        if (
          PORTFOLIO_DATA[idx] &&
          PORTFOLIO_DATA[idx].src
        ){

          visible.push(idx);

        }

      }

    });

  return visible;

}


/* =========================================================
   6. OUVRIR LIGHTBOX PORTFOLIO
   ========================================================= */

function openLightbox(index){

  lbSingleMode = false;

  lightbox.classList.remove(
    "lightbox--single"
  );

  lbIndex = index;

  renderLightbox();

  lightbox.classList.add("is-open");

  document.body.style.overflow = "hidden";

}


/* =========================================================
   7. OUVRIR UNE IMAGE ISOLÉE
   ========================================================= */

function openSingleImage(src, caption){

  lbSingleMode = true;

  lightbox.classList.add(
    "lightbox--single"
  );

  lbImg.src = src;

  lbImg.alt = caption || "";

  lbCaption.textContent = "";

  lightbox.classList.add("is-open");

  document.body.style.overflow = "hidden";

}


/* =========================================================
   8. AFFICHAGE LIGHTBOX
   ========================================================= */

function renderLightbox(){

  const item =
    PORTFOLIO_DATA[lbIndex];

  if (!item) return;

  lbImg.src = item.src;

  lbImg.alt = item.label || "";

  lbCaption.textContent = "";

}


/* =========================================================
   9. FERMER LIGHTBOX
   ========================================================= */

function closeLightbox(){

  lightbox.classList.remove("is-open");

  document.body.style.overflow = "";

}


/* =========================================================
   10. NAVIGATION LIGHTBOX
   ========================================================= */

function stepLightbox(dir){

  if (lbSingleMode) return;

  const visible =
    visibleIndexes();

  if (!visible.length) return;

  const pos =
    visible.indexOf(lbIndex);

  const nextPos =
    (pos + dir + visible.length)
    % visible.length;

  lbIndex =
    visible[nextPos];

  renderLightbox();

}


/* =========================================================
   11. ÉVÉNEMENTS LIGHTBOX
   ========================================================= */

lightbox
  .querySelector(".lightbox__close")
  .addEventListener(
    "click",
    closeLightbox
  );


lightbox
  .querySelector(".lightbox__nav--prev")
  .addEventListener(
    "click",
    () => stepLightbox(-1)
  );


lightbox
  .querySelector(".lightbox__nav--next")
  .addEventListener(
    "click",
    () => stepLightbox(1)
  );


lightbox.addEventListener("click", e => {

  if (e.target === lightbox){

    closeLightbox();

  }

});


window.addEventListener("keydown", e => {

  if (!lightbox.classList.contains("is-open")){
    return;
  }

  if (e.key === "Escape"){
    closeLightbox();
  }

  if (e.key === "ArrowRight"){
    stepLightbox(1);
  }

  if (e.key === "ArrowLeft"){
    stepLightbox(-1);
  }

});


/* =========================================================
   12. IMAGES CLIQUABLES
   ========================================================= */

function initClickToEnlarge(){

  document
    .querySelectorAll(".is-clickable")
    .forEach(el => {

      const img =
        el.querySelector("img");

      if (!img) return;

      el.addEventListener("click", () => {

        openSingleImage(
          img.currentSrc || img.src,
          img.alt
        );

      });

    });

}


/* =========================================================
   13. NAVIGATION ENTRE LES PAGES
   ========================================================= */

const views =
  document.querySelectorAll(".view");

const navLinks =
  document.querySelectorAll(".nav__links a");


/* =========================================================
   14. CORRECTION DES BLOCS DE L'ACCUEIL
   ========================================================= */

/*
   IMPORTANT :

   Les 4 photos :

   Sport
   Bleed
   Shooting
   Mariage

   sont un élément de l'accueil.

   On les masque explicitement dès qu'on quitte
   la page Accueil.

   Cette correction fonctionne même si le bloc
   .themes-strip se trouve accidentellement en dehors
   de la section #accueil dans le HTML.
*/

function syncHomeElements(target){

  const themesStrip =
    document.querySelector(".themes-strip");

  if (themesStrip){

    if (target === "accueil"){

      themesStrip.style.display = "";

    } else {

      themesStrip.style.display = "none";

    }

  }


  /*
     Sécurité supplémentaire :
     les éléments marqués home-only
     ne doivent apparaître que sur Accueil.
  */

  document
    .querySelectorAll(".home-only")
    .forEach(el => {

      el.style.display =
        target === "accueil"
          ? ""
          : "none";

    });

}


/* =========================================================
   15. NAVIGATION ACTIVE
   ========================================================= */

function setActiveNav(target){

  navLinks.forEach(a => {

    a.classList.toggle(
      "is-active",
      a.dataset.target === target
    );

  });

}


/* =========================================================
   16. AFFICHER UNE PAGE
   ========================================================= */

function showView(target){

  /*
     Vérification :
     si la page demandée n'existe pas,
     on revient à Accueil.
  */

  const targetView =
    document.querySelector(
      `.view[data-view="${target}"]`
    );

  if (!targetView){

    target = "accueil";

  }


  /*
     Activation d'une seule vue.
  */

  views.forEach(v => {

    const isTarget =
      v.dataset.view === target;

    v.classList.toggle(
      "active",
      isTarget
    );

    v.classList.toggle(
      "is-visible",
      isTarget
    );

  });


  /*
     Correction des éléments spécifiques
     à l'accueil.
  */

  syncHomeElements(target);


  /*
     Navigation active.
  */

  setActiveNav(target);


  /*
     Retour en haut.
  */

  window.scrollTo({
    top: 0,
    behavior: "auto"
  });

}


/* =========================================================
   17. TRANSITION
   ========================================================= */

const FADE_DURATION = 260;

let transitionTimer = null;


/* =========================================================
   18. TRANSITION ENTRE LES PAGES
   ========================================================= */

function playTransition(onMid){

  /*
     Si plusieurs clics sont effectués rapidement,
     on annule la transition précédente.
  */

  if (transitionTimer){

    clearTimeout(transitionTimer);

    transitionTimer = null;

  }


  const current =
    document.querySelector(".view.active");


  if (!current){

    onMid();

    return;

  }


  /*
     Début du fondu.
  */

  current.classList.remove(
    "is-visible"
  );


  transitionTimer =
    window.setTimeout(() => {

      onMid();


      const next =
        document.querySelector(".view.active");


      if (next){

        /*
           Force le navigateur à recalculer
           la mise en page avant le fondu entrant.
        */

        void next.offsetWidth;


        next.classList.add(
          "is-visible"
        );

      }


      transitionTimer = null;

    }, FADE_DURATION);

}


/* =========================================================
   19. ALLER À UNE PAGE
   ========================================================= */

function goTo(target, filter){

  /*
     Vérifie que la page existe.
  */

  if (
    !document.querySelector(
      `.view[data-view="${target}"]`
    )
  ){

    target = "accueil";

  }


  const current =
    document.querySelector(".view.active");


  /*
     Si on est déjà sur cette page,
     on peut quand même appliquer un filtre.
  */

  if (
    current &&
    current.dataset.view === target
  ){

    if (filter){

      applyFilter(filter);

    }

    /*
       On s'assure quand même que les éléments
       de l'accueil sont correctement affichés.
    */

    syncHomeElements(target);

    return;

  }


  playTransition(() => {

    showView(target);


    if (filter){

      applyFilter(filter);

    }

  });

}


/* =========================================================
   20. FILTRES
   ========================================================= */

document
  .querySelectorAll(".filter")
  .forEach(btn => {

    btn.addEventListener(
      "click",
      () => {

        applyFilter(
          btn.dataset.filter
        );

      }
    );

  });


/* =========================================================
   21. LIENS DE NAVIGATION
   ========================================================= */

document
  .querySelectorAll("[data-target]")
  .forEach(el => {

    el.addEventListener(
      "click",
      e => {

        e.preventDefault();


        const target =
          el.dataset.target;


        const filter =
          el.dataset.filter;


        goTo(
          target,
          filter
        );


        /*
           Ferme le menu mobile.
        */

        const navLinksEl =
          document.getElementById(
            "navLinks"
          );


        if (navLinksEl){

          navLinksEl.classList.remove(
            "is-open"
          );

        }


        /*
           Met à jour le hash de l'URL
           sans provoquer de rechargement.
        */

        if (target){

          const newHash =
            "#" + target;


          if (
            window.location.hash !==
            newHash
          ){

            history.pushState(
              null,
              "",
              newHash
            );

          }

        }

      }
    );

  });


/* =========================================================
   22. RETOUR / AVANCEUR NAVIGATEUR
   ========================================================= */

window.addEventListener(
  "popstate",
  () => {

    const hash =
      location.hash || "#accueil";


    const target =
      hash.replace("#", "");


    if (
      document.querySelector(
        `.view[data-view="${target}"]`
      )
    ){

      goTo(target);

    } else {

      goTo("accueil");

    }

  }
);


/* =========================================================
   23. MENU MOBILE
   ========================================================= */

const navToggle =
  document.getElementById(
    "navToggle"
  );


const navLinksEl =
  document.getElementById(
    "navLinks"
  );


if (
  navToggle &&
  navLinksEl
){

  navToggle.addEventListener(
    "click",
    () => {

      const open =
        navLinksEl.classList.toggle(
          "is-open"
        );


      navToggle.setAttribute(
        "aria-expanded",
        String(open)
      );

    }
  );

}


/* =========================================================
   24. ANNÉE FOOTER
   ========================================================= */

const year =
  document.getElementById("year");


if (year){

  year.textContent =
    new Date().getFullYear();

}


/* =========================================================
   25. INITIALISATION
   ========================================================= */

renderPortfolio();

applyFilter("tous");

initClickToEnlarge();


/* =========================================================
   26. PAGE DE DÉPART
   ========================================================= */

const startTarget =
  (location.hash || "#accueil")
    .replace("#", "");


if (
  document.querySelector(
    `.view[data-view="${startTarget}"]`
  )
){

  showView(startTarget);

} else {

  showView("accueil");

}
