/* =============================================================================
   RENA REN LAB — APP
   Renders shared chrome (header/nav/footer) from config.js, drives the hero
   animation and the clickable "cell" doorways, and builds the data-driven
   sections (members, publications, contact). You normally won't edit this —
   change content in config.js and prose in the .html files.
   ============================================================================= */
(function () {
  "use strict";
  var S = window.SITE || {};
  var page = document.body.getAttribute("data-page") || "";
  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
    return { "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c];
  }); };

  /* ---------------------------------------------------------------- HEADER --- */
  function renderHeader() {
    var host = document.getElementById("site-header");
    if (!host) return;
    var navLinks = (S.nav || []).map(function (n) {
      var current = n.page === page ? ' aria-current="page"' : "";
      return '<a href="' + esc(n.href) + '"' + current + '>' + esc(n.label) + "</a>";
    }).join("");

    host.className = "site-header";
    host.innerHTML =
      '<a class="brand" href="index.html">' +
        '<span class="brand__name">' + esc(S.brand.name) + "</span>" +
        '<span class="brand__tagline">' + esc(S.brand.tagline) + "</span>" +
      "</a>" +
      '<div class="header__right">' +
        '<button class="nav-toggle" aria-expanded="false" aria-controls="primary-nav">Menu</button>' +
        '<nav class="nav" id="primary-nav" aria-label="Primary">' + navLinks + "</nav>" +
        '<a class="inst-logo" href="' + esc(S.logo.href) + '" target="_blank" rel="noopener" aria-label="' + esc(S.logo.alt) + '">' +
          '<img src="' + esc(S.logo.src) + '" alt="' + esc(S.logo.alt) + '">' +
        "</a>" +
      "</div>";

    // mobile nav toggle
    var btn = host.querySelector(".nav-toggle");
    var nav = host.querySelector(".nav");
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  /* ---------------------------------------------------------------- FOOTER --- */
  function renderFooter() {
    var host = document.getElementById("site-footer");
    if (!host) return;
    var yr = new Date().getFullYear();
    host.className = "site-footer";
    host.innerHTML =
      "<span>© " + yr + " " + esc(S.brand.name) + " · " + esc(S.contact.institution) + "</span>" +
      '<span><a href="mailto:' + esc(S.contact.email) + '">' + esc(S.contact.email) + "</a></span>";
  }

  /* ------------------------------------------------------ HERO + DOORWAYS --- */
  function initHero() {
    var stage = document.getElementById("hero-stage");
    if (!stage) return;
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // doorways (clickable cells)
    var layer = document.getElementById("hotspots");
    if (layer) {
      (S.cells || []).forEach(function (c) {
        var target = (S.nav || []).filter(function (n) { return n.page === c.page; })[0];
        if (!target) return;
        var a = document.createElement("a");
        a.className = "hotspot";
        a.href = target.href;
        a.style.left = c.x + "%";
        a.style.top = c.y + "%";
        a.style.setProperty("--r", c.r);
        a.style.setProperty("--glow", "var(" + c.accent + ")");
        a.setAttribute("aria-label", "Open " + c.label);
        a.innerHTML =
          '<span class="hotspot__ring" aria-hidden="true"></span>' +
          '<span class="hotspot__label">' + esc(c.label) + "</span>";
        layer.appendChild(a);
      });
    }

    // entrance + ambient rotation
    if (!reduce) {
      requestAnimationFrame(function () {
        stage.classList.add("animate");
        stage.addEventListener("animationend", function once(e) {
          if (e.animationName === "fadeIn") {
            stage.classList.add("ambient");
            stage.removeEventListener("animationend", once);
          }
        });
      });
    }
  }

  /* --------------------------------------------------------------- MEMBERS --- */
  function renderMembers() {
    var host = document.getElementById("member-list");
    if (host) {
      host.innerHTML = (S.members || []).map(function (m) {
        var initials = m.name.split(/\s+/).map(function (w) { return w[0]; }).join("").slice(0, 2);
        var photo = m.photo
          ? '<img class="member__photo" src="' + esc(m.photo) + '" alt="' + esc(m.name) + '">'
          : '<div class="member__photo member__photo--ph" aria-hidden="true">' + esc(initials) + "</div>";
        var linkedinHtml = m.linkedin
          ? ' <a class="member__linkedin" href="' + esc(m.linkedin) + '" target="_blank" rel="noopener" aria-label="LinkedIn profile">' +
            '<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>' +
            '</a>'
          : '';
        return '<article class="member">' + photo +
          "<div>" +
            '<h2 class="member__name">' + esc(m.name) + linkedinHtml + "</h2>" +
            '<p class="member__role">' + esc(m.role) + "</p>" +
            '<p class="member__blurb">' + esc(m.blurb) + "</p>" +
          "</div></article>";
      }).join("");
    }
    var openHost = document.getElementById("openings");
    if (openHost) {
      if (!S.openings || !S.openings.length) { openHost.remove(); return; }
      openHost.innerHTML =
        '<h3 class="openings__title">Join the lab</h3>' +
        '<div class="openings__grid">' +
        S.openings.map(function (o) {
          var html = '<div class="opening"><h4>' + esc(o.title) + '</h4>';
          if (o.qualification) {
            html += '<h5>Qualification</h5><p>' + esc(o.qualification) + '</p>';
          }
          if (o.howToApply) {
            html += '<h5>How to Apply</h5><p>' + o.howToApply.split('\n').map(esc).join('<br>') + '</p>';
          }
          return html + '</div>';
        }).join("") + "</div>";
    }
  }

  /* ---------------------------------------------------------- PUBLICATIONS --- */
  function renderPublications() {
    var host = document.getElementById("pub-list");
    if (!host) return;
    var pubs = S.publications || [];
    if (!pubs.length) {
      host.innerHTML = '<p class="empty-note">Publications will be listed here. Add them in assets/js/config.js.</p>';
      return;
    }
    // group by year
    var years = [];
    var byYear = {};
    pubs.forEach(function (p) {
      var y = p.year || "Other";
      if (!byYear[y]) { byYear[y] = []; years.push(y); }
      byYear[y].push(p);
    });
    years.sort(function (a, b) { return b - a; });

    function highlightRen(authors) {
      return esc(authors).replace(/(Ren,\s*J\.)/g, '<strong>$1</strong>');
    }

    host.innerHTML = years.map(function (year) {
      var heading = '<h3 class="pub-year">' + year + '</h3>';
      var papers = byYear[year].map(function (p) {
        var extra = '';
        if (p.intro) {
          extra += '<p class="pub__intro">' + esc(p.intro) + '</p>';
        }
        if (p.figure) {
          var figClass = p.figureHalf ? 'pub__figure pub__figure--half' : 'pub__figure';
          var figStyle = p.figureScale ? ' style="max-width:' + (p.figureHalf ? 50 * p.figureScale : 100 * p.figureScale) + '%"' : '';
          extra += '<img class="' + figClass + '" src="' + esc(p.figure) + '"' + figStyle + ' alt="Figure for ' + esc(p.title) + '">';
        }
        var titleHtml = p.link
          ? '<a href="' + esc(p.link) + '" target="_blank" rel="noopener">' + esc(p.title) + '</a>'
          : esc(p.title);
        return '<article class="pub">' +
          '<h2 class="pub__title">' + titleHtml + '</h2>' +
          '<p class="pub__venue">' + esc(p.venue) + '</p>' +
          '<p class="pub__authors">' + highlightRen(p.authors) + '</p>' +
          extra +
        '</article>';
      }).join("");
      return heading + papers;
    }).join("");
  }

  /* --------------------------------------------------------------- CONTACT --- */
  function renderContact() {
    var host = document.getElementById("contact-card");
    if (!host) return;
    var c = S.contact;
    host.innerHTML =
      '<div class="contact-row"><div class="contact-label">Primary contact</div>' +
        '<div class="contact-value">' + esc(c.primaryName) + " — " + esc(c.primaryRole) + "</div></div>" +
      '<div class="contact-row"><div class="contact-label">Email</div>' +
        '<div class="contact-value"><a href="mailto:' + esc(c.email) + '">' + esc(c.email) + "</a></div></div>" +
      '<div class="contact-row"><div class="contact-label">Institution</div>' +
        '<div class="contact-value">' + esc(c.institution) + "</div></div>" +
      '<div class="contact-row"><div class="contact-label">Location</div>' +
        '<div class="contact-value">' + esc(c.location) + "</div></div>";
  }

  /* ------------------------------------------------------------------ INIT --- */
  document.addEventListener("DOMContentLoaded", function () {
    renderHeader();
    renderFooter();
    initHero();
    renderMembers();
    renderPublications();
    renderContact();
  });
})();
