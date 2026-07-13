/* Bilingual toggle (EN default) + mobile nav */
(function () {
  var root = document.documentElement;

  function getSaved() {
    try { return localStorage.getItem("site-lang"); } catch (e) { return null; }
  }
  function save(lang) {
    try { localStorage.setItem("site-lang", lang); } catch (e) { /* no-op */ }
  }

  function apply(lang) {
    root.setAttribute("data-lang", lang);
    root.setAttribute("lang", lang === "el" ? "el" : "en");
    var btn = document.getElementById("langToggle");
    if (btn) btn.textContent = lang === "en" ? "ΕΛ" : "EN";
  }

  apply(getSaved() === "el" ? "el" : "en");

  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("langToggle");
    if (btn) {
      btn.addEventListener("click", function () {
        var next = root.getAttribute("data-lang") === "en" ? "el" : "en";
        apply(next);
        save(next);
      });
    }
    var navBtn = document.getElementById("navBtn");
    var nav = document.getElementById("mainNav");
    if (navBtn && nav) {
      navBtn.addEventListener("click", function () {
        nav.classList.toggle("open");
      });
    }
  });
})();
