<div align="center">

# ⚡ NEXUS MART

**A next-generation, cinematic e-commerce frontend architecture.**

[![Live Demo](https://img.shields.io/badge/Live_Experience-Launch_App-22D3EE?style=for-the-badge&logo=react)](https://koustav2303.github.io/nexus-mart/)
[![Tech Stack](https://img.shields.io/badge/React_19-Vite-1E293B?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Styling](https://img.shields.io/badge/Tailwind_CSS_3-0F172A?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![Animation](https://img.shields.io/badge/GSAP_&_Lenis-Motion-020617?style=for-the-badge&logo=greensock)](https://gsap.com/)

<p align="center">
  Breaks away from traditional blocky web design by utilizing glassmorphism, advanced scroll-triggered animations, and a highly modular miniature component structure.
</p>

</div>

---

## 🚀 The Experience

NexusMart is designed for premium digital gear and lifestyle tech. The UI features a sleek dark-mode aesthetic, horizontal scrolling product spotlights, and a seamless split-panel authentication system. Every interaction is optimized for a fluid, app-like feel.

### ✨ God-Level Features
* 🎬 **Cinematic Hero:** High-contrast floating product displays with glowing drop-shadows and pulse animations.
* 🍱 **Bento-Box Grid:** A modern masonry layout for trending categories with staggered `ScrollTrigger` reveals.
* 🖱️ **Pinned Horizontal Scrolling:** A premium GSAP-powered horizontal slider for the "Spotlight" section, keeping users engaged without breaking page flow.
* 🔐 **Split-Panel Auth:** A glassmorphism login/signup ecosystem utilizing native SVG brand logos.
* 🌊 **Buttery Smooth Scrolling:** Powered by Lenis, overriding default jittery browser scrolling for absolute fluidity.
* 📱 **Pixel-Perfect Responsive:** Meticulously tailored for both ultrawide desktop monitors and mobile screens.

---

## 🛠️ The Tech Arsenal

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Core** | React 19 + Vite | Blazing fast component rendering and optimized builds. |
| **Styling** | Tailwind CSS v3 | Utility-first, highly customized dark-theme styling. |
| **Motion** | GSAP 3 | Heavy-lifting animations, timelines, and scroll-triggers. |
| **Scrolling** | Lenis | Studio-grade smooth scrolling. |
| **Icons** | Lucide React | Clean, consistent, lightweight SVG iconography. |

---

## 📂 Architecture & Directory Setup

Built with a highly scalable, atomic-inspired folder structure.

```text
nexus-mart/
├── src/
│   ├── assets/
│   │   └── heroimage/
│   │       └── quantam-headset.png    # High-res transparent dropshadow asset
│   ├── components/
│   │   ├── Auth/                      # Split-panel login/signup logic
│   │   ├── Featured/                  # Bento-box masonry grids
│   │   ├── Footer/                    # Multi-column mega footer & newsletter
│   │   ├── Hero/                      # Cinematic hero entrance & timelines
│   │   ├── Navbar/                    # Glassmorphism fixed navigation
│   │   └── Spotlight/                 # GSAP pinned horizontal scroll slider
│   ├── App.jsx                        # Global layout & Lenis initialization
│   ├── index.css                      # Tailwind directives & scrollbar hiding
│   └── main.jsx                       # React DOM entry point
├── package.json                       # Dependencies & gh-pages scripts
├── tailwind.config.js                 # Theme extensions and content scanning
└── vite.config.js                     # Configured with GitHub Pages base path