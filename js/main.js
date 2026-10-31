/* =====================================================================
   EDIT HERE – all text, names, quiz, notes and message live in this block
   ===================================================================== */
const CONFIG = {
  nickname: "Manquosha",     // big name on the page
  realName: "Mennah",
  age: 22,
  birthdayMonth: 11,         // 11 = November
  birthdayDay: 8,
  footer: "made with love, by Ayoyyy (Ayah)",

  // Photos: assets/images/1.jpg, 2.jpg, 3.jpg ... (fewer photos? the missing ones are skipped)
  photoCount: 44,
  photoPrefix: "assets/images/",
  photoExt: ".jpeg",

  // Quiz: answer = number of the right option (1 = first)
  quiz: [
    { q: "هتسمعي ريك العيد إمتى؟", options: ["هسمعه حالًا", "هسمعه دلوقتي", "هسمعه دلوقتي أهو"], answer: 1 },
    { q: "بتحبيني بقالك كام سنة؟", options: ["22 سنة", "22 سنة بحبك و6 سنين بحبك موت", "طول عمرك (22)"], answer: 2 },
    { q: "بتحبيني قد إيه؟", options: ["قد البحر الكبير", "قد البحر وسمكاته", "قد البحر الكبير والصغير وسمكاتهم"], answer: 3 }
  ],
  wrongLines: ["لا يشيخة ؟!", "اتقي الله يست منقوشة بقا", "هكسر عضمك وربنا لما أشوفك بس 😡", "هسجلك ريك ساعة أقسم بالله"],

  notes: [
    { text: "ان شاء الله هتجوز حد أذكي مني علشان مستقبل الكيدز بتوعي 🙏🏻🙏🏻", by: "Ayooy" },
    { text: "ساعات بحس ان احنا زي لوفي وزورو ( خمني أنا مين وانتي مين فيهم )", by: "Ayooy" },
    { text: "بما إنك بتقوليلي ي دوري ع طول بس لو بقيت دوري بجد مش هنساكي ( أتمني يعني) ", by: "Ayooy" },
    { text: "نفسي ف مرة أحس انك بتحبيني اكتر من السينابون!!", by: "Ayooy" }
  ],

  // The gift button runs away once for each line except the last (the last click works)
  prankLines: ["Hey, not so fast 😏", "Almost… 😂", "Nope! 🏃‍♀️", "Too slow!", "Are you even trying? 😭",
    "This one is real… (it's not)", "Wrong button! 😂", "I'm tired… but NO", "Last one, I promise 🤞", "Fine, you win 🎁"],

  message:
`كل سنة وإنتِ طيبة يا منقوشتييي! 🤎
مش عارفة أبدأ أقولك إيه، بس عايزة أقولك إني مبسوطة جدًا إنك موجودة في حياتي، وإن من ضمن الحاجات الحلوة اللي حصلتلي إني عرفتك وبقينا أصحاب.
يمكن إحنا بقالنا حوالي 6 سنين أصحاب، بس أنا حاسة إني أعرفك من زمان أوي، وعارفين عن بعض تفاصيل وحكايات كتير يمكن ناس متعرفهاش عن بعض حتى بعد سنين أطول.
شكرًا إنك بتسمعي كل الريكس الطويلة بتاعتي، وكل حواراتي اللي مبتخلصش، وكل حكاية جديدة بتظهر فجأة في حياتي، وإنك لسه مستحملاني لحد دلوقتي 😂
بجد أنا بحب شخصيتك جدًا، وبحب إنك قوية وطموحة، وساعات كتير طموحك بيخليني أنا كمان أتحمس وأفكر بشكل أكبر في الحاجات اللي نفسي أحققها. أتمنى تفضلي دايمًا عندك نفس الشغف والطموح، وتوصلي لكل حاجة نفسك فيها.
ونفسي نفضل موجودين في حياة بعض في كل المراحل اللي جاية، ونشوف نفسنا وإحنا بنحقق أحلامنا واحدة واحدة.
وعلى فكرة، لسه عندنا حاجات كتير أوي لازم نعملها:
نسافر تركيا وناكل كل الأكل اللي هناك، ونروح فرنسا ونسمع الفار الطباخ ونعمل خلطبيطة بالصلصة 😂، ونلف العالم ونجرّب حاجات جديدة، وكل واحدة تجيب عربيتها ونسوق سوا، وطبعًا لما نتجوز إن شاء الله نخلي جوزي وجوزك أصحاب، وولادنا كمان يبقوا أصحاب، يعني باختصار إحنا لسه مخططين لحياة كاملة ومش مسموح لحد ينسحب من الخطة دي 😂
أنا مش عارفة المستقبل مخبيلنا إيه، بس أتمنى مهما اتغيرت حياتنا وانشغلنا، نفضل دايمًا نلاقي وقت لبعض، ونفضل نحكي لبعض عن كل حاجة، ونشارك بعض التفاصيل الصغيرة قبل الكبيرة.
أتمنى سنتك الجديدة تكون مليانة نجاح وفرص حلوة وحاجات تفرح قلبك، وإنك تشوفي نفسك في المكان اللي بتحلمي توصليله.
Happy birthday, my forever Manquoshtyyy. 🤎
بحبك يا منقوشة، وإن شاء الله نفضل نكتب فصول كتير أوي من حكايتنا سوا.
No matter how many chapters life gives us, I hope we always find our way into each other's stories.
With love,
ايوي ♡`
};

/* ===================================================================== */
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const $ = id => document.getElementById(id);

/* ---------- Fill the text ---------- */
$("heroKicker").textContent = `happy birthday · turning ${CONFIG.age}`;
$("heroName").textContent = CONFIG.nickname;
$("heroSub").textContent = `${CONFIG.realName}, I put our little world in one place, just for you.`;
$("foot").textContent = CONFIG.footer + " ♡";
$("notes").innerHTML = CONFIG.notes.map((n, i) =>
  `<div class="sticky" style="transform:rotate(${[-3, 2, -1.5, 3][i % 4]}deg)"><span dir="auto">${n.text}</span><small>— ${n.by}</small></div>`).join("");

/* ---------- Gate: gift → quiz → open ---------- */
let qi = 0;
$("giftBtn").addEventListener("click", () => {
  if ($("giftBtn").classList.contains("open") || !$("quiz").hidden) return;
  $("gateTap").hidden = true; $("gateHint").textContent = "answer to unlock your gift ♡";
  $("quiz").hidden = false; showQuestion();
});
function showQuestion() {
  const q = CONFIG.quiz[qi];
  $("quizCount").textContent = `${qi + 1} / ${CONFIG.quiz.length}`;
  $("quizQ").textContent = q.q; $("quizMsg").textContent = "";
  $("quizOpts").innerHTML = "";
  q.options.forEach((opt, i) => {
    const b = document.createElement("button"); b.textContent = opt;
    b.onclick = () => {
      if (i + 1 === q.answer) { qi++; qi < CONFIG.quiz.length ? showQuestion() : openGift(); }
      else { b.classList.remove("wrong"); void b.offsetWidth; b.classList.add("wrong");
        $("quizMsg").textContent = CONFIG.wrongLines[Math.floor(Math.random() * CONFIG.wrongLines.length)]; }
    };
    $("quizOpts").appendChild(b);
  });
}
function openGift() {
  $("quiz").hidden = true; $("gateHint").textContent = "you did it ♡";
  $("giftBtn").classList.add("open"); confetti();
  setTimeout(() => {
    $("gate").classList.add("gone"); $("page").hidden = false; $("musicBtn").hidden = false;
    document.body.classList.remove("locked"); scrollTo(0, 0);
  }, reduceMotion ? 0 : 1100);
}

function confetti() {
  if (reduceMotion) return;
  const colors = ["#A1846B", "#D8C4AA", "#765642", "#FCF9F4", "#4A3028"];
  for (let i = 0; i < 45; i++) {
    const p = document.createElement("i"); p.className = "confetti";
    p.style.left = Math.random() * 100 + "vw"; p.style.background = colors[i % 5];
    p.style.animationDelay = Math.random() * .7 + "s";
    document.body.appendChild(p); setTimeout(() => p.remove(), 4600);
  }
}

/* ---------- Countdown ---------- */
function tick() {
  const now = new Date(), m = CONFIG.birthdayMonth - 1, d = CONFIG.birthdayDay;
  if (now.getMonth() === m && now.getDate() === d) { $("countdown").innerHTML = '<p class="cd-today">Today is your day ♡</p>'; return; }
  let t = new Date(now.getFullYear(), m, d); if (t < now) t = new Date(now.getFullYear() + 1, m, d);
  const s = Math.floor((t - now) / 1000);
  $("countdown").innerHTML = [["days", Math.floor(s / 86400)], ["hours", Math.floor(s / 3600) % 24], ["min", Math.floor(s / 60) % 60], ["sec", s % 60]]
    .map(([l, v]) => `<div class="cd-box"><b>${v}</b><span>${l}</span></div>`).join("");
}
tick(); setInterval(tick, 1000);

/* ---------- Photo garlands + balloons & flowers in between ---------- */
const pick = arr => arr[Math.floor(Math.random() * arr.length)];
function decoSvg() {
  const c = pick(["#D8B9A6", "#D8C4AA", "#C9A38A", "#B88E72", "#E7CFC4"]);
  if (Math.random() < .55) {   // balloon
    return `<svg viewBox="0 0 40 90"><ellipse cx="20" cy="22" rx="16" ry="20" fill="${c}"/><path d="M20 42l-4 6h8z" fill="${c}"/><path d="M20 48q-7 14 0 38" fill="none" stroke="#A1846B" stroke-width="1.5"/><ellipse cx="13" cy="14" rx="4" ry="7" fill="#fff" opacity=".35"/></svg>`;
  }
  const petals = [0, 72, 144, 216, 288].map(a => `<circle cx="25" cy="12" r="9" transform="rotate(${a} 25 25)"/>`).join("");
  return `<svg viewBox="0 0 50 90"><path d="M25 38q-4 25 0 50" fill="none" stroke="#A1846B" stroke-width="2"/><g fill="${c}">${petals}</g><circle cx="25" cy="25" r="6" fill="#E9C98F"/></svg>`;
}
function decorRow(count) {
  const row = document.createElement("div"); row.className = "decor"; row.setAttribute("aria-hidden", "true");
  for (let i = 0; i < count; i++) {
    const s = document.createElement("div"); s.className = "deco"; s.innerHTML = decoSvg();
    s.style.width = 30 + Math.random() * 22 + "px"; s.style.setProperty("--d", (-Math.random() * 5).toFixed(1) + "s");
    row.appendChild(s);
  }
  return row;
}
let lastPer = 0;
function buildGarlands() {
  const per = innerWidth < 520 ? 3 : innerWidth < 900 ? 4 : 6;
  if (per === lastPer) return; lastPer = per;
  const wrap = $("garlands"); wrap.innerHTML = "";
  for (let start = 1; start <= CONFIG.photoCount; start += per) {
    const row = document.createElement("div"); row.className = "garland"; row.style.setProperty("--per", per);
    for (let j = 0; j < per && start + j <= CONFIG.photoCount; j++) {
      const n = start + j, b = document.createElement("button"); b.className = "hang"; b.setAttribute("aria-label", "Open photo " + n);
      b.style.setProperty("--sag", Math.round(Math.sin(Math.PI * (j + .5) / per) * 26) + "px");
      b.style.setProperty("--r", (j % 2 ? 2 : -2) + "deg"); b.style.setProperty("--d", (-Math.random() * 4).toFixed(1) + "s");
      const img = new Image(); img.loading = "lazy"; img.alt = "Photo " + n;
      const exts = [CONFIG.photoExt, ".jpg", ".jpeg", ".png", ".webp", ".JPG", ".JPEG", ".PNG"];
      let tryIndex = 0;
      img.src = CONFIG.photoPrefix + n + exts[0];
      img.onerror = () => {                                  // wrong extension? try the next one
        tryIndex++;
        if (tryIndex < exts.length) img.src = CONFIG.photoPrefix + n + exts[tryIndex];
        else b.remove();                                     // not found at all: skip this photo
      };                       // missing photo? just skip it
      b.appendChild(img); b.onclick = () => zoom(img.src); row.appendChild(b);
    }
    wrap.appendChild(row);
    if (start + per <= CONFIG.photoCount) wrap.appendChild(decorRow(per + 1));
  }
}
function zoom(src) {
  const z = document.createElement("div"); z.className = "zoom"; z.innerHTML = `<img src="${src}" alt="">`;
  const close = () => { z.remove(); removeEventListener("keydown", esc); }, esc = e => e.key === "Escape" && close();
  z.onclick = close; addEventListener("keydown", esc); document.body.appendChild(z);
}
buildGarlands(); addEventListener("resize", buildGarlands);

/* ---------- Video curtains ---------- */
document.querySelectorAll(".curtain").forEach(c => c.addEventListener("click", () => c.parentElement.classList.add("peek")));

/* ---------- Music (only when she taps) ---------- */
$("musicBtn").addEventListener("click", () => {
  const a = $("music");
  if (a.paused) a.play().then(() => $("musicBtn").classList.add("playing")).catch(() => alert("Add your song at assets/audio/music.mp3"));
  else { a.pause(); $("musicBtn").classList.remove("playing"); }
});

/* ---------- Gift button: runs away, fake buttons, then the typed message ---------- */
const zone = $("prankZone"), giftBtn = $("messageBtn"), needed = CONFIG.prankLines.length - 1;
let dodges = 0, lastDodge = 0, typed = false;
const rand = (a, b) => a + Math.random() * (b - a);

function spawnDecoys() {
  for (let i = 0; i < 3; i++) {
    const d = document.createElement("button"); d.className = "btn decoy"; d.textContent = "🎁 Your birthday gift";
    d.style.left = rand(18, 82) + "%"; d.style.top = rand(15, 85) + "%";
    d.onclick = () => { d.textContent = "WRONG ONE 😂"; setTimeout(() => d.remove(), 800); };
    zone.appendChild(d);
  }
}
function dodge() {
  dodges++; lastDodge = Date.now();
  giftBtn.style.left = rand(15, 85) + "%"; giftBtn.style.top = rand(15, 85) + "%";
  giftBtn.style.fontSize = Math.max(.75, 1.1 - dodges * .04) + "rem";   // gets smaller each time
  giftBtn.textContent = CONFIG.prankLines[dodges - 1];
  if (dodges === 4) spawnDecoys();
  if (dodges === needed - 1) zone.querySelectorAll(".decoy").forEach(d => d.remove());
  if (dodges === needed) {                                              // finally: centered and big
    giftBtn.style.left = "50%"; giftBtn.style.top = "50%"; giftBtn.style.fontSize = "1.4rem";
    giftBtn.textContent = CONFIG.prankLines[needed];
  }
}
giftBtn.addEventListener("pointerenter", e => {   // mouse chases it; touch uses the click below
  if (e.pointerType === "mouse" && dodges < needed && Date.now() - lastDodge > 450) dodge();
});
giftBtn.addEventListener("click", () => {
  if (dodges < needed) { dodge(); return; }
  if (typed) return; typed = true; zone.hidden = true; $("letter").hidden = false; confetti();
  typeMessage();
});

function typeMessage() {
  const box = $("letterText");
  const paras = CONFIG.message.split("\n").filter(l => l.trim()).map(line => {
    const p = document.createElement("p"); p.dir = "auto"; box.appendChild(p); return { p, line };
  });
  const finish = () => paras.forEach(({ p, line }) => p.textContent = line);
  if (reduceMotion) return finish();
  let pi = 0, ci = 0;
  const timer = setInterval(() => {
    const cur = paras[pi]; cur.p.textContent = cur.line.slice(0, ++ci);
    if (ci >= cur.line.length) { pi++; ci = 0; if (pi >= paras.length) clearInterval(timer); }
  }, 22);
  $("letter").addEventListener("click", () => { clearInterval(timer); finish(); }, { once: true });   // tap the letter = show everything
}
