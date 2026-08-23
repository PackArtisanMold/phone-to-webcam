// Tally drawing kit: the lens icon, the camera feed and the phone frame every mockup shares.
// Runs as a classic script in pages and through import() in Node, so it only touches globalThis.
(function (g) {
  const paint = (id, stops, x1 = 0, y1 = 0, x2 = 0, y2 = 1) =>
    `<linearGradient id="${id}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}">${stops.map(([o, c, a = 1]) => `<stop offset="${o}" stop-color="${c}" stop-opacity="${a}"/>`).join('')}</linearGradient>`;
  const radial = (id, stops, cx = 0.5, cy = 0.5, r = 0.5, fx = cx, fy = cy) =>
    `<radialGradient id="${id}" cx="${cx}" cy="${cy}" r="${r}" fx="${fx}" fy="${fy}">${stops.map(([o, c, a = 1]) => `<stop offset="${o}" stop-color="${c}" stop-opacity="${a}"/>`).join('')}</radialGradient>`;
  function tilePath(cx = 512, cy = 512, half = 448, n = 5) {
    const pts = [];
    for (let i = 0; i < 240; i++) { const t = (i / 240) * Math.PI * 2, c = Math.cos(t), s = Math.sin(t);
      pts.push(`${(cx + half * Math.sign(c) * Math.abs(c) ** (2 / n)).toFixed(1)} ${(cy + half * Math.sign(s) * Math.abs(s) ** (2 / n)).toFixed(1)}`); }
    return `M ${pts.join(' L ')} Z`;
  }
  // A camera lens seen head on: metal ring, black barrel, coated glass, and the red tally light.
  function lens(u, cx, cy, R, small) {
    let s = `<circle cx="${cx}" cy="${cy}" r="${R}" fill="url(#${u}ring)"/>
      <circle cx="${cx}" cy="${cy}" r="${R * 0.86}" fill="#050506"/>
      <circle cx="${cx}" cy="${cy}" r="${R * 0.74}" fill="url(#${u}barrel)"/>
      <circle cx="${cx}" cy="${cy}" r="${R * 0.6}" fill="url(#${u}glass)"/>`;
    if (!small) s += `<circle cx="${cx}" cy="${cy}" r="${R * 0.8}" fill="none" stroke="#fff" stroke-opacity=".08" stroke-width="${R * 0.012}"/>
      <circle cx="${cx}" cy="${cy}" r="${R * 0.67}" fill="none" stroke="#fff" stroke-opacity=".06" stroke-width="${R * 0.01}"/>`;
    // coating reflections
    s += `<path d="M ${cx - R * 0.42} ${cy - R * 0.2} A ${R * 0.46} ${R * 0.46} 0 0 1 ${cx + R * 0.05} ${cy - R * 0.46}" stroke="url(#${u}coatA)" stroke-width="${R * (small ? 0.1 : 0.07)}" stroke-linecap="round" fill="none"/>
      <path d="M ${cx + R * 0.36} ${cy + R * 0.16} A ${R * 0.4} ${R * 0.4} 0 0 1 ${cx + R * 0.02} ${cy + R * 0.4}" stroke="url(#${u}coatB)" stroke-width="${R * (small ? 0.08 : 0.05)}" stroke-linecap="round" fill="none"/>
      <circle cx="${cx - R * 0.2}" cy="${cy - R * 0.22}" r="${R * 0.09}" fill="#fff" fill-opacity=".85"/>
      <circle cx="${cx}" cy="${cy}" r="${R * 0.16}" fill="#000" fill-opacity=".55"/>`;
    return s;
  }
  function defs(u) {
    return `${paint(`${u}tile`, [[0, '#2e2e30'], [1, '#0a0a0b']])}
      ${paint(`${u}rim`, [[0, '#fff', 0.34], [0.4, '#fff', 0.06], [1, '#fff', 0.12]])}
      ${paint(`${u}ring`, [[0, '#d9d9de'], [0.35, '#6e6e73'], [0.65, '#2c2c2e'], [1, '#8e8e93']], 0.15, 0, 0.85, 1)}
      ${radial(`${u}barrel`, [[0, '#1c1c1e'], [0.8, '#0b0b0c'], [1, '#000']])}
      ${radial(`${u}glass`, [[0, '#2a1f5c'], [0.45, '#121a3a'], [0.85, '#04060c'], [1, '#000']], 0.42, 0.38, 0.62)}
      ${paint(`${u}coatA`, [[0, '#7cf2ff', 0], [0.5, '#a78bff', 0.9], [1, '#ff7ad9', 0]], 0, 1, 1, 0)}
      ${paint(`${u}coatB`, [[0, '#7dffb2', 0], [0.5, '#7dffb2', 0.7], [1, '#3ad0ff', 0]], 1, 0, 0, 1)}
      ${radial(`${u}tally`, [[0, '#ffb3ad'], [0.35, '#ff453a'], [1, '#d70015']], 0.4, 0.35, 0.6)}
      ${radial(`${u}halo`, [[0, '#ff453a', 0.55], [1, '#ff453a', 0]])}
      <filter id="${u}sh" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#000" flood-opacity=".3"/></filter>`;
  }
  const tally = (u, x, y, r) => `<circle cx="${x}" cy="${y}" r="${r * 2.6}" fill="url(#${u}halo)"/><circle cx="${x}" cy="${y}" r="${r}" fill="url(#${u}tally)"/>`;
  function iconSVG({ small = false, uid = 'i', size = 1024 } = {}) {
    const T = tilePath();
    const tile = `<g ${small ? '' : `filter="url(#${uid}sh)"`}><path d="${T}" fill="url(#${uid}tile)"/></g>`;
    const edge = small ? '' : `<path d="${T}" fill="none" stroke="url(#${uid}rim)" stroke-width="3"/>`;
    const art = lens(uid, 512, 530, small ? 330 : 300, small) + tally(uid, 790, 236, small ? 66 : 46);
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="${size}" height="${size}"><defs>${defs(uid)}</defs>${tile}${art}${edge}</svg>`;
  }
  const mark = (uid, size = 24) => iconSVG({ small: true, uid, size });

  // The camera feed: a CC BY 2.0 photo (see CREDITS.md). fx and fy are the point a crop centres on.
  const FEED = '../../assets/third-party/feed-wave.jpg', DESK = '../../assets/third-party/desk-notes.jpg';
  const FACE = { fx: 0.6, fy: 0.16 };
  // zoom 1 shows the whole frame; higher values crop toward (fx, fy) the way centre framing does.
  const frame = (src, zoom = 1, { fx = FACE.fx, fy = FACE.fy, extra = '' } = {}) =>
    `<div class="feed" style="${extra}"><img src="${src}" alt="" style="transform-origin:${fx * 100}% ${fy * 100}%;transform:scale(${zoom})"></div>`;

  // A phone seen from the front. inner is the screen's HTML.
  const phone = (inner, { w = 200, cls = '', id = 'ph' } = {}) =>
    `<div class="phone ${cls}" id="${id}" style="width:${w}px;height:${Math.round(w * 2.06)}px"><div class="screen">${inner}</div><i class="island"></i></div>`;

  const BRAND = {
    name: 'Tally',
    headline: 'Your phone is the better webcam.',
    sub: 'Scan a code. No app on the phone. Free, 1080p, no watermark.',
    ticker: ['No phone app', 'No watermark', 'No 480p cap', 'No account', 'iPhone and Android', 'Runs on any GPU', '$0'],
    swatches: [['#000000', 'Page', '#f5f5f7'], ['#1c1c1e', 'Surface', '#f5f5f7'], ['#2c2c2e', 'Raised', '#f5f5f7'], ['#f5f5f7', 'On', '#000000'], ['#a1a1a6', 'Muted', '#000000'], ['#ff453a', 'Live', '#000000']],
    gradientNote: '',
  };

  g.Kit = { paint, radial, tilePath, iconSVG, mark, lens, tally, defs, FEED, DESK, FACE, frame, phone, BRAND, SMALL_MAX: 64 };
})(globalThis);
