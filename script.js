/* ========= KONFIGURASI ========= */
const WA_NUMBER = "6281234567890";      // nomor WhatsApp hotel (format 62...)
const PROMOS = { SPOT10: 10 };          // kode promo : persen diskon
const U = id => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1400&q=70`;
// Jika ada gambar yang tidak muncul, ganti ID/URL-nya di sini
const IMG = {
  hero: [U("1551882547-ff40c63fe5fa"), U("1566073771259-6a8506099945"), U("1542314831-068cd1dbfeed")],
  pool: U("1520250497591-112f2f40a3f4"), lounge: U("1470337458703-46ad1756a187"),
  resto: U("1414235077428-338989a2e8c0"), gym: U("1534438327276-14e5300c3a48"),
  spa: U("1540555700478-4be289fbecef"), meeting: U("1431540015161-0bf868a2d407"),
  reguler: U("1631049307264-da0ec9d70304"), eksekutif: U("1566665797739-1674de7a421a"),
  vvip: U("1578774204375-826dc5d996ed"),
  g1: U("1517248135467-4c7edcad34c4"), g2: U("1514933651103-005eec06c04b")
};

/* ========= DATA ========= */
const ROOMS = [
  { id:"reguler", name:"Kamar Reguler", price:650000, cap:"2 tamu", bed:"Single / Double Bed",
    tag:"Pas untuk menginap semalam yang hanya butuh tempat tidur.",
    list:["Tempat tidur nyaman (Single/Double Bed)","Lemari pakaian minimalis dan meja kerja","TV LED dan AC","Pembuat kopi/teh","Kamar mandi standar bersih, shower air hangat/dingin"] },
  { id:"eksekutif", name:"Kamar Eksekutif", price:1250000, cap:"2–3 tamu", bed:"Double / Queen Size",
    tag:"Kenyamanan ekstra dengan pemandangan kota.",
    list:["Ruangan lebih luas dengan city view","Kasur Double/Queen lebih empuk dan lebar","Lemari pakaian besar, TV LED layar datar 43 inci","Sofa santai di dalam kamar","Kamar mandi dengan bathtub elegan dan perlengkapan mandi premium"] },
  { id:"vvip", name:"Kamar VVIP (Penthouse)", price:2800000, cap:"4 tamu", bed:"King Size luxury",
    tag:"Kamar tertinggi dan termewah, dengan panorama terbaik dari lantai teratas.",
    list:["Panoramic view dari lantai tertinggi, kamar sangat luas","Kasur standar luxury hotel yang sangat empuk","Ruang tamu: sofa mewah, Smart TV 55 inci, minibar gratis","2 kamar mandi, masing-masing dengan shower terpisah","Bathtub jacuzzi eksklusif"] }
];
const FACS = [
  { k:"pool", n:"Swimming Pool", hours:"06.00–21.00", d:"Kolam renang outdoor air hangat dengan pemandangan cakrawala kota, lengkap dengan area berjemur dan kursi santai (sun loungers).", ic:"M2 18c2 0 2-1.5 5-1.5S9 18 12 18s2-1.5 5-1.5S19 18 22 18M2 13c2 0 2-1.5 5-1.5S9 13 12 13s2-1.5 5-1.5S19 13 22 13M8 10V4a2 2 0 014 0M15 10V4a2 2 0 014 0" },
  { k:"lounge", n:"Lounge & Bar", hours:"17.00–01.00", d:"Tempat santai elegan di lantai atas dengan koktail premium, anggur pilihan, dan suasana akustik di malam hari.", ic:"M4 4h16l-8 9zM12 13v7M8 20h8" },
  { k:"resto", n:"Restaurant", hours:"06.00–23.00", d:"Restoran utama berkonsep fine dining, menyajikan menu lokal nusantara hingga hidangan internasional kelas atas.", ic:"M6 3v8a2 2 0 002 2v8M10 3v6M6 7h4M17 3c-2 2-2 6 0 8v10" },
  { k:"gym", n:"Gym & Pusat Kebugaran", hours:"05.30–22.00", d:"Ruang fitness modern berstandar internasional, dengan alat angkat beban, treadmill, sepeda statis, dan instruktur profesional.", ic:"M3 9v6M6 7v10M18 7v10M21 9v6M6 12h12" },
  { k:"spa", n:"Spa & Wellness", hours:"10.00–21.00", d:"Layanan relaksasi tubuh, pijat tradisional, aromaterapi, dan sauna untuk memulihkan kebugaran tamu.", ic:"M12 21c-5 0-8-3-8-8 4 0 7 2 8 5 1-3 4-5 8-5 0 5-3 8-8 8zM12 17c-2-3-2-8 0-12 2 4 2 9 0 12z" },
  { k:"meeting", n:"Meeting & Event Rooms", hours:"08.00–22.00", d:"Ruang pertemuan berteknologi tinggi yang fleksibel untuk acara korporat, seminar, maupun resepsi pernikahan privat.", ic:"M3 5h18v11H3zM8 20h8M12 16v4" }
];
const MENUS = [
  { g:"bar", t:"Bar & Lounge – Minuman", i:[["Signature Cocktails","Racikan bartender dengan bahan lokal dan rempah",95000],["Mocktails","Segar tanpa alkohol, dengan buah musiman",55000],["Premium Wines","Pilihan red, white, dan sparkling per gelas",120000],["Artisan Coffee","Biji pilihan, espresso atau manual brew",45000],["Imported Teas","Teh daun utuh dari berbagai negara",42000]] },
  { g:"bar", t:"Bar & Lounge – Tapas", i:[["Truffle Fries","Kentang goreng, minyak truffle, parmesan",75000],["Nachos Supreme","Keju leleh, salsa, guacamole",68000],["Mini Wagyu Sliders","Tiga burger mini wagyu",110000],["Cheese Platter","Aneka keju, buah kering, kacang, roti",135000]] },
  { g:"resto", t:"Restaurant – Hidangan Pembuka", i:[["Caesar Salad","Romaine, crouton, parmesan, saus caesar",65000],["Mushroom Soup","Sup krim jamur hangat dengan roti bawang",58000]] },
  { g:"resto", t:"Restaurant – Hidangan Utama", i:[["Nasi Goreng Spesial Hotel on Spot","Telur mata sapi, ayam suwir, sate, kerupuk",85000],["Grilled Australian Sirloin Steak","Sirloin panggang, kentang tumbuk, saus lada hitam",245000],["Pan-Seared Salmon with Lemon Butter Sauce","Salmon sangrai, saus mentega lemon, sayur panggang",195000],["Pasta Carbonara","Spaghetti, krim, telur, daging asap",110000]] },
  { g:"resto", t:"Restaurant – Hidangan Penutup", i:[["Tiramisu Classic","Mascarpone, kopi, kakao",72000],["Molten Lava Cake","Cokelat lumer dengan es krim vanilla",78000]] }
];
const REVIEWS = [
  ["Rina A.","Kamar Eksekutif","Pemandangan kotanya luar biasa dan bathtub-nya nyaman. Resepsionis sigap saat AC perlu dicek."],
  ["Budi S.","Perjalanan bisnis","Ruang meeting lengkap, sarapan enak, dan lokasinya dekat stasiun sehingga mudah ke mana-mana."],
  ["Clara W.","Kamar VVIP","Menginap untuk anniversary. Jacuzzi dan panorama malam harinya sulit dilupakan."]
];
const SOC = [
  ["Instagram","https://instagram.com/","M7 3h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4zm5 5a4 4 0 100 8 4 4 0 000-8z"],
  ["Facebook","https://facebook.com/","M14 8h3V4h-3a4 4 0 00-4 4v2H7v4h3v8h4v-8h3l1-4h-4V8z"],
  ["Twitter/X","https://x.com/","M4 4l16 16M20 4L4 20"],
  ["WhatsApp","https://wa.me/" + WA_NUMBER,"M3 21l1.6-4.8A8.5 8.5 0 1112 20.5a8.5 8.5 0 01-4-1L3 21zm6-12c0 3 3 6 6 6l1.5-1.5-2-1-1 .8c-1-.4-2-1.4-2.4-2.4l.8-1-1-2L9 9z"],
  ["YouTube","https://youtube.com/","M3 8a3 3 0 013-3h12a3 3 0 013 3v8a3 3 0 01-3 3H6a3 3 0 01-3-3V8zm7 1.5v5l4.5-2.5L10 9.5z"]
];

/* ========= HELPER ========= */
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const rp = n => "Rp " + n.toLocaleString("id-ID");
const ph = (src, h, cap, extra = "") =>
  `<div class="ph ${extra}" style="height:${h}px"><img src="${src}" alt="${cap || ""}" loading="lazy" onerror="this.remove()">${cap ? `<span class="cap">${cap}</span>` : ""}</div>`;
function toast(m){ const t = $("#toast"); t.textContent = m; t.style.display = "block"; clearTimeout(toast.t); toast.t = setTimeout(() => t.style.display = "none", 3000); }

/* ========= RENDER ========= */
$("#slides").innerHTML = IMG.hero.map((s, i) => `<div class="slide ${i ? "" : "on"}" style="background-image:url('${s}')"></div>`).join("");
$("#dots").innerHTML = IMG.hero.map((_, i) => `<button class="${i ? "" : "on"}" aria-label="Slide ${i + 1}"></button>`).join("");

$("#room-prev").innerHTML = ROOMS.map(r => `
  <article class="card lift rv">${ph(IMG[r.id], 220, r.cap)}
    <div class="p-6"><h3 class="text-3xl">${r.name}</h3><p class="mute mt-2 text-sm">${r.tag}</p>
    <p class="gold serif text-3xl mt-3">${rp(r.price)} <span class="text-sm" style="font-family:Jost">/ malam</span></p>
    <div class="mt-4 flex gap-2 flex-wrap"><button class="btn btn-o" data-detail="${r.id}">Detail</button><a class="btn" href="#booking" data-pick="${r.id}">Pesan</a></div></div></article>`).join("");

$("#fac-prev").innerHTML = FACS.map(f => `<a href="#fasilitas" class="card tile rv"><svg viewBox="0 0 24 24"><path d="${f.ic}"/></svg><p class="serif text-2xl">${f.n}</p></a>`).join("");
$("#reviews").innerHTML = REVIEWS.map(r => `<blockquote class="card p-7 lift rv"><p class="stars" aria-label="5 dari 5 bintang">★★★★★</p><p class="mt-3">${r[2]}</p><p class="mt-4 text-sm mute">${r[0]}, ${r[1]}</p></blockquote>`).join("");
$("#fh").src = IMG.pool;
$("#fac-list").innerHTML = FACS.map((f, i) => `
  <article class="grid gap-8 md:grid-cols-2 items-center rv">
    <div class="${i % 2 ? "md:order-2" : ""}">${ph(IMG[f.k], 340, f.n, "zoom")}</div>
    <div><h2 class="title" style="font-size:2.4rem">${f.n}</h2><div class="rule"></div><p>${f.d}</p><p class="gold mt-3">Jam operasional: ${f.hours}</p></div>
  </article>`).join("");

const GAL = [[IMG.lounge,"Lounge & Bar"],[IMG.resto,"Restaurant"],[IMG.g1,"Fine dining"],[IMG.g2,"Suasana malam"]];
$("#gallery").innerHTML = GAL.map((g, i) => `<button class="ph zoom" style="height:230px;border:0;padding:0;cursor:zoom-in" data-g="${i}"><img src="${g[0]}" alt="${g[1]}" loading="lazy" onerror="this.remove()"><span class="cap">${g[1]}</span></button>`).join("");

function renderMenu(g){
  $("#menus").innerHTML = MENUS.filter(m => g === "all" || m.g === g).map(m => `<div><h2 class="serif text-3xl mb-1">${m.t}</h2>${m.i.map(x => `<div class="menu-row"><div><p style="font-weight:400">${x[0]}</p><p class="text-sm mute">${x[1]}</p></div><p class="gold whitespace-nowrap">${rp(x[2])}</p></div>`).join("")}</div>`).join("");
  $$("#mtabs button").forEach(b => b.classList.toggle("on", b.dataset.g === g));
}
$("#mtabs").innerHTML = [["all","Semua"],["bar","Bar & Lounge"],["resto","Restaurant"]].map(t => `<button data-g="${t[0]}">${t[1]}</button>`).join("");
$("#mtabs").onclick = e => { if (e.target.dataset.g) renderMenu(e.target.dataset.g); };
renderMenu("all");

$("#rooms").innerHTML = ROOMS.map(r => `
  <article class="card lift flex flex-col rv">${ph(IMG[r.id], 230, r.cap + " · " + r.bed)}
    <div class="p-6 flex flex-col flex-1"><h2 class="serif text-3xl">${r.name}</h2>
    <ul class="mt-3 space-y-1 list-disc pl-5 flex-1">${r.list.map(l => `<li>${l}</li>`).join("")}</ul>
    <p class="gold serif text-3xl mt-4">${rp(r.price)} <span class="text-sm" style="font-family:Jost">/ malam</span></p>
    <button class="btn mt-3" data-pick="${r.id}" type="button">Pilih kamar ini</button></div></article>`).join("");
$("#rt").innerHTML = ROOMS.map(r => `<option value="${r.id}">${r.name} – ${rp(r.price)}</option>`).join("");
$("#soc").innerHTML = SOC.map(s => `<a href="${s[1]}" target="_blank" rel="noopener" aria-label="${s[0]}" class="w-11 h-11 rounded-full flex items-center justify-center transition hover:bg-[#d6b36a] hover:text-black" style="border:1px solid var(--gold2);color:var(--gold2)"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="${s[2]}"/></svg></a>`).join("");

/* ========= NAVIGASI ========= */
const PAGES = [["home","Home"],["fasilitas","Fasilitas"],["resto","Restaurant & Bar/Lounge"],["booking","Booking / Check-in / Kamar"]];
const navHTML = PAGES.map(p => `<a href="#${p[0]}" data-p="${p[0]}">${p[1]}</a>`).join("");
$("#nav").innerHTML = navHTML; $("#mnav").innerHTML = navHTML;
let page = "home";
function header(){ $("#hdr").classList.toggle("solid", scrollY > 40 || page !== "home"); $("#top").style.display = scrollY > 500 ? "block" : "none"; }
function show(){
  page = (location.hash || "#home").slice(1);
  if (!PAGES.some(p => p[0] === page)) page = "home";
  $$(".view").forEach(v => v.classList.toggle("on", v.id === "v-" + page));
  $$("[data-p]").forEach(a => a.classList.toggle("on", a.dataset.p === page));
  $("#mnav").classList.add("hidden"); $("#mnav").classList.remove("flex");
  $("#burger").setAttribute("aria-expanded", "false");
  scrollTo(0, 0); header(); observe();
}
addEventListener("hashchange", show);
addEventListener("scroll", header, { passive: true });
$("#burger").onclick = () => { const m = $("#mnav"), h = m.classList.toggle("hidden"); m.classList.toggle("flex", !h); $("#burger").setAttribute("aria-expanded", String(!h)); };
$("#top").onclick = () => scrollTo({ top: 0, behavior: "smooth" });

/* ========= EFEK: slideshow, reveal, counter ========= */
let si = 0;
const slides = $$(".slide"), dots = $$("#dots button");
function go(n){ si = n; slides.forEach((s, i) => s.classList.toggle("on", i === n)); dots.forEach((d, i) => d.classList.toggle("on", i === n)); }
dots.forEach((d, i) => d.onclick = () => go(i));
setInterval(() => go((si + 1) % slides.length), 6500);

const io = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  e.target.classList.add("in"); io.unobserve(e.target);
}), { threshold: .12 });
function observe(){ $$(".view.on .rv").forEach(el => io.observe(el)); }
const cio = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  const el = e.target, to = +el.dataset.n; let c = 0;
  const t = setInterval(() => { c += Math.ceil(to / 40); if (c >= to) { c = to; clearInterval(t); } el.textContent = c + (to > 100 ? "+" : ""); }, 30);
  cio.unobserve(el);
}), { threshold: .6 });
$$("[data-n]").forEach(el => cio.observe(el));

/* ========= MODAL & LIGHTBOX ========= */
const ov = $("#ov");
const open = html => { $("#ovc").innerHTML = html; ov.classList.add("on"); };
const close = () => ov.classList.remove("on");
ov.onclick = e => { if (e.target === ov || e.target.classList.contains("x")) close(); };
addEventListener("keydown", e => { if (e.key === "Escape") close(); });
document.addEventListener("click", e => {
  const d = e.target.closest("[data-detail]");
  if (d) {
    const r = ROOMS.find(x => x.id === d.dataset.detail);
    open(`<div class="modal">${ph(IMG[r.id], 300)}<div class="p-7"><h2 class="title" style="font-size:2.4rem">${r.name}</h2><p class="mute mt-1">${r.cap} · ${r.bed}</p><ul class="mt-4 space-y-1 list-disc pl-5">${r.list.map(l => `<li>${l}</li>`).join("")}</ul><p class="gold serif text-3xl mt-5">${rp(r.price)} / malam</p><a class="btn mt-4" href="#booking" data-pick="${r.id}">Pesan kamar ini</a></div></div>`);
  }
  const g = e.target.closest("[data-g]");
  if (g && g.dataset.g.length === 1) open(`<img src="${GAL[g.dataset.g][0]}" alt="" style="max-height:88vh;max-width:100%;margin:auto">`);
  const p = e.target.closest("[data-pick]");
  if (p) {
    close(); $("#rt").value = p.dataset.pick; calc();
    if (location.hash !== "#booking") location.hash = "booking";
    setTimeout(() => $("#bf").scrollIntoView({ behavior: "smooth" }), 80);
  }
});

/* ========= BOOKING ========= */
const today = new Date().toISOString().slice(0, 10);
["ci", "co", "qin", "qout"].forEach(id => $("#" + id).min = today);
const nights = () => { const a = new Date($("#ci").value), b = new Date($("#co").value); return b > a ? Math.round((b - a) / 864e5) : 0; };
function calc(){
  const r = ROOMS.find(x => x.id === $("#rt").value), n = nights();
  const code = $("#pr").value.trim().toUpperCase(), disc = PROMOS[code] || 0;
  if (!n) { $("#sum").textContent = "Pilih tanggal dan tipe kamar untuk melihat estimasi biaya."; return null; }
  const sub = r.price * n, total = Math.round(sub * (100 - disc) / 100);
  $("#sum").innerHTML = `<p>${r.name} × ${n} malam</p><p>Subtotal: ${rp(sub)}</p>${disc ? `<p class="gold">Promo ${code}: −${disc}%</p>` : code ? `<p>Kode promo tidak dikenali.</p>` : ""}<p class="serif text-3xl mt-2" style="color:var(--ink)">${rp(total)}</p>`;
  return { r, n, total, disc, code };
}
["ci", "co", "rt", "pr"].forEach(id => $("#" + id).addEventListener("input", calc));
$("#quick").addEventListener("submit", e => {
  e.preventDefault();
  $("#ci").value = $("#qin").value; $("#co").value = $("#qout").value; $("#gs").value = $("#qg").value;
  calc(); location.hash = "booking";
  setTimeout(() => $("#bf").scrollIntoView({ behavior: "smooth" }), 80);
});
$("#bf").addEventListener("submit", e => {
  e.preventDefault();
  const err = m => { $("#err").textContent = m; };
  const name = $("#nm").value.trim(), hp = $("#hp").value.replace(/[\s-]/g, "");
  if (!$("#ci").value || !$("#co").value) return err("Isi tanggal kedatangan dan keberangkatan.");
  if (!nights()) return err("Tanggal keberangkatan harus setelah tanggal kedatangan.");
  if (name.length < 3) return err("Isi nama lengkap tamu.");
  if (!/^(\+62|62|0)8\d{7,12}$/.test(hp)) return err("Nomor telepon tidak valid. Contoh: 081234567890.");
  err("");
  const c = calc(), rq = $("#rq").value.trim();
  const msg = ["Halo Hotel on Spot, saya ingin memesan kamar:", "",
    "Nama: " + name, "No. HP: " + hp, "Tipe kamar: " + c.r.name,
    "Check-in: " + $("#ci").value, "Check-out: " + $("#co").value + " (" + c.n + " malam)",
    "Jumlah tamu: " + $("#gs").value,
    c.disc ? "Kode promo: " + c.code + " (−" + c.disc + "%)" : null,
    "Estimasi total: " + rp(c.total),
    rq ? "Permintaan khusus: " + rq : null, "",
    "Mohon konfirmasi ketersediaannya. Terima kasih."].filter(x => x !== null).join("\n");
  toast("Membuka WhatsApp…");
  window.open("https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(msg), "_blank", "noopener");
});

show();
