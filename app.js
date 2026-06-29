/* =========================================================================
   ЛОГИКА САЙТА — здесь ничего менять не нужно.
   Всё содержимое берётся из data.js
========================================================================= */

let currentGroup = "project"; // project | format | social | none
let bestOnly = false;

/* экранирование данных, чтобы спецсимволы (<, &, кавычки) не ломали разметку */
function esc(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/* ----------------------------- ПРОФИЛЬ ----------------------------------- */
function renderProfile() {
  document.getElementById("profileName").textContent = PROFILE.name;
  document.getElementById("profileRole").textContent = PROFILE.role;
  document.getElementById("profileHeadline").textContent = PROFILE.headline;
  document.getElementById("profileAbout").textContent = PROFILE.about;
  document.title = `${PROFILE.name} — ${PROFILE.role}`;

  // фото (если файла нет — подставится котик)
  const photo = document.getElementById("profilePhoto");
  photo.src = PROFILE.photo;
  photo.onerror = () => {
    photo.onerror = null;
    photo.src = "assets/cats/huh.gif"; // заглушка-котик, пока нет фото
  };

  // кнопки резюме:
  //  «Скачать…» (resumeBtn в шапке, resumeBtn3 в контактах) — скачивают файл
  //  «Резюме» (resumeBtn2 в hero) — открывает PDF в соседней вкладке
  const resumeName = "Резюме — Ирина Трунова.pdf";
  ["resumeBtn", "resumeBtn2", "resumeBtn3"].forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.href = PROFILE.resumeFile;
    if (id === "resumeBtn2") {
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
      el.removeAttribute("download");
    } else {
      el.setAttribute("download", resumeName);
      el.removeAttribute("target");
    }
  });

  // CTA «обсудить задачу» → телеграм
  const cta = document.getElementById("ctaTelegram");
  if (cta) { cta.href = PROFILE.contacts.telegramUrl; cta.target = "_blank"; cta.rel = "noopener"; }

  // цифры доверия
  const stats = document.getElementById("statsRow");
  if (stats && PROFILE.stats) {
    stats.innerHTML = PROFILE.stats
      .map((s) => `<div class="stat"><div class="stat__num">${esc(s.num)}</div><div class="stat__label">${esc(s.label)}</div></div>`)
      .join("");
  }
}

/* ----------------------------- КОНТАКТЫ ---------------------------------- */
function renderContacts() {
  const c = PROFILE.contacts;
  const items = [
    { label: "Telegram", value: c.telegram, href: c.telegramUrl },
    { label: "Email", value: c.email, href: "mailto:" + c.email },
    { label: "WhatsApp", value: c.whatsapp, href: c.whatsappUrl },
  ];
  document.getElementById("contactsGrid").innerHTML = items
    .filter((i) => i.value)
    .map(
      (i) => `
      <a class="contact-card" href="${esc(i.href)}" target="_blank" rel="noopener">
        <span>${esc(i.label)}</span><b>${esc(i.value)}</b>
      </a>`
    )
    .join("");
}

/* ----------------------------- ЧТО Я УМЕЮ -------------------------------- */
function renderServices() {
  const el = document.getElementById("servicesGrid");
  if (!el || typeof SERVICES === "undefined") return;
  el.innerHTML = SERVICES.map(
    (s) => `
    <div class="service">
      <img src="assets/cats/${esc(s.icon)}.gif" alt="" loading="lazy" width="64" height="64"/>
      <div>
        <div class="service__title">${esc(s.title)}</div>
        <div class="service__desc">${esc(s.desc)}</div>
      </div>
    </div>`
  ).join("");
}

/* ----------------------------- РЕЗУЛЬТАТЫ -------------------------------- */
function renderResults() {
  const el = document.getElementById("resultsGrid");
  if (!el || typeof RESULTS === "undefined") return;
  const phCats = ["maxwell", "huh", "typing", "yippee"]; // котики для заглушек
  el.innerHTML = RESULTS.map((r, i) => {
    const shot = r.img
      ? `<div class="result__shot"><img src="${esc(r.img)}" alt="${esc(r.title)}" loading="lazy"/></div>`
      : `<div class="result__shot">
           <img class="ph-cat" src="assets/cats/${phCats[i % phCats.length]}.gif" alt="" loading="lazy"/>
           <span class="ph-text">📸 тут будет скрин</span>
         </div>`;
    return `
      <article class="result">
        <div class="result__bar"><i></i><i></i><i></i></div>
        ${shot}
        <div class="result__meta">
          <div class="result__title">${esc(r.title)}</div>
          <div class="result__cap">${esc(r.caption || "")}</div>
          ${r.link ? `<a class="result__link" href="${esc(r.link)}" target="_blank" rel="noopener">${esc(r.linkText || "смотреть →")}</a>` : ""}
        </div>
      </article>`;
  }).join("");
}

/* ----------------------------- РАБОТЫ (ЦВЕТЫ) ---------------------------- */
function flowerHTML(w) {
  const tags = [w.format, w.social]
    .filter(Boolean)
    .map((t) => `<span class="flower__tag">${esc(t)}</span>`)
    .join("");

  const inner = `
      <span class="flower__shape"></span>
      ${w.best ? `<span class="flower__badge">⭐ лучшее</span>` : ""}
      <span class="flower__content">
        <span class="flower__title">${esc(w.title)}</span>
        <span class="flower__tags">${tags}</span>
        ${w.link
          ? `<span class="flower__go">Открыть →</span>`
          : `<span class="flower__go flower__go--soon">скоро</span>`}
      </span>`;

  const title = esc(w.note || w.title);

  // со ссылкой — настоящая ссылка; без ссылки — не-кликабельный блок (не <a>)
  return w.link
    ? `<a class="flower" href="${esc(w.link)}" target="_blank" rel="noopener" title="${title}" aria-label="${esc(w.title)}">${inner}</a>`
    : `<div class="flower flower--soon" title="${title}" aria-label="${esc(w.title)} — скоро">${inner}</div>`;
}

function renderWorks() {
  const container = document.getElementById("worksContainer");
  let list = WORKS.slice();
  if (bestOnly) list = list.filter((w) => w.best);

  if (list.length === 0) {
    container.innerHTML = `<p class="empty"><img src="assets/cats/huh.gif" alt="huh cat" style="width:120px;border-radius:16px;display:block;margin:0 auto 12px"/>Тут пока пусто 🐱 Добавь работы в файле data.js</p>`;
    return;
  }

  if (currentGroup === "none") {
    container.innerHTML = `<div class="flowers">${list.map(flowerHTML).join("")}</div>`;
    return;
  }

  const groups = {};
  list.forEach((w) => {
    const key = w[currentGroup] || "Без категории";
    (groups[key] = groups[key] || []).push(w);
  });

  // в группировке «По соцсетям» всегда показываем заданные площадки,
  // даже если кейсов по ним пока нет (пустыми блоками «скоро»)
  if (currentGroup === "social" && typeof EMPTY_SOCIALS !== "undefined") {
    EMPTY_SOCIALS.forEach((s) => { if (!groups[s]) groups[s] = []; });
  }

  container.innerHTML = Object.keys(groups)
    .map((key) => {
      const items = groups[key];
      const body = items.length
        ? `<div class="flowers">${items.map(flowerHTML).join("")}</div>
           <button class="group-toggle" type="button" aria-expanded="false">Показать ещё ▾</button>`
        : `<div class="group-empty">пока пусто — скоро 🌱</div>`;
      return `
      <div class="group-block" data-expanded="false">
        <h3 class="group-block__title">${esc(key)}</h3>
        ${body}
      </div>`;
    })
    .join("");

  // кнопки «показать ещё / свернуть»
  container.querySelectorAll(".group-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const block = btn.closest(".group-block");
      block.dataset.expanded = block.dataset.expanded === "true" ? "false" : "true";
      applyGroupCollapse(block);
    });
  });
  applyCollapse();
}

/* ----- сворачивание групп до одной строки ----- */
function firstRowCount(flowers) {
  if (!flowers.length) return 0;
  const top = flowers[0].offsetTop;
  let n = 0;
  for (const f of flowers) {
    if (Math.abs(f.offsetTop - top) < 2) n++;
    else break;
  }
  return n || flowers.length;
}

function applyGroupCollapse(block) {
  const flowers = [...block.querySelectorAll(".flower")];
  const btn = block.querySelector(".group-toggle");
  if (!btn || !flowers.length) return;

  flowers.forEach((f) => (f.style.display = "")); // показать всё для замера строки
  const rowN = firstRowCount(flowers);

  if (flowers.length <= rowN) {
    btn.style.display = "none"; // всё и так в одну строку — кнопка не нужна
    return;
  }
  btn.style.display = "";

  const expanded = block.dataset.expanded === "true";
  btn.setAttribute("aria-expanded", expanded ? "true" : "false");
  if (expanded) {
    btn.textContent = "Свернуть ▴";
  } else {
    flowers.forEach((f, i) => { if (i >= rowN) f.style.display = "none"; });
    btn.textContent = `Показать ещё ${flowers.length - rowN} ▾`;
  }
}

function applyCollapse() {
  document.querySelectorAll("#worksContainer .group-block").forEach(applyGroupCollapse);
}

/* ----------------------------- СКИЛЛЫ ------------------------------------ */
function petalSVG(on) {
  const color = on ? "%23ff2e88" : "%23ff2e88";
  return `<img class="petal ${on ? "petal--on" : ""}" alt="" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='${color}' d='M12 2c2 0 3.5 1.6 3.5 3.6 0 .9-.3 1.6-.8 2.2.8-.5 1.7-.8 2.7-.8 2 0 3.6 1.6 3.6 3.5S19.4 14 17.4 14c-1 0-1.9-.3-2.7-.8.5.6.8 1.4.8 2.2 0 2-1.6 3.6-3.5 3.6S8.5 17.4 8.5 15.4c0-.8.3-1.6.8-2.2-.8.5-1.7.8-2.7.8C4.6 14 3 12.4 3 10.5S4.6 7 6.6 7c1 0 1.9.3 2.7.8-.5-.6-.8-1.3-.8-2.2C8.5 3.6 10 2 12 2z'/%3E%3C/svg%3E">`;
}

function renderSkills() {
  // хард — чипы с лепестками-уровнями
  const hard = document.getElementById("hardSkills");
  if (hard) {
    hard.innerHTML = SKILLS.hard
      .map((s) => {
        const petals = Array.from({ length: 5 }, (_, i) => petalSVG(i < (s.level || 0))).join("");
        return `<div class="skill-chip"><span class="skill-chip__name">${esc(s.name)}</span><span class="skill-chip__level">${petals}</span></div>`;
      })
      .join("");
  }

  // софт — sticker-карточки с котиками
  const soft = document.getElementById("softSkills");
  if (soft) {
    soft.innerHTML = SKILLS.soft
      .map(
        (s) => `
        <div class="sticker">
          <img src="${s.img ? esc(s.img) : "assets/cats/" + esc(s.cat) + ".gif"}" alt="" loading="lazy" width="72" height="72"/>
          <div class="sticker__title">${esc(s.title)}</div>
          <div class="sticker__desc">${esc(s.desc)}</div>
        </div>`
      )
      .join("");
  }
}

/* ----------------------------- ФИЛЬТРЫ ----------------------------------- */
function initFilters() {
  document.querySelectorAll("[data-group]").forEach((btn) => {
    btn.setAttribute("aria-pressed", btn.classList.contains("chip--active") ? "true" : "false");
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-group]").forEach((b) => {
        b.classList.remove("chip--active");
        b.setAttribute("aria-pressed", "false");
      });
      btn.classList.add("chip--active");
      btn.setAttribute("aria-pressed", "true");
      currentGroup = btn.dataset.group;
      renderWorks();
    });
  });
  document.getElementById("bestOnly").addEventListener("change", (e) => {
    bestOnly = e.target.checked;
    renderWorks();
  });
}

/* ----------------------------- СТАРТ ------------------------------------- */
renderProfile();
renderServices();
renderResults();
renderContacts();
renderWorks();
renderSkills();
initFilters();

// при ресайзе пересчитываем, сколько цветов влезает в одну строку
let _resizeT;
window.addEventListener("resize", () => {
  clearTimeout(_resizeT);
  _resizeT = setTimeout(applyCollapse, 150);
});
