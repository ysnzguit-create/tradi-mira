/* ===== Tradi Mira — Store logic ===== */
(function () {
  "use strict";

  const WHATSAPP_NUMBER = "212633963801"; // رقم الطلب عبر واتساب
  const CURRENCY = "د.م";
  const STORE_NAME = "ترادي ميرا";

  const $ = (s, ctx = document) => ctx.querySelector(s);
  const $$ = (s, ctx = document) => [...ctx.querySelectorAll(s)];
  const fmt = (n) => n.toLocaleString("ar-MA") + " " + CURRENCY;

  /* ---------- Cart state (persisted) ---------- */
  let cart = load();
  function load() {
    try { return JSON.parse(localStorage.getItem("tm_cart")) || {}; }
    catch { return {}; }
  }
  function save() {
    try { localStorage.setItem("tm_cart", JSON.stringify(cart)); } catch {}
  }

  /* ---------- Render categories ---------- */
  function renderCategories() {
    const grid = $("#categoriesGrid");
    if (!grid) return;
    grid.innerHTML = CATEGORIES.map((c) => {
      const count = PRODUCTS.filter((p) => p.cat === c.id).length;
      return `
        <div class="category" data-cat="${c.id}" style="background:${c.color}" role="button" tabindex="0">
          <span class="category__icon">${c.icon}</span>
          <span class="category__name">${c.name}</span>
          <span class="category__count">${count} منتج</span>
        </div>`;
    }).join("");

    $$(".category", grid).forEach((el) => {
      const go = () => {
        setFilter(el.dataset.cat);
        $("#products").scrollIntoView({ behavior: "smooth" });
      };
      el.addEventListener("click", go);
      el.addEventListener("keydown", (e) => { if (e.key === "Enter") go(); });
    });
  }

  /* ---------- Render filters ---------- */
  let currentFilter = "all";
  function renderFilters() {
    const box = $("#filters");
    if (!box) return;
    const chips = [{ id: "all", name: "الكل" }, ...CATEGORIES];
    box.innerHTML = chips.map((c) =>
      `<button class="filter ${c.id === "all" ? "active" : ""}" data-filter="${c.id}">${c.name}</button>`
    ).join("");
    $$(".filter", box).forEach((b) =>
      b.addEventListener("click", () => setFilter(b.dataset.filter))
    );
  }
  function setFilter(id) {
    currentFilter = id;
    $$(".filter").forEach((b) => b.classList.toggle("active", b.dataset.filter === id));
    renderProducts();
  }

  /* ---------- Render products ---------- */
  function productMedia(p) {
    if (p.img) return `<img class="product__img" src="${p.img}" alt="${p.name}" loading="lazy">`;
    return `<div class="product__img ph" style="background:${p.color || "#124b65"}">${p.ph || "🛍️"}</div>`;
  }
  function renderProducts() {
    const grid = $("#productsGrid");
    const empty = $("#productsEmpty");
    if (!grid) return;
    const list = currentFilter === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.cat === currentFilter);

    empty.hidden = list.length > 0;
    grid.innerHTML = list.map((p) => `
      <article class="product">
        <div class="product__media">
          ${p.tag ? `<span class="product__badge">${p.tag}</span>` : ""}
          ${productMedia(p)}
        </div>
        <div class="product__body">
          <span class="product__cat">${catName(p.cat)}</span>
          <h3 class="product__name">${p.name}</h3>
          <p class="product__desc">${p.desc || ""}</p>
          <div class="product__foot">
            <span class="product__price">${fmt(p.price)}${p.old ? `<small>${fmt(p.old)}</small>` : ""}</span>
            <button class="product__add" data-add="${p.id}" aria-label="أضف ${p.name} إلى السلة">+</button>
          </div>
        </div>
      </article>`).join("");

    $$("[data-add]", grid).forEach((b) =>
      b.addEventListener("click", () => addToCart(+b.dataset.add))
    );
  }
  const catName = (id) => (CATEGORIES.find((c) => c.id === id) || {}).name || "";
  const findProduct = (id) => PRODUCTS.find((p) => p.id === id);

  /* ---------- Cart actions ---------- */
  function addToCart(id) {
    cart[id] = (cart[id] || 0) + 1;
    save(); renderCart(); updateCount();
    toast("✔ تمت الإضافة إلى السلة");
    bump();
  }
  function setQty(id, q) {
    if (q <= 0) delete cart[id]; else cart[id] = q;
    save(); renderCart(); updateCount();
  }
  function updateCount() {
    const n = Object.values(cart).reduce((a, b) => a + b, 0);
    const el = $("#cartCount");
    el.textContent = n;
    el.style.display = n ? "grid" : "none";
  }
  function cartTotal() {
    return Object.entries(cart).reduce((sum, [id, q]) => {
      const p = findProduct(+id); return p ? sum + p.price * q : sum;
    }, 0);
  }
  function renderCart() {
    const body = $("#cartBody");
    const ids = Object.keys(cart);
    if (!ids.length) {
      body.innerHTML = `<div class="cart-empty"><span>🛒</span>سلتك فارغة حالياً<br><small>أضيفي بعض المنتجات الجميلة</small></div>`;
    } else {
      body.innerHTML = ids.map((id) => {
        const p = findProduct(+id); if (!p) return "";
        const q = cart[id];
        const media = p.img
          ? `<img class="cart-item__img" src="${p.img}" alt="${p.name}">`
          : `<div class="cart-item__img ph" style="background:${p.color};font-size:1.6rem;display:grid;place-items:center">${p.ph || "🛍️"}</div>`;
        return `
          <div class="cart-item">
            ${media}
            <div class="cart-item__info">
              <div class="cart-item__name">${p.name}</div>
              <div class="cart-item__price">${fmt(p.price)}</div>
              <div class="cart-item__ctrl">
                <button class="qty-btn" data-dec="${id}" aria-label="إنقاص">−</button>
                <span class="cart-item__qty">${q}</span>
                <button class="qty-btn" data-inc="${id}" aria-label="زيادة">+</button>
                <button class="cart-item__remove" data-rm="${id}">حذف</button>
              </div>
            </div>
          </div>`;
      }).join("");
      $$("[data-inc]", body).forEach((b) => b.addEventListener("click", () => setQty(+b.dataset.inc, cart[b.dataset.inc] + 1)));
      $$("[data-dec]", body).forEach((b) => b.addEventListener("click", () => setQty(+b.dataset.dec, cart[b.dataset.dec] - 1)));
      $$("[data-rm]", body).forEach((b) => b.addEventListener("click", () => setQty(+b.dataset.rm, 0)));
    }
    $("#cartTotal").textContent = fmt(cartTotal());
  }

  /* ---------- WhatsApp checkout ---------- */
  function checkout() {
    const ids = Object.keys(cart);
    if (!ids.length) { toast("سلتك فارغة 🛒"); return; }
    let msg = `مرحباً ${STORE_NAME} 🌿%0Aأودّ طلب المنتجات التالية:%0A%0A`;
    ids.forEach((id) => {
      const p = findProduct(+id); if (!p) return;
      msg += `• ${p.name} — الكمية: ${cart[id]} × ${p.price} ${CURRENCY}%0A`;
    });
    msg += `%0Aالمجموع الإجمالي: ${cartTotal()} ${CURRENCY}%0A%0Aالاسم:%0Aالمدينة:%0Aالعنوان:%0Aرقم الهاتف:`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  }

  /* ---------- Cart drawer open/close ---------- */
  const drawer = $("#cartDrawer");
  const overlay = $("#cartOverlay");
  function openCart() { drawer.classList.add("open"); overlay.classList.add("open"); }
  function closeCart() { drawer.classList.remove("open"); overlay.classList.remove("open"); }

  /* ---------- Small UX helpers ---------- */
  let toastTimer;
  function toast(text) {
    const t = $("#toast");
    t.textContent = text; t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("show"), 2200);
  }
  function bump() {
    const btn = $("#cartBtn");
    btn.animate(
      [{ transform: "scale(1)" }, { transform: "scale(1.2)" }, { transform: "scale(1)" }],
      { duration: 300 }
    );
  }

  /* ---------- Nav / header ---------- */
  function initNav() {
    const toggle = $("#menuToggle");
    const nav = $("#nav");
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open);
    });
    $$(".nav__link").forEach((l) => l.addEventListener("click", () => {
      nav.classList.remove("open"); toggle.classList.remove("open");
      toggle.setAttribute("aria-expanded", false);
    }));
    window.addEventListener("scroll", () => {
      $("#header").classList.toggle("scrolled", window.scrollY > 10);
    });
  }

  /* ---------- Init ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    renderCategories();
    renderFilters();
    renderProducts();
    renderCart();
    updateCount();
    initNav();

    $("#cartBtn").addEventListener("click", openCart);
    $("#cartClose").addEventListener("click", closeCart);
    $("#cartOverlay").addEventListener("click", closeCart);
    $("#checkoutBtn").addEventListener("click", checkout);
    $("#year").textContent = new Date().getFullYear();
  });
})();
