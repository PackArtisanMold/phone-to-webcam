# Tally design source

Everything in `assets/brand`, `assets/mockups` and `assets/readme` renders from this folder.

```bash
npm install
npx playwright install chromium
node render.mjs all
```

`node render.mjs icon`, `stills` or `gifs` renders one group, and `node render.mjs gifs hero` renders one file. GIFs also need `ffmpeg` and `gifsicle` on your `PATH`, and the icon step needs Python with Pillow.

## Direction

- **The video is the interface.** Feeds run edge to edge and controls float on dark glass, like a camera viewfinder.
- **Red is the tally light.** It means a camera is live, and nothing else: the dot, the word Live and the border of the camera on air.
- **Everything else is black and white.** An effect that's on is a white pill with a black label.
- **Type:** SF Pro on Apple devices, Inter everywhere else.
- **Photos are real and credited** in `CREDITS.md`. `src/kit.js` sets where center framing crops (`FACE`).

`scenes.mjs` lists what renders, and each scene is one HTML file in `src/`. `src/qr.svg` encodes a sample pairing code, not a link. Animated scenes expose `window.seek(t)`.
