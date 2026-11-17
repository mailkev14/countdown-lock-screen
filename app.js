/**
 * COUNTDOWN LOCK SCREEN STUDIO - UNIFIED APPLICATION ENGINE
 * Supports:
 * - Version 1: Horizon (Glassmorphic Tech Career HUD)
 * - Version 2: Chronos (Minimalist Swiss Editorial Capstone)
 */

// ==========================================
// PRESETS DATA FOR BOTH EDITIONS
// ==========================================
const HORIZON_PRESETS = {
  career: {
    id: "career",
    category: "HANDSHAKE SPRINT",
    title: "Dream Tech Offer Signed",
    subtitle: "Reverse-Engineered 30-Day Action Roadmap",
    targetDate: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000 + 14 * 60 * 60 * 1000),
    startDate: new Date(Date.now() - 9 * 24 * 60 * 60 * 1000),
    palette: "cyan",
    quote: "“Focus only on the milestone in front of you. The deadline takes care of itself.”",
    milestones: [
      { id: 1, label: "M-30", title: "Handshake Profile & Resume Overhaul", desc: "Keywords tuned for ATS, headline polished, 3 projects linked", status: "completed", date: "Nov 16" },
      { id: 2, label: "M-21", title: "20 Tailored Applications & Portfolio V1", desc: "Submit through Handshake, outreach to 5 alumni for referrals", status: "active", date: "Nov 23" },
      { id: 3, label: "M-14", title: "Technical Coding & Behavioral Mocks", desc: "10 LeetCode mediums, STAR method practice for top 8 stories", status: "upcoming", date: "Nov 30" },
      { id: 4, label: "M-07", title: "Final Round Onsite Interviews", desc: "System design review, executive panel, thank-you notes sent", status: "upcoming", date: "Dec 07" },
      { id: 5, label: "M-00", title: "Offer Letter Negotiated & Accepted", desc: "Compensation benchmarked, start date confirmed, celebrate!", status: "victory", date: "Dec 16" }
    ]
  },
  hackathon: {
    id: "hackathon",
    category: "GEMINI BUILDER",
    title: "Project Genesis: Ship Day",
    subtitle: "Autonomous AI Agent Hackathon Sprint",
    targetDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000 + 3 * 60 * 60 * 1000),
    startDate: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000),
    palette: "emerald",
    quote: "“Ideas are cheap. Shipping is what builds the future.”",
    milestones: [
      { id: 1, label: "M-21", title: "System Architecture & Gemini Integration", desc: "Function calling schemas defined, multi-agent orchestration tested", status: "completed", date: "Nov 02" },
      { id: 2, label: "M-14", title: "Core MVP & Autonomous Pipeline Functional", desc: "End-to-end task execution running in sub-500ms latency", status: "completed", date: "Nov 09" },
      { id: 3, label: "M-07", title: "Alpha User Testing & Friction Elimination", desc: "Onboarded 12 beta testers, eliminated edge cases in prompt chaining", status: "completed", date: "Nov 16" },
      { id: 4, label: "M-03", title: "Demo Video, Pitch Deck & Deployment", desc: "2-minute screencast, production domain SSL, cloud scalability check", status: "active", date: "Nov 21" },
      { id: 5, label: "M-00", title: "Live Demo Day & Public Product Launch", desc: "Live pitch to judges, submit to Handshake AI Skills Studio!", status: "victory", date: "Nov 23" }
    ]
  },
  capstone: {
    id: "capstone",
    category: "ACADEMIC SUMMIT",
    title: "Capstone & Degree Conferred",
    subtitle: "Finals Mastery & Oral Thesis Defense",
    targetDate: new Date(Date.now() + 32 * 24 * 60 * 60 * 1000 + 8 * 60 * 60 * 1000),
    startDate: new Date(Date.now() - 13 * 24 * 60 * 60 * 1000),
    palette: "amber",
    quote: "“Every great achievement is just a sequence of small, completed milestones.”",
    milestones: [
      { id: 1, label: "M-45", title: "Final Research & Dataset Freeze", desc: "Experimental runs validated, statistical analysis compiled", status: "completed", date: "Nov 03" },
      { id: 2, label: "M-28", title: "Manuscript Draft 1 to Committee", desc: "Complete 45-page writeup with methodology, figures & citations", status: "active", date: "Nov 24" },
      { id: 3, label: "M-18", title: "Advisor Revisions & Final Edits", desc: "Integrate faculty feedback, format according to university rubric", status: "upcoming", date: "Dec 01" },
      { id: 4, label: "M-06", title: "Slide Deck & 3x Timed Rehearsals", desc: "20-minute timed presentation with anticipated Q&A defense slides", status: "upcoming", date: "Dec 12" },
      { id: 5, label: "M-00", title: "Defense Mastered & Commencement", desc: "Degree awarded, gown donned, celebratory dinner with family!", status: "victory", date: "Dec 18" }
    ]
  }
};

const CHRONOS_PRESETS = {
  thesis: {
    id: "thesis",
    category: "PROJECT NO. 01 — THE FINAL ASCENT",
    title: "Thesis Defense & Degree",
    subtitle: "Reverse-Engineered 45-Day Capstone Manuscript to Commencement",
    targetDate: new Date(Date.now() + 32 * 24 * 60 * 60 * 1000 + 8 * 60 * 60 * 1000),
    startDate: new Date(Date.now() - 13 * 24 * 60 * 60 * 1000),
    paperStyle: "dark", // 'dark' | 'light'
    quote: "“Nulla dies sine linea — No day without a line. Every milestone brings the summit closer.”",
    milestones: [
      { id: 1, num: "I.", label: "M-45", title: "Research Scope & Dataset Freeze", desc: "Experimental data verified, baseline benchmarks established", status: "completed", date: "Nov 03" },
      { id: 2, num: "II.", label: "M-28", title: "Manuscript Draft to Committee", desc: "Complete 40-page draft with abstract, figures, results & citations", status: "active", date: "Nov 24" },
      { id: 3, num: "III.", label: "M-18", title: "Faculty Revisions & Rubric", desc: "Integrate advisor critiques and format for official university registry", status: "upcoming", date: "Dec 01" },
      { id: 4, num: "IV.", label: "M-06", title: "Defense Slides & 3x Rehearsals", desc: "20-minute timed presentation with anticipated Q&A defense slides", status: "upcoming", date: "Dec 12" },
      { id: 5, num: "V.", label: "M-00", title: "Oral Defense & Degree Conferred", desc: "Committee signature obtained, degree awarded, celebratory dinner", status: "victory", date: "Dec 18" }
    ]
  }
};

const HORIZON_PALETTES = {
  cyan: { bg1: "#070913", bg2: "#0a192f", bg3: "#030712", accent: "#38bdf8", accentDark: "#0284c7", glow: "rgba(56, 189, 248, 0.2)", pillBg: "rgba(56, 189, 248, 0.15)", pillText: "#7dd3fc" },
  amber: { bg1: "#0b0813", bg2: "#24123a", bg3: "#0a0614", accent: "#f59e0b", accentDark: "#d97706", glow: "rgba(245, 158, 11, 0.2)", pillBg: "rgba(236, 72, 153, 0.15)", pillText: "#f472b6" },
  emerald: { bg1: "#020d1a", bg2: "#04203b", bg3: "#020a14", accent: "#00f2fe", accentDark: "#0891b2", glow: "rgba(0, 242, 254, 0.2)", pillBg: "rgba(0, 242, 254, 0.15)", pillText: "#67e8f9" },
  purple: { bg1: "#0d0a1a", bg2: "#1d1435", bg3: "#080512", accent: "#a855f7", accentDark: "#7e22ce", glow: "rgba(168, 85, 247, 0.2)", pillBg: "rgba(168, 85, 247, 0.15)", pillText: "#c084fc" }
};

// ==========================================
// STATE
// ==========================================
let currentEdition = "horizon"; // 'horizon' | 'chronos'
let currentPresetKey = "career";
let currentDevice = "phone";     // 'phone' | 'desktop'
let showOverlay = true;
let showSafeZone = false;

// Active Configuration Object
let activeConfig = JSON.parse(JSON.stringify(HORIZON_PRESETS.career));

// DOM Nodes
const canvas = document.getElementById("wallpaperCanvas");
const phoneFrame = document.getElementById("phoneFrame");
const desktopFrame = document.getElementById("desktopFrame");
const systemOverlay = document.getElementById("systemOverlay");
const safeZoneGuide = document.getElementById("safeZoneGuide");
const overlayTime = document.getElementById("overlayTime");
const overlayDate = document.getElementById("overlayDate");
const statusClock = document.getElementById("statusClock");

const brandLogo = document.getElementById("brandLogo");
const brandTitle = document.getElementById("brandTitle");
const brandSubtitle = document.getElementById("brandSubtitle");
const toolbarEditionLabel = document.getElementById("toolbarEditionLabel");

const horizonPresets = document.getElementById("horizonPresets");
const chronosPresets = document.getElementById("chronosPresets");
const horizonPaletteGroup = document.getElementById("horizonPaletteGroup");
const chronosThemeGroup = document.getElementById("chronosThemeGroup");

const inputTitle = document.getElementById("inputTitle");
const inputCategory = document.getElementById("inputCategory");
const inputTargetDate = document.getElementById("inputTargetDate");
const inputQuote = document.getElementById("inputQuote");
const milestonesContainer = document.getElementById("milestonesContainer");

// ==========================================
// INITIALIZATION
// ==========================================
window.addEventListener("DOMContentLoaded", () => {
  setupUI();
  setEdition("horizon");
  startLiveClock();
  renderWallpaper();
});

function setupUI() {
  // Edition Switcher Buttons
  document.getElementById("btnEditionHorizon").addEventListener("click", () => setEdition("horizon"));
  document.getElementById("btnEditionChronos").addEventListener("click", () => setEdition("chronos"));

  // Horizon Preset Buttons
  document.querySelectorAll("#horizonPresets .preset-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#horizonPresets .preset-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      loadPreset(btn.dataset.preset);
    });
  });

  // Device Tabs
  document.getElementById("tabPhone").addEventListener("click", () => switchDevice("phone"));
  document.getElementById("tabDesktop").addEventListener("click", () => switchDevice("desktop"));

  // System Simulation Toggles
  document.getElementById("toggleOverlay").addEventListener("change", (e) => {
    showOverlay = e.target.checked;
    systemOverlay.style.opacity = showOverlay ? "1" : "0";
  });

  document.getElementById("toggleSafeZone").addEventListener("change", (e) => {
    showSafeZone = e.target.checked;
    safeZoneGuide.style.display = showSafeZone ? "block" : "none";
  });

  // Horizon Palette Dots
  document.querySelectorAll(".palette-dot").forEach(dot => {
    dot.addEventListener("click", () => {
      document.querySelectorAll(".palette-dot").forEach(d => d.classList.remove("active"));
      dot.classList.add("active");
      activeConfig.palette = dot.dataset.palette;
      renderWallpaper();
    });
  });

  // Chronos Paper Style Buttons
  document.getElementById("btnPaperDark").addEventListener("click", () => {
    document.getElementById("btnPaperDark").classList.add("active");
    document.getElementById("btnPaperLight").classList.remove("active");
    activeConfig.paperStyle = "dark";
    document.body.removeAttribute("data-paper");
    renderWallpaper();
  });

  document.getElementById("btnPaperLight").addEventListener("click", () => {
    document.getElementById("btnPaperLight").classList.add("active");
    document.getElementById("btnPaperDark").classList.remove("active");
    activeConfig.paperStyle = "light";
    document.body.setAttribute("data-paper", "light");
    renderWallpaper();
  });

  // Live input syncing
  inputTitle.addEventListener("input", (e) => { activeConfig.title = e.target.value; renderWallpaper(); });
  inputCategory.addEventListener("input", (e) => { activeConfig.category = e.target.value; renderWallpaper(); });
  inputTargetDate.addEventListener("change", (e) => {
    if (e.target.value) { activeConfig.targetDate = new Date(e.target.value); renderWallpaper(); }
  });
  inputQuote.addEventListener("input", (e) => { activeConfig.quote = e.target.value; renderWallpaper(); });

  // Export buttons
  document.getElementById("btnDownloadPNG").addEventListener("click", downloadWallpaperPNG);
  document.getElementById("btnDownloadSVG").addEventListener("click", downloadWallpaperSVG);
  document.getElementById("btnDownloadICS").addEventListener("click", downloadICS);
  document.getElementById("btnCoverMockup").addEventListener("click", downloadCoverMockup);

  // Modal setup
  document.getElementById("btnCopySubmission").addEventListener("click", () => {
    document.getElementById("submissionModal").style.display = "flex";
  });
  document.getElementById("closeModal").addEventListener("click", () => {
    document.getElementById("submissionModal").style.display = "none";
  });

  // Modal Tab switching
  document.getElementById("modalTabV1").addEventListener("click", () => {
    document.getElementById("modalTabV1").classList.add("active");
    document.getElementById("modalTabV2").classList.remove("active");
    document.getElementById("modalContentV1").style.display = "block";
    document.getElementById("modalContentV2").style.display = "none";
  });

  document.getElementById("modalTabV2").addEventListener("click", () => {
    document.getElementById("modalTabV2").classList.add("active");
    document.getElementById("modalTabV1").classList.remove("active");
    document.getElementById("modalContentV1").style.display = "none";
    document.getElementById("modalContentV2").style.display = "block";
  });
}

// ==========================================
// EDITION SWITCHING
// ==========================================
function setEdition(edition) {
  currentEdition = edition;
  document.body.setAttribute("data-edition", edition);

  document.getElementById("btnEditionHorizon").classList.toggle("active", edition === "horizon");
  document.getElementById("btnEditionChronos").classList.toggle("active", edition === "chronos");

  if (edition === "horizon") {
    brandLogo.textContent = "H";
    brandTitle.textContent = "HORIZON";
    brandSubtitle.textContent = "Glassmorphic Tech Career Studio";
    toolbarEditionLabel.textContent = "Version 1: Horizon (Glassmorphism HUD)";

    horizonPresets.style.display = "flex";
    chronosPresets.style.display = "none";
    horizonPaletteGroup.style.display = "block";
    chronosThemeGroup.style.display = "none";

    loadPreset("career");
  } else {
    brandLogo.textContent = "C";
    brandTitle.textContent = "CHRONOS";
    brandSubtitle.textContent = "Minimalist Swiss Editorial Studio";
    toolbarEditionLabel.textContent = "Version 2: Chronos (Swiss Editorial)";

    horizonPresets.style.display = "none";
    chronosPresets.style.display = "flex";
    horizonPaletteGroup.style.display = "none";
    chronosThemeGroup.style.display = "block";

    loadPreset("thesis");
  }
}

function loadPreset(presetKey) {
  currentPresetKey = presetKey;
  const isHorizon = (currentEdition === "horizon");
  const data = isHorizon ? (HORIZON_PRESETS[presetKey] || HORIZON_PRESETS.career) : CHRONOS_PRESETS.thesis;

  activeConfig = JSON.parse(JSON.stringify(data));
  activeConfig.targetDate = new Date(data.targetDate);
  activeConfig.startDate = new Date(data.startDate);

  inputTitle.value = activeConfig.title;
  inputCategory.value = activeConfig.category;
  inputTargetDate.value = activeConfig.targetDate.toISOString().split("T")[0];
  inputQuote.value = activeConfig.quote;

  renderMilestoneList();
  renderWallpaper();
}

function switchDevice(device) {
  currentDevice = device;
  document.getElementById("tabPhone").classList.toggle("active", device === "phone");
  document.getElementById("tabDesktop").classList.toggle("active", device === "desktop");

  if (device === "phone") {
    phoneFrame.style.display = "block";
    desktopFrame.style.display = "none";
  } else {
    phoneFrame.style.display = "none";
    desktopFrame.style.display = "block";
  }
  renderWallpaper();
}

function renderMilestoneList() {
  milestonesContainer.innerHTML = "";
  activeConfig.milestones.forEach((m) => {
    const div = document.createElement("div");
    div.className = "milestone-item";
    const statusText = m.status === "completed" ? "DONE" : m.status === "active" ? "ACTIVE" : m.status === "victory" ? "VICTORY" : "UPCOMING";
    const badgeClass = m.status === "completed" ? "badge-done" : m.status === "active" ? "badge-active" : "badge-upcoming";
    const prefix = m.num ? `<span style="font-family: Georgia, serif; font-size: 1rem; color: var(--accent-amber); margin-right: 6px;">${m.num}</span>` : "";

    div.innerHTML = `
      <div>
        ${prefix}
        <span class="milestone-badge ${badgeClass}">${m.label} • ${statusText}</span>
        <strong>${m.title}</strong>
      </div>
      <span style="font-family: var(--font-mono); color: var(--text-dim); font-size: 0.72rem;">${m.date}</span>
    `;
    milestonesContainer.appendChild(div);
  });
}

function startLiveClock() {
  function tick() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const timeStr = `${hours}:${minutes}`;

    if (overlayTime) overlayTime.textContent = timeStr;
    if (statusClock) statusClock.textContent = timeStr;

    const options = { weekday: "long", month: "long", day: "numeric" };
    if (overlayDate) overlayDate.textContent = now.toLocaleDateString("en-US", options);

    renderWallpaper();
  }
  tick();
  setInterval(tick, 1000);
}

function getCountdown() {
  const now = new Date().getTime();
  const target = new Date(activeConfig.targetDate).getTime();
  const start = new Date(activeConfig.startDate).getTime();
  const diff = Math.max(0, target - now);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  const total = Math.max(1, target - start);
  const elapsed = Math.max(0, now - start);
  const percentage = Math.min(100, Math.max(0, Math.round((elapsed / total) * 100)));

  return { days, hours, minutes, seconds, percentage, targetDateStr: activeConfig.targetDate.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }).toUpperCase() };
}

// ==========================================
// MASTER CANVAS RENDERER
// ==========================================
function renderWallpaper() {
  const isPhone = (currentDevice === "phone");
  const targetCanvas = isPhone ? canvas : document.getElementById("desktopWallpaperCanvas");
  if (!targetCanvas) return;
  const c = targetCanvas.getContext("2d");

  const W = isPhone ? 1179 : 2880;
  const H = isPhone ? 2556 : 1800;

  if (targetCanvas.width !== W) targetCanvas.width = W;
  if (targetCanvas.height !== H) targetCanvas.height = H;

  const cd = getCountdown();

  if (currentEdition === "horizon") {
    renderHorizonEdition(c, W, H, isPhone, cd);
  } else {
    renderChronosEdition(c, W, H, isPhone, cd);
  }
}

// ------------------------------------------
// VERSION 1: HORIZON (GLASSMORPHIC HUD)
// ------------------------------------------
function renderHorizonEdition(c, W, H, isPhone, cd) {
  const pal = HORIZON_PALETTES[activeConfig.palette] || HORIZON_PALETTES.cyan;

  // Background
  const bgGrad = c.createLinearGradient(0, 0, W, H);
  bgGrad.addColorStop(0, pal.bg1);
  bgGrad.addColorStop(0.4, pal.bg2);
  bgGrad.addColorStop(1, pal.bg3);
  c.fillStyle = bgGrad;
  c.fillRect(0, 0, W, H);

  // Glow
  const glow = c.createRadialGradient(W / 2, isPhone ? 400 : 300, 0, W / 2, isPhone ? 400 : 300, W * 0.45);
  glow.addColorStop(0, pal.glow);
  glow.addColorStop(1, "rgba(0,0,0,0)");
  c.fillStyle = glow;
  c.fillRect(0, 0, W, H);

  // Stars
  c.fillStyle = "rgba(255, 255, 255, 0.25)";
  const starCoords = isPhone
    ? [[140, 380], [980, 290], [1060, 740], [90, 1120], [1090, 1840], [120, 2180]]
    : [[280, 240], [1440, 180], [2600, 300], [2400, 1400], [480, 1550]];
  starCoords.forEach(([sx, sy]) => {
    c.beginPath();
    c.arc(sx, sy, 3, 0, Math.PI * 2);
    c.fill();
  });

  if (isPhone) {
    // Phone HUD — starts at y:400 (≈128px on frame, snug below overlay clock)
    const hudX = 75, hudY = 400, hudW = 1029, hudH = 400;
    drawRoundedRect(c, hudX, hudY, hudW, hudH, 36, "rgba(255, 255, 255, 0.05)", "rgba(255, 255, 255, 0.15)", 2);

    drawRoundedRect(c, hudX + 44, hudY + 40, 220, 42, 21, pal.pillBg, pal.accent, 1.5);
    c.fillStyle = pal.accent;
    c.beginPath();
    c.arc(hudX + 64, hudY + 61, 5, 0, Math.PI * 2);
    c.fill();
    c.fillStyle = pal.pillText;
    c.font = "600 20px -apple-system, sans-serif";
    c.textAlign = "left";
    c.fillText(activeConfig.category, hudX + 80, hudY + 67);

    c.fillStyle = "#94a3b8";
    c.font = "500 22px 'SF Mono', monospace";
    c.textAlign = "right";
    c.fillText(cd.targetDateStr, hudX + hudW - 44, hudY + 68);

    c.fillStyle = "#f8fafc";
    c.font = "800 44px -apple-system, sans-serif";
    c.textAlign = "left";
    c.fillText(activeConfig.title, hudX + 44, hudY + 132);

    c.fillStyle = "#94a3b8";
    c.font = "400 23px -apple-system, sans-serif";
    c.fillText(activeConfig.subtitle, hudX + 44, hudY + 168);

    // Digits
    const blockW = 180, blockH = 96, gap = 22, blockY = hudY + 210;
    const blocks = [
      { num: String(cd.days).padStart(2, "0"), label: "DAYS" },
      { num: String(cd.hours).padStart(2, "0"), label: "HOURS" },
      { num: String(cd.minutes).padStart(2, "0"), label: "MINS" }
    ];
    blocks.forEach((tb, i) => {
      const bx = hudX + 44 + i * (blockW + gap);
      drawRoundedRect(c, bx, blockY, blockW, blockH, 20, "rgba(15, 23, 42, 0.7)", "rgba(255, 255, 255, 0.1)", 1.5);
      c.fillStyle = "#ffffff";
      c.font = "800 52px 'SF Mono', monospace";
      c.textAlign = "center";
      c.fillText(tb.num, bx + blockW / 2, blockY + 66);
      c.fillStyle = "#64748b";
      c.font = "700 18px -apple-system, sans-serif";
      c.fillText(tb.label, bx + blockW / 2, blockY + 125);
    });

    // Circular Ring
    const ringX = hudX + 820, ringY = blockY + 48, ringR = 54;
    c.beginPath();
    c.arc(ringX, ringY, ringR, 0, Math.PI * 2);
    c.strokeStyle = "#1e293b";
    c.lineWidth = 12;
    c.stroke();

    const progressAngle = (cd.percentage / 100) * (Math.PI * 2);
    c.beginPath();
    c.arc(ringX, ringY, ringR, -Math.PI / 2, -Math.PI / 2 + progressAngle);
    c.strokeStyle = pal.accent;
    c.lineWidth = 12;
    c.lineCap = "round";
    c.stroke();

    c.fillStyle = pal.accent;
    c.font = "800 28px 'SF Mono', monospace";
    c.textAlign = "center";
    c.fillText(`${cd.percentage}%`, ringX, ringY + 8);

    c.fillStyle = "#64748b";
    c.font = "700 16px -apple-system, sans-serif";
    c.fillText("PACING", ringX, ringY + 80);

    // Milestones
    const timeX = 75, timeY = 860;
    c.fillStyle = "#f8fafc";
    c.font = "700 24px -apple-system, sans-serif";
    c.textAlign = "left";
    c.fillText("MILESTONE SPRINT", timeX + 12, timeY + 32);

    c.strokeStyle = "#1e293b";
    c.lineWidth = 4;
    c.beginPath();
    c.moveTo(timeX + 68, timeY + 90);
    c.lineTo(timeX + 68, timeY + 920);
    c.stroke();

    activeConfig.milestones.forEach((m, idx) => {
      const cardY = timeY + 70 + idx * 178;
      const isDone = (m.status === "completed");
      const isActive = (m.status === "active");
      const isVic = (m.status === "victory");

      const cardBg = isActive ? "rgba(15, 23, 42, 0.95)" : "rgba(255, 255, 255, 0.04)";
      const cardStroke = isActive ? pal.accent : isDone ? "#10b981" : isVic ? "#f59e0b" : "rgba(255, 255, 255, 0.1)";
      drawRoundedRect(c, timeX + 128, cardY, 901, 150, 26, cardBg, cardStroke, isActive ? 2.5 : 1.2);

      const nodeX = timeX + 68, nodeY = cardY + 75;
      c.beginPath();
      c.arc(nodeX, nodeY, isActive ? 30 : 24, 0, Math.PI * 2);
      c.fillStyle = isDone ? "#064e3b" : isActive ? pal.accentDark : isVic ? "#451a03" : "#0b1120";
      c.fill();
      c.strokeStyle = isDone ? "#10b981" : isActive ? pal.accent : isVic ? "#f59e0b" : "#475569";
      c.lineWidth = 3;
      c.stroke();

      if (isActive) {
        c.beginPath();
        c.arc(nodeX, nodeY, 10, 0, Math.PI * 2);
        c.fillStyle = "#ffffff";
        c.fill();
      }

      c.textAlign = "left";
      c.font = "700 20px 'SF Mono', monospace";
      c.fillStyle = isDone ? "#34d399" : isActive ? pal.accent : isVic ? "#fbbf24" : "#64748b";
      c.fillText(`${m.label} • ${isDone ? "COMPLETED" : isActive ? "ACTIVE NOW" : isVic ? "VICTORY" : "UPCOMING"}`, timeX + 164, cardY + 52);

      c.textAlign = "right";
      c.font = "500 19px 'SF Mono', monospace";
      c.fillStyle = isActive ? pal.accent : "#64748b";
      c.fillText(m.date, timeX + 990, cardY + 52);

      c.textAlign = "left";
      c.font = "700 29px -apple-system, sans-serif";
      c.fillStyle = isActive ? "#ffffff" : "#f1f5f9";
      c.fillText(m.title, timeX + 164, cardY + 94);

      c.font = "400 21px -apple-system, sans-serif";
      c.fillStyle = isActive ? "#cbd5e1" : "#94a3b8";
      c.fillText(m.desc, timeX + 164, cardY + 126);
    });

    c.textAlign = "center";
    c.font = "italic 400 22px -apple-system, sans-serif";
    c.fillStyle = "#94a3b8";
    c.fillText(activeConfig.quote, W / 2, 1980);
    c.font = "500 17px 'SF Mono', monospace";
    c.fillStyle = "#475569";
    c.fillText("BUILT WITH GOOGLE AI SKILLS STUDIO × HANDSHAKE", W / 2, 2016);

  } else {
    // Desktop Horizon
    const hudX = 160, hudY = 220, hudW = 900, hudH = 1360;
    drawRoundedRect(c, hudX, hudY, hudW, hudH, 40, "rgba(255, 255, 255, 0.05)", "rgba(255, 255, 255, 0.15)", 2);

    c.fillStyle = "#f8fafc";
    c.font = "800 54px -apple-system, sans-serif";
    c.textAlign = "left";
    c.fillText(activeConfig.title, hudX + 64, hudY + 180);

    const ringX = hudX + hudW / 2, ringY = hudY + 470, ringR = 160;
    c.beginPath();
    c.arc(ringX, ringY, ringR, 0, Math.PI * 2);
    c.strokeStyle = "#1e293b";
    c.lineWidth = 26;
    c.stroke();

    const progressAngle = (cd.percentage / 100) * (Math.PI * 2);
    c.beginPath();
    c.arc(ringX, ringY, ringR, -Math.PI / 2, -Math.PI / 2 + progressAngle);
    c.strokeStyle = pal.accent;
    c.lineWidth = 26;
    c.lineCap = "round";
    c.stroke();

    c.fillStyle = "#ffffff";
    c.font = "800 78px 'SF Mono', monospace";
    c.textAlign = "center";
    c.fillText(String(cd.days), ringX, ringY + 24);
    c.fillStyle = "#64748b";
    c.font = "600 24px -apple-system, sans-serif";
    c.fillText("DAYS LEFT", ringX, ringY + 80);

    // Right column
    const mX = 1120, mY = 220, mW = 1600, mH = 1360;
    drawRoundedRect(c, mX, mY, mW, mH, 40, "rgba(255, 255, 255, 0.05)", "rgba(255, 255, 255, 0.15)", 2);

    c.fillStyle = "#f8fafc";
    c.font = "800 38px -apple-system, sans-serif";
    c.textAlign = "left";
    c.fillText("Reverse-Engineered Milestone Roadmap", mX + 70, mY + 86);

    activeConfig.milestones.forEach((m, idx) => {
      const rowY = mY + 180 + idx * 220;
      const isActive = (m.status === "active");
      const isDone = (m.status === "completed");
      const isVic = (m.status === "victory");
      drawRoundedRect(c, mX + 70, rowY, 1460, 190, 28, isActive ? "rgba(15, 23, 42, 0.95)" : "rgba(15, 23, 42, 0.6)", isActive ? pal.accent : isDone ? "#10b981" : isVic ? "#f59e0b" : "rgba(255, 255, 255, 0.1)", isActive ? 3 : 1.5);

      c.fillStyle = isDone ? "#34d399" : isActive ? pal.accent : isVic ? "#fbbf24" : "#64748b";
      c.font = "700 22px 'SF Mono', monospace";
      c.fillText(`${m.label} • ${isDone ? "COMPLETED" : isActive ? "ACTIVE NOW" : isVic ? "VICTORY GOAL" : "UPCOMING"}`, mX + 220, rowY + 68);

      c.textAlign = "right";
      c.font = "600 22px 'SF Mono', monospace";
      c.fillStyle = isActive ? pal.accent : "#64748b";
      c.fillText(m.date, mX + 1460, rowY + 68);

      c.textAlign = "left";
      c.fillStyle = isActive ? "#ffffff" : "#f8fafc";
      c.font = "800 34px -apple-system, sans-serif";
      c.fillText(m.title, mX + 220, rowY + 116);
      c.fillStyle = isActive ? "#cbd5e1" : "#94a3b8";
      c.font = "400 24px -apple-system, sans-serif";
      c.fillText(m.desc, mX + 220, rowY + 154);
    });
  }
}

// ------------------------------------------
// VERSION 2: CHRONOS (SWISS EDITORIAL)
// ------------------------------------------
function renderChronosEdition(c, W, H, isPhone, cd) {
  const isLight = (activeConfig.paperStyle === "light");
  const colBg = isLight ? "#f9f7f2" : "#0c0d10";
  const colText = isLight ? "#1c1917" : "#f4f4f5";
  const colSubtext = isLight ? "#78716c" : "#a1a1aa";
  const colHairline = isLight ? "#e2ded4" : "#262930";
  const colAccent = isLight ? "#991b1b" : "#d97706";
  const colCard = isLight ? "#ffffff" : "#14161a";
  const colActiveCard = isLight ? "#fef2f2" : "#1c1914";

  c.fillStyle = colBg;
  c.fillRect(0, 0, W, H);

  // Swiss border
  const marginX = isPhone ? 60 : 80;
  const marginY = 80;
  c.strokeStyle = colHairline;
  c.lineWidth = 1.5;
  c.strokeRect(marginX, marginY, W - marginX * 2, H - marginY * 2);

  if (isPhone) {
    // Running head
    c.font = "600 16px 'SF Mono', monospace";
    c.fillStyle = colSubtext;
    c.textAlign = "left";
    c.fillText("ACADEMIC CAPSTONE • ISSUE XXIV", 100, 130);
    c.textAlign = "right";
    c.fillText("HANDSHAKE × GOOGLE", 1079, 130);

    // Hero Section
    const hy = 400;
    c.beginPath();
    c.moveTo(100, hy);
    c.lineTo(1079, hy);
    c.strokeStyle = isLight ? "#1c1917" : "#3f3f46";
    c.lineWidth = 2;
    c.stroke();

    c.font = "700 18px 'SF Mono', monospace";
    c.fillStyle = colAccent;
    c.textAlign = "left";
    c.fillText(activeConfig.category, 100, hy + 44);

    c.font = "500 18px 'SF Mono', monospace";
    c.fillStyle = colSubtext;
    c.textAlign = "right";
    c.fillText(cd.targetDateStr, 1079, hy + 44);

    c.font = "400 52px Georgia, serif";
    c.fillStyle = colText;
    c.textAlign = "left";
    c.fillText(activeConfig.title, 100, hy + 115);

    c.font = "300 22px -apple-system, sans-serif";
    c.fillStyle = colSubtext;
    c.fillText(activeConfig.subtitle, 100, hy + 160);

    // Typographic Digits
    c.font = "300 94px Georgia, serif";
    c.fillStyle = colText;
    c.fillText(String(cd.days).padStart(2, "0"), 100, hy + 300);

    c.font = "700 16px 'SF Mono', monospace";
    c.fillStyle = colAccent;
    c.fillText("DAYS", 240, hy + 260);
    c.font = "400 16px -apple-system, sans-serif";
    c.fillStyle = colSubtext;
    c.fillText("REMAINING", 240, hy + 285);

    c.font = "300 94px Georgia, serif";
    c.fillStyle = colSubtext;
    c.fillText(String(cd.hours).padStart(2, "0"), 440, hy + 300);
    c.font = "600 16px 'SF Mono', monospace";
    c.fillText("HOURS", 570, hy + 260);

    c.font = "300 94px Georgia, serif";
    c.fillText(String(cd.minutes).padStart(2, "0"), 720, hy + 300);
    c.font = "600 16px 'SF Mono', monospace";
    c.fillText("MINS", 850, hy + 260);

    // Progress Ruler
    const py = hy + 360;
    c.beginPath();
    c.moveTo(100, py);
    c.lineTo(1079, py);
    c.strokeStyle = isLight ? "#e7e5e4" : "#27272a";
    c.lineWidth = 3;
    c.stroke();

    const progressX = 100 + (979 * cd.percentage) / 100;
    c.beginPath();
    c.moveTo(100, py);
    c.lineTo(progressX, py);
    c.strokeStyle = colAccent;
    c.lineWidth = 3;
    c.stroke();

    c.beginPath();
    c.arc(progressX, py, 7, 0, Math.PI * 2);
    c.fillStyle = colAccent;
    c.fill();

    // Milestones
    const my = 1100;
    c.beginPath();
    c.moveTo(100, my);
    c.lineTo(1079, my);
    c.strokeStyle = isLight ? "#1c1917" : "#3f3f46";
    c.lineWidth = 2;
    c.stroke();

    c.font = "700 18px 'SF Mono', monospace";
    c.fillStyle = colText;
    c.textAlign = "left";
    c.fillText("REVERSE-ENGINEERED MILESTONE INDEX", 100, my + 38);

    activeConfig.milestones.forEach((m, idx) => {
      const cy = my + 75 + idx * 180;
      const isActive = (m.status === "active");
      const isDone = (m.status === "completed");

      c.fillStyle = isActive ? colActiveCard : colCard;
      c.fillRect(100, cy, 979, 150);
      c.strokeStyle = isActive ? colAccent : colHairline;
      c.lineWidth = isActive ? 2 : 1;
      c.strokeRect(100, cy, 979, 150);

      c.font = "400 36px Georgia, serif";
      c.fillStyle = isActive ? colAccent : isDone ? "#10b981" : colSubtext;
      c.textAlign = "left";
      c.fillText(m.num, 136, cy + 55);

      c.font = "700 16px 'SF Mono', monospace";
      c.fillText(`${m.label} • ${isDone ? "COMPLETED" : isActive ? "ACTIVE FOCUS" : "UPCOMING"}`, 190, cy + 52);

      c.textAlign = "right";
      c.font = "500 16px 'SF Mono', monospace";
      c.fillStyle = isActive ? colAccent : colSubtext;
      c.fillText(m.date, 1043, cy + 52);

      c.textAlign = "left";
      c.font = "600 28px Georgia, serif";
      c.fillStyle = colText;
      c.fillText(m.title, 190, cy + 94);

      c.font = "400 20px -apple-system, sans-serif";
      c.fillStyle = colSubtext;
      c.fillText(m.desc, 190, cy + 126);
    });

    c.textAlign = "center";
    c.font = "italic 400 22px Georgia, serif";
    c.fillStyle = colSubtext;
    c.fillText(activeConfig.quote, W / 2, 2024);

  } else {
    // Desktop Chronos
    const ly = 220;
    c.font = "400 68px Georgia, serif";
    c.fillStyle = colText;
    c.textAlign = "left";
    c.fillText(activeConfig.title, 140, ly + 140);

    c.font = "300 140px Georgia, serif";
    c.fillText(String(cd.days).padStart(2, "0"), 140, ly + 470);
    c.font = "700 22px 'SF Mono', monospace";
    c.fillStyle = colAccent;
    c.fillText("DAYS LEFT", 350, ly + 410);

    // Right Column
    activeConfig.milestones.forEach((m, idx) => {
      const ry = ly + 90 + idx * 220;
      const isActive = (m.status === "active");
      const isDone = (m.status === "completed");

      c.fillStyle = isActive ? colActiveCard : colCard;
      c.fillRect(1200, ry, 1540, 180);
      c.strokeStyle = isActive ? colAccent : colHairline;
      c.lineWidth = isActive ? 2 : 1;
      c.strokeRect(1200, ry, 1540, 180);

      c.font = "400 44px Georgia, serif";
      c.fillStyle = isActive ? colAccent : isDone ? "#10b981" : colSubtext;
      c.textAlign = "left";
      c.fillText(m.num, 1248, ry + 68);

      c.font = "700 18px 'SF Mono', monospace";
      c.fillText(`${m.label} • ${isDone ? "COMPLETED" : isActive ? "ACTIVE FOCUS" : "UPCOMING"}`, 1320, ry + 58);

      c.textAlign = "right";
      c.font = "500 18px 'SF Mono', monospace";
      c.fillStyle = isActive ? colAccent : colSubtext;
      c.fillText(m.date, 2680, ry + 58);

      c.textAlign = "left";
      c.font = "600 34px Georgia, serif";
      c.fillStyle = colText;
      c.fillText(m.title, 1320, ry + 106);
    });
  }
}

function drawRoundedRect(c, x, y, width, height, radius, fill, stroke, strokeWidth = 1) {
  c.beginPath();
  c.moveTo(x + radius, y);
  c.lineTo(x + width - radius, y);
  c.quadraticCurveTo(x + width, y, x + width, y + radius);
  c.lineTo(x + width, y + height - radius);
  c.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  c.lineTo(x + radius, y + height);
  c.quadraticCurveTo(x, y + height, x, y + height - radius);
  c.lineTo(x, y + radius);
  c.quadraticCurveTo(x, y, x + radius, y);
  c.closePath();
  if (fill) { c.fillStyle = fill; c.fill(); }
  if (stroke && strokeWidth > 0) { c.strokeStyle = stroke; c.lineWidth = strokeWidth; c.stroke(); }
}

// ==========================================
// EXPORTS & DOWNLOADS
// ==========================================
function downloadWallpaperPNG() {
  const isPhone = (currentDevice === "phone");
  const targetCanvas = isPhone ? canvas : document.getElementById("desktopWallpaperCanvas");

  targetCanvas.toBlob((blob) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${currentEdition}_${currentPresetKey}_${currentDevice}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, "image/png");
}

function downloadWallpaperSVG() {
  let file = "";
  if (currentEdition === "horizon") {
    file = (currentDevice === "phone")
      ? `wallpapers/phone_${currentPresetKey === "career" ? "career_sprint" : currentPresetKey === "hackathon" ? "ai_hackathon" : "capstone_graduation"}.svg`
      : "wallpapers/desktop_career_sprint.svg";
  } else {
    file = (currentDevice === "phone")
      ? `wallpapers/phone_editorial_${activeConfig.paperStyle === "light" ? "ivory" : "obsidian"}.svg`
      : "wallpapers/desktop_editorial_obsidian.svg";
  }

  const a = document.createElement("a");
  a.href = file;
  a.download = `${currentEdition}_${currentDevice}.svg`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function downloadCoverMockup() {
  const file = (currentEdition === "horizon") ? "assets/cover_horizon.svg" : "assets/cover_chronos.svg";
  const a = document.createElement("a");
  a.href = file;
  a.download = `cover_${currentEdition}.svg`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function downloadICS() {
  const pad = (n) => String(n).padStart(2, "0");
  const formatICS = (d) => `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}T090000Z`;

  let ics = "BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Handshake AI Skills Studio//Countdown Lock Screen//EN\nCALSCALE:GREGORIAN\nMETHOD:PUBLISH\n";
  activeConfig.milestones.forEach((m, idx) => {
    const eventDate = new Date(Date.now() + idx * 7 * 24 * 60 * 60 * 1000);
    ics += "BEGIN:VEVENT\n";
    ics += `UID:lockscreen-${idx}-${Date.now()}@joinhandshake.com\n`;
    ics += `DTSTAMP:${formatICS(new Date())}\n`;
    ics += `DTSTART:${formatICS(eventDate)}\n`;
    ics += `DTEND:${formatICS(new Date(eventDate.getTime() + 60 * 60 * 1000))}\n`;
    ics += `SUMMARY:🎯 [${currentEdition.toUpperCase()}] ${m.label || m.num}: ${m.title}\n`;
    ics += `DESCRIPTION:${m.desc}\\n\\nMilestone leading to: ${activeConfig.title}.\n`;
    ics += "STATUS:CONFIRMED\n";
    ics += "BEGIN:VALARM\nTRIGGER:-PT15M\nACTION:DISPLAY\nDESCRIPTION:Milestone Reminder\nEND:VALARM\n";
    ics += "END:VEVENT\n";
  });
  ics += "END:VCALENDAR";

  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${currentEdition}_calendar_reminders.ics`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
