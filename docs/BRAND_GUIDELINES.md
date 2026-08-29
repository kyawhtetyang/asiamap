# AsiaMap Brand Guidelines

## Purpose

This document is the canonical visual brand reference for AsiaMap. Product and website implementation should follow this guide unless a later version explicitly updates it.

## Brand Character

AsiaMap is a Myanmar container transportation and logistics business established in 1993.

The visual system should feel:

- dependable
- industrial
- operational
- established
- clear and restrained

Avoid luxury, playful, overly futuristic, or highly decorative styling.

## Color System

| Role | Name | Hex | Usage |
| --- | --- | --- | --- |
| Primary | Deep Harbor | `#0F3D4C` | Primary actions, brand surfaces, links |
| Primary Dark | Deep Navy | `#092D38` | Navigation, footer, dark hero surfaces |
| Secondary | Steel Blue | `#356778` | Supporting text, links, secondary details |
| Accent | Cargo Amber | `#E0A12D` | Active states, emphasis, small highlights |
| Background | Cool Off-White | `#F5F7F6` | Main page background |
| Surface | White | `#FFFFFF` | Cards and primary surfaces |
| Surface Alt | Mist | `#E9EFEE` | Alternate sections and subtle contrast |
| Text | Charcoal | `#142126` | Primary text |
| Text Muted | Slate | `#64747A` | Secondary text |
| Border | Soft Gray | `#D7E0DF` | Dividers and borders |

### Color Usage

- Deep Navy anchors the header, footer, and major dark surfaces.
- Deep Harbor is the primary interactive and brand color.
- Cargo Amber is an accent, not a dominant brand surface. Keep its use restrained, approximately 5–10% of a page.
- Use Cool Off-White and White for most content surfaces.
- Maintain strong text/background contrast and visible keyboard focus states.

## Typography

### Primary Display Typeface — Barlow Condensed

Use **Barlow Condensed** for:

- H1 and H2 headings
- major display statements
- large proof points and statistics
- short high-impact logistics labels where appropriate

Recommended weights:

- 700 — primary headings and statistics
- 600 — secondary display text when a lighter hierarchy is needed

### Supporting Typeface — Barlow

Use **Barlow** for:

- body copy
- H3 and smaller headings
- navigation
- buttons
- form controls
- labels and captions

Recommended weights:

- 400 — body text
- 500 — supporting text
- 600 — navigation, buttons, H3
- 700 — strong labels when needed

### Typography Principles

- Headings should be compact, confident, and operational.
- Body text should remain comfortable for longer reading.
- Do not use Barlow Condensed for paragraphs or form input text.
- Avoid excessive uppercase. Reserve uppercase and letter spacing for short labels and eyebrows.
- Keep the system to the Barlow family unless a future brand revision explicitly changes it.

### Fallbacks

Use system sans-serif fallbacks when the preferred web fonts are unavailable.

## Buttons

### Primary

- Background: Deep Harbor `#0F3D4C`
- Text: White `#FFFFFF`
- Typeface: Barlow 600
- Border radius: `8px`
- Minimum height: approximately `46px`
- Use for the main action on a section or page.

### Secondary on Dark Surfaces

- Transparent or subtle translucent background
- Light border
- White text
- Typeface: Barlow 600
- Border radius: `8px`

### Header CTA

- Background: Cargo Amber `#E0A12D`
- Text: Deep Navy `#092D38`
- Use only for the primary transport/contact action in the navigation.

### Interaction

- Hover states may use a small tonal change and subtle upward movement.
- Keyboard focus must remain clearly visible.
- Disabled states must be visibly distinct without relying only on color.

## Shape and Layout

- Standard button radius: `8px`
- Prefer restrained corners over highly rounded/pill-shaped components.
- Cards should use borders and spacing before heavy shadows.
- Use clear grid alignment and generous but controlled whitespace.
- Strong horizontal/vertical structure should reinforce the logistics and operational character.

## UI Treatment

### Cards

- White or alternate neutral surfaces
- Soft borders
- Minimal shadow
- Clear content hierarchy
- Avoid decorative glassmorphism or excessive gradients

### Sections

- Alternate White, Cool Off-White, and Mist surfaces when hierarchy requires it.
- Deep Navy/Deep Harbor may be used for hero and CTA sections.
- Cargo Amber should remain a highlight rather than a large background color.

### Icons

- Prefer simple functional line or solid icons.
- Avoid cartoon-like or ornamental icon styles.

## Brand Application Example

```text
H1 / H2        Barlow Condensed 700
Display stats  Barlow Condensed 700
H3             Barlow 600
Body           Barlow 400
Navigation     Barlow 600
Buttons        Barlow 600
Eyebrows       Barlow 700 + restrained letter spacing
```

## Source of Truth

The relationship is:

```text
docs/BRAND_GUIDELINES.md
        ↓
frontend/src/styles.css
        ↓
Home / Services / Contact
```

This document defines the brand system. The frontend stylesheet implements it. Future visual changes should update this guide when they change the canonical brand rules.
