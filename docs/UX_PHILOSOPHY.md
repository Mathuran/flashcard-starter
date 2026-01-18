# UX Philosophy: Retro-Tactile Flashcard App

## 1. Core Visual Concept
**"Digital Nostalgia"**
The visual design aims to evoke the feeling of early personal computing and arcade gaming (late 80s / early 90s). It relies on distinct, bold geometry, high contrast, and a tactile "clicky" feel for interactive elements. This isn't just a skin; it's a functional aesthetic that prioritizes clarity and satisfying interaction.

### Key Characteristics
*   **Bold Borders**: All functional elements (cards, buttons, containers) use thick, solid borders (2px-4px).
*   **Flat & Vibrant**: No gradients or subtle shadows. Shadows are solid blocks of color (hard drop shadows) to create depth without softness.
*   **Monospace Typography**: Text should feel mechanical and precise, using modern generic monospace font stacks or Google Fonts like 'Space Mono' or 'Press Start 2P' (for headers).

## 2. Color Palette
A restricted, high-contrast palette ensures accessibility and adherence to the retro theme.

| Color Token | Hex Code | Usage |
| :--- | :--- | :--- |
| **Canvas** | `#FAFAF9` | App background (Warm Off-White) |
| **Ink** | `#1C1917` | Primary text, borders, icons (Soft Black) |
| **Paper** | `#FFFFFF` | Card background, input fields |
| **Accent Primary** | `#3B82F6` | Primary Actions, Focus Rings (Retro Blue) |
| **Success** | `#22C55E` | "Got it" actions (Vibrant Green) |
| **Danger** | `#EF4444` | "Missed it" actions (Pixel Red) |
| **Shadow** | `#000000` | Hard drop shadows (25% opacity or solid) |

## 3. Component Theming

### The Flashcard
*   **Shape**: Rectangular with slight border-radius (e.g., `rounded-lg`).
*   **Border**: `border-4 border-ink`.
*   **Shadow**: A "hard" shadow offset (e.g., `box-shadow: 6px 6px 0px 0px #1C1917`).
*   **State**: 
    *   **Front**: Question text in large, bold serif or monospace.
    *   **Back**: Answer text. Distinct background color or border style to differentiate from front (e.g., dotted border inner).

### Buttons ("Got it" / "Missed it")
*   **Style**: Chunky, clickable block.
*   **Normal**: Solid background (Success/Danger colors), White text, `border-2 border-ink`, Hard shadow.
*   **Hover**: Slight translate up `(-2px)`, shadow grows.
*   **Active (Pressed)**: Translate down to cover shadow, simulating a mechanical keypress.
*   **Focus**: Thick outline offset `outline-offset-2 outline-4`.

### Layout & Summary
*   **Container**: Centered, max-width constraints to mimic a "screen" or "window".
*   **Summary Screen**: Uses a "Scorecard" aesthetic, possibly looking like a receipt or a high-score table.

## 4. Animation & Motion
Animations should happen efficiently to not block the learning flow. They should feel "snappy" rather than "smooth".

*   **Card Flip**: 
    *   CSS 3D Transform (`rotateY(180deg)`).
    *   Duration: `0.4s` or `0.6s`.
    *   Timing Function: `cubic-bezier(0.175, 0.885, 0.32, 1.275)` (bouncy/springy) or purely linear for a more robotic feel.
    *   *Note*: Ensure content on the back is hidden during rotation (`backface-visibility: hidden`).
*   **Transitions**: Instant color changes or very fast fades (`100ms`).
*   **Feedback**: On button press, use scaling (`scale-95`) to provide immediate tactile feedback.

## 5. Accessibility (A11y) & ARIA Strategy
The retro theme must not compromise usability.

*   **HTML Structure**: Semantic `<main>`, `<article>` (for the card), and `<button>` tags.
*   **Focus Management**: 
    *   The "Card" needs to be focusable if it's clickable.
    *   Use `tabindex="0"` on the card.
    *   Ensure the focus ring is highly visible (using `Accent Primary` color).
*   **Screen Readers**:
    *   **Card Flip**: The card container should be an `aria-live="polite"` region or use `aria-details`. 
    *   When the card flips, the new content (Answer) must be announced. 
    *   Alternatively, simple `button` roles for the card with `aria-expanded` interaction state might work, but given it's a quiz, simply reading the content when it changes is vital.
*   **Contrast**: All text combinations in the palette meet WCAG AA standards (4.5:1 ratio).
*   **Reduced Motion**: Respect `prefers-reduced-motion` media query by disabling the flip animation and replacing it with a simple cross-fade for sensitive users.

## 6. Implementation Reference
Based on `flashCardChallenge.md`, these styles apply to:
*   `Flashcard` Component
*   `Controls` Component (The Got it/Missed it buttons)
*   `ScoreBoard` / `Summary` Component
