const semuaSection = document.querySelectorAll("main section[id]");
const semuaLink = document.querySelectorAll("#menu-nav a");

function tandaiMenuAktif() {
  let idAktif = semuaSection[0].id;
  semuaSection.forEach(function (section) {
    if (section.getBoundingClientRect().top <= 150) {
      idAktif = section.id;
    }
  });
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
    idAktif = semuaSection[semuaSection.length - 1].id;
  }

  semuaLink.forEach(function (link) {
    if (link.getAttribute("href") === "#" + idAktif) {
      link.setAttribute("aria-current", "true");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

window.addEventListener("scroll", tandaiMenuAktif);
tandaiMenuAktif();

const tombolMenu = document.getElementById("tombol-menu");
const menuNav = document.getElementById("menu-nav");

function aturMenu(buka) {
  tombolMenu.setAttribute("aria-expanded", String(buka));
  menuNav.classList.toggle("max-h-0", !buka);
  menuNav.classList.toggle("opacity-0", !buka);
  menuNav.classList.toggle("max-h-60", buka);
  menuNav.classList.toggle("opacity-100", buka);
}

tombolMenu.addEventListener("click", function () {
  aturMenu(tombolMenu.getAttribute("aria-expanded") !== "true");
});

semuaLink.forEach(function (link) {
  link.addEventListener("click", function () {
    aturMenu(false);
  });
});

const formKontak = document.getElementById("from-kontak");
const pesanStatus = document.getElementById("pesan-status");

formKontak.addEventListener("submit", function (e) {
  e.preventDefault();
  const nama = formKontak.elements.nama.value.trim();
  pesanStatus.textContent = "Terima kasih, " + nama + ". Pesanmu sudah terkirim.";
  formKontak.reset();
});
