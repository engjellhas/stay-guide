# StayGuide Design System & Style Guide

A premium, "Airy and Modern" design system inspired by Airbnb 2025 aesthetics. This guide provides the design tokens and utility classes for consistent UI development across projects.

---

## 🎨 Color Palette

The palette is designed for high contrast and a clean, premium feel.

### Core Colors

| Name           | Variable             | Hex (Light) | Hex (Dark) | Usage                             |
| :------------- | :------------------- | :---------- | :--------- | :-------------------------------- |
| **Primary**    | `--primary`          | `#ff385c`   | `#ff385c`  | Main actions, branding, CTAs.     |
| **Background** | `--background`       | `#ffffff`   | `#0f1117`  | Main page background.             |
| **Foreground** | `--foreground`       | `#222222`   | `#ffffff`  | Primary text.                     |
| **Muted**      | `--foreground-muted` | `#6a6a6a`   | `#9ca3af`  | Secondary/descriptive text.       |
| **Accent**     | `--accent`           | `#f7f7f7`   | `#1f2937`  | Hover states, secondary sections. |
| **Border**     | `--border`           | `#ebebeb`   | `#374151`  | Dividers and card borders.        |

### Semantic Colors

- **Destructive**: `#c13515` (Light) / `#7f1d1d` (Dark)
- **Halo Glow**: `rgba(189, 211, 255, 0.4)` (Variable: `--halo-glow`)

---

## 📐 Border Radius

StayGuide uses very soft, airy corners for a friendly and premium appearance.

| Token            | Value                        | CSS Variable   |
| :--------------- | :--------------------------- | :------------- |
| **Default (LG)** | `2rem` (32px)                | `--radius`     |
| **SM**           | `calc(var(--radius) - 4px)`  | `--radius-sm`  |
| **MD**           | `calc(var(--radius) - 2px)`  | `--radius-md`  |
| **XL**           | `calc(var(--radius) + 4px)`  | `--radius-xl`  |
| **4XL**          | `calc(var(--radius) + 16px)` | `--radius-4xl` |

---

## 🔡 Typography

- **Primary Font**: `Outfit` (Google Fonts)
- **Fallback**: `sans-serif`
- **Utility Classes**:
  - `.title-display`: `font-weight: 500; letter-spacing: -0.02em;` (Used for headers)
  - `.text-secondary`: Maps to `--foreground-muted`.

---

## ✨ Effects & UI Components

### Glassmorphism

Premium translucent effects for navigation and overlays.

| Class         | Backdrop Blur | Background                 | Border                               |
| :------------ | :------------ | :------------------------- | :----------------------------------- |
| `.glass`      | `12px`        | `rgba(255, 255, 255, 0.7)` | `1px solid rgba(0, 0, 0, 0.05)`      |
| `.glass-dark` | `12px`        | `rgba(0, 0, 0, 0.3)`       | `1px solid rgba(255, 255, 255, 0.1)` |

### Halo Effect

A soft background glow used to highlight elements or sections.

```css
.halo {
  background: radial-gradient(
    circle at center,
    var(--halo-glow) 0%,
    transparent 70%
  );
  filter: blur(40px);
}
```

### Card Style

`.glass-card`: Combined base card style with `--radius` and subtle shadow.

- **Shadow**: `0 4px 12px rgba(0, 0, 0, 0.05)`

---

## 🎬 Animations

### Fade In Up

Standard entry animation for sections and hero elements.

- **Class**: `.animate-fade-in-up`
- **Duration**: `0.8s`
- **Ease**: `ease-out`
