# Linear Design System Specification (v1.1.0)

This document defines the visual engineering standards for the `ui-component-library`. It serves as the definitive source of truth for all styling, typography, and interactive decisions.

## 1. Core Philosophy: Darkness as a Native Medium
Unlike traditional "dark modes" which are simply inverted light designs, this system treats darkness as the native medium. 

- **Subtractive Design**: UI is defined by what is excluded. There are no solid-colored containers besides high-priority CTAs.
- **Luminance Stacking**: Elevation is communicated through background luminance stepping (`0.02` → `0.04` → `0.05` white opacity) rather than traditional drop shadows. 
- **Chiseled Borders**: Structure is created through whisper-thin semi-transparent white borders (`rgba(255,255,255,0.08)`) that catch the light like a beveled edge.

## 2. Color Palette
The system is strictly achromatic, punctuated by a single brand accent.

| Semantic Name | Hex / Value | Role |
| :--- | :--- | :--- |
| `Marketing Black` | `#08090a` | Main canvas background. |
| `Panel Dark` | `#0f1011` | Sidebar and panel surfaces (Level 1). |
| `Surface Elevated`| `#191a1b` | Cards, popovers, and elevated content (Level 2). |
| `Brand Indigo` | `#5e6ad2` | Primary brand CTA background. |
| `Accent Violet` | `#7170ff` | Active states, links, and focus rings. |
| `Foreground` | `#f7f8f8` | Primary text (Prevents eye strain vs pure white). |
| `Text Secondary` | `#d0d6e0` | Support text and body copy. |
| `Text Tertiary` | `#8a8f98` | Muted labels and placeholders. |

## 3. Typography: The Inter Identity
Typography isn't just a choice; it's a technical specification in this system.

### 3.1 OpenType Features (Non-Negotiable)
The font **Inter Variable** must be rendered with specific geometric alternates enabled:
- `cv01`: Single-story lowercase `a`.
- `ss03`: Geometric zero.
- `antialiased`: Subpixel rendering mandatory.

### 3.2 Signature Weights
- **Weight 400**: Standard reading text.
- **Weight 510 (Signature)**: The "Workhorse" weight for UI labels, buttons, and navigation. 
- **Weight 590**: Emphasis and headings.

### 3.3 Tracking (Negative Spacing)
Display text must use aggressive negative letter-spacing to maintain the "engineered" look:
- **72px**: `-1.584px`
- **48px**: `-1.056px`
- **32px**: `-0.704px`

## 4. Component Standards

### 4.1 Surface Radii
- **Micro (2px)**: Inline badges, toolbar buttons.
- **Standard (6px)**: Buttons, inputs, functional elements.
- **Card (8px)**: Standard cards and popovers.
- **Panel (12px)**: Large feature panels and section containers.

### 4.2 Elevation & Shadows
Instead of soft blurs, use multi-layered stacks for high-fidelity depth:
- **Dialog/Modal**: `rgba(0,0,0,0.4) 0px 8px 2px, rgba(0,0,0,0.08) 0px 0px 1px`.
- **Inset Shadow**: `rgba(0,0,0,0.2) 0px 0px 12px 0px inset` (Used for recessed panels).

## 5. Do's and Don'ts

### Do
- Always use `rgba(255,255,255, 0.05)` for borders on dark backgrounds.
- Reserve Brand Indigo solely for primary interactive triggers.
- Use `rounded-md` (6px) religiously for functional UI.

### Don't
- **No Pure White Text**: Avoid `#ffffff`; use `#f7f8f8` to maintain the "calm" atmosphere.
- **No Drop Shadows on Dark**: Do not use dark shadows on dark backgrounds; they are invisible visual noise. Use background steps instead.
- **No Generic Bold**: Avoid `font-bold` (700); the maximum emphasis weight should be 590.
