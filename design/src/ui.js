// Icons, HUD pieces and timeline helpers shared by the mockup pages.
(function (g) {
  const ICONS = {
    blur: '<circle cx="12" cy="8" r="3.2"/><path d="M6 20a6 6 0 0 1 12 0"/><path d="M3 4.5v.01M3 9v.01M3 13.5v.01M21 4.5v.01M21 9v.01M21 13.5v.01"/>',
    frame: '<path d="M3 8V5a2 2 0 0 1 2-2h3M16 3h3a2 2 0 0 1 2 2v3M21 16v3a2 2 0 0 1-2 2h-3M8 21H5a2 2 0 0 1-2-2v-3"/><circle cx="12" cy="10" r="3"/><path d="M7.5 17.5a5 5 0 0 1 9 0"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    desk: '<path d="M3 7h18"/><path d="M5 7v12M19 7v12"/><rect x="8" y="10" width="8" height="5" rx="1"/>',
    mic: '<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10a7 7 0 0 0 14 0M12 17v5"/>',
    micoff: '<path d="M2 2l20 20"/><path d="M9 9v1a3 3 0 0 0 5.1 2.1M15 9.3V5a3 3 0 0 0-5.9-.8"/><path d="M19 10a7 7 0 0 1-.9 3.4M5 10a7 7 0 0 0 10.6 6M12 17v5"/>',
    swap: '<path d="M17 3l4 4-4 4"/><path d="M3 11V9a2 2 0 0 1 2-2h16"/><path d="M7 21l-4-4 4-4"/><path d="M21 13v2a2 2 0 0 1-2 2H3"/>',
    torch: '<path d="M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z"/><path d="M6 6h12M12 12v2"/>',
    gpu: '<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="9" cy="12" r="2.5"/><path d="M15 10h3M15 14h3M6 18v3M10 18v3"/>',
    wifi: '<path d="M5 12.6a10 10 0 0 1 14 0M8.5 16.1a5 5 0 0 1 7 0M2 8.8a15 15 0 0 1 20 0M12 20h.01"/>',
    usb: '<circle cx="10" cy="7" r="1"/><circle cx="4" cy="20" r="1"/><path d="M4.7 19.3 19 5"/><path d="m21 3-3 1 2 2Z"/><path d="M9.26 7.68 5 12l2 5"/><path d="m10 14 5 2 3.5-3.5"/><path d="m18 12 1-1 1 1-1 1Z"/>',
    text: '<path d="M4 6h16M4 10h16M4 14h10M4 18h7"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    phone: '<rect x="6" y="2" width="12" height="20" rx="3"/><path d="M11 18h2"/>',
    scan: '<path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M7 12h10"/>',
    battery: '<rect x="2" y="7" width="17" height="10" rx="2"/><path d="M22 11v2"/><rect x="4.5" y="9.5" width="9" height="5" rx="1" fill="currentColor" stroke="none"/>',
    end: '<path d="M18 6 6 18M6 6l12 12"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
  };
  const icon = (name, size = 16, sw = 1.75) => `<svg class="ic" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round">${ICONS[name]}</svg>`;

  const live = (where = 'Zoom', on = 1) => `<div class="hud live" style="opacity:${on}"><i class="dot"></i><b>Live</b><span>in ${where}</span></div>`;
  const stats = (items) => `<div class="stats">${items.map((s) => `<span class="hud chip">${s}</span>`).join('')}</div>`;
  // Effects are toggles: on is a white fill with a black label.
  const EFFECTS = [['Blur', 'blur'], ['Center framing', 'frame'], ['Low light', 'sun'], ['Desk view', 'desk']];
  const dock = (on = [], extra = '') => `<div class="hud dock">${EFFECTS.map(([l, ic]) => `<span class="tog ${on.includes(l) ? 'on' : ''}">${icon(ic, 15)}${l}</span>`).join('')}${extra}</div>`;

  const cursorSVG = `<svg class="cursor" id="cursor" width="22" height="28" viewBox="0 0 22 28"><path d="M2 1.8 V22.6 L7.4 17.6 L11 26 L14.6 24.4 L11 16.2 H18.4 Z" fill="#000" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"/></svg>`;
  const ease = (v) => { const t = Math.max(0, Math.min(1, v)); return 1 - (1 - t) ** 3; };
  const easeIO = (v) => { const t = Math.max(0, Math.min(1, v)); return t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2; };
  const span = (t, a, b) => Math.max(0, Math.min(1, (t - a) / (b - a)));

  g.UI = { icon, live, stats, dock, EFFECTS, cursorSVG, ease, easeIO, span };
})(globalThis);
