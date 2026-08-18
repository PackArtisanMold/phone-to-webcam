<p align="center">
  <img src="assets/readme/hero.gif" alt="A PC window shows a QR code. A phone scans it, opens the Tally page in its browser and starts the camera. The PC switches to the live feed with a red Live in Zoom light, the phone dims to a remote, and center framing crops in on the person waving. Headline: Your phone is the better webcam." width="100%">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/price-%240%20forever-ff453a?style=flat-square" alt="Price: $0 forever">
  <img src="https://img.shields.io/badge/build-v1.0.0-32d74b?style=flat-square" alt="Build: v1.0.0">
  <img src="https://img.shields.io/badge/phone%20app-none-1c1c1e?style=flat-square" alt="Phone app: none">
  <img src="https://img.shields.io/badge/watermark-none-1c1c1e?style=flat-square" alt="Watermark: none">
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-5e5ce6?style=flat-square" alt="MIT license"></a>
</p>

<h1 align="center">Your phone is the better webcam.</h1>

<p align="center"><b>Tally turns any iPhone or Android into a webcam for Windows. Scan a code, and the phone's browser does the rest.<br>No phone app. No watermark. No 480p cap. Free.</b></p>

<p align="center">
  <img src="assets/readme/ticker.gif" alt="Scrolling text: no phone app, no watermark, no 480p cap, no account, iPhone and Android, runs on any GPU, $0" width="100%">
</p>

> [!NOTE]
> **Download:** the Windows build is a single `Tally-setup.exe` — [releases](../../releases/latest). One file, no installer, no account.
>
> The build isn't code-signed yet, so SmartScreen may warn you the first time. Choose **More info**, then **Run anyway**.

## Why Tally

The camera on your phone beats almost any laptop webcam. Using it on Windows usually means an app on the phone, a driver on the PC, and a paywall for HD.

| | The usual phone-webcam apps | Tally |
|---|---|---|
| **On the phone** | An app from the store | **A web page. Scan and go.** |
| **iPhone on Windows** | Often missing or paid | **Works in Safari** |
| **Free tier** | 480p or 720p, ads or a watermark | **1080p, clean** |
| **Effects** | Paid, or only on certain GPUs | **Any GPU: NVIDIA, AMD or Intel** |
| **More than one camera** | Rare | **Up to 4 phones** |

## What you get

### Scan and go

<p align="center"><img src="assets/mockups/scan.png" alt="The PC says iPhone 13 is connected, Live in Zoom, and lists Zoom, Teams, Google Meet, Discord, OBS Studio and the browser. Next to it, the phone shows its rear camera with lens buttons .5, 1x and 2, and torch, mic, switch and end buttons." width="100%"></p>

- **No phone app.** The PC shows a QR code, the phone opens a page, and video goes straight to the PC over your Wi-Fi.
- **The good camera.** Use the rear lenses, the torch and zoom from the page.
- **Shows up everywhere** as "Tally Camera": Zoom, Teams, Meet, Discord, OBS, the browser.
- **USB cable** on Android for a steadier picture that charges while it streams.

### A studio of old phones

<p align="center"><img src="assets/mockups/studio.png" alt="A live feed with center framing on and a desk view picture-in-picture. A side rail lists three phones: Face on iPhone 13 with a red live border, Desk on Pixel 8 and Wide on Galaxy A54, plus Effects on your GPU." width="100%"></p>

- **Up to 4 phones** as angles. Switch between them or show one as picture-in-picture.
- **Center framing, blur, low light and desk view** run on your PC's graphics card, any brand, so the phones stay cool.

### The phone becomes your remote

<p align="center"><img src="assets/mockups/remote.png" alt="The PC shows a Prompter panel with a pasted script. The phone shows the same script in large type right under its camera, with mute, framing, blur and end buttons." width="100%"></p>

- **Prompter under the lens.** Read your script and still look at the camera.
- **Mute, framing, blur and end** on the phone's screen, which dims while you're live to save battery.

## How it works

1. **Tally on the PC** shows a pairing code and runs a camera that apps can pick.
2. **The phone's browser** opens the Tally page and sends video to the PC over your own network.
3. **Effects run on the PC**, and the result goes to whatever app is using the camera.

## FAQ

**What quality should I expect?**
1080p at 30 fps is the target on both iPhone and Android. Phone browsers don't reliably allow more, so Tally won't promise 4K.

**Does it need admin?**
Tally runs from a folder. Making "Tally Camera" show up in every app on Windows 11 takes one admin prompt, once. OBS works through a link with no install at all.

**Does my video go through a server?**
No. Video goes from the phone to your PC on your network.

## Roadmap

- [x] Brand, icon and interface direction
- [x] Phone page and pairing
- [x] Windows camera
- [x] Effects on the GPU
- [x] Multiple phones and picture-in-picture
- [x] Prompter and remote
- [x] Portable Windows build

Tally isn't affiliated with Apple, Google, Samsung, Microsoft, Zoom, Discord or OBS. Their names appear only to say what Tally works with. Tally's code and brand assets are [MIT](LICENSE). Mockups use photos by other people; see [CREDITS.md](CREDITS.md).

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/brand/logo-white.svg">
    <img src="assets/brand/logo-black.svg" alt="Tally" width="200">
  </picture>
</p>
