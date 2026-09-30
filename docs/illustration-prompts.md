# Illustration prompts

Twelve images, two per briefing section. Drop the results into `src/assets/illustrations/` using the filenames below (PNG, same names, nothing else changes). Astro resizes and converts them to WebP at build time.

## Format

- Aspect ratio 4:5 portrait (squarer than the old 250×400 panels). Generate at 1600×2000 or 1200×1500. The site downsizes and rounds the corners itself.
- Full-bleed artwork: the scene fills the entire canvas edge to edge. No border, no outline around the image, no frame, no rounded corners, no drop shadow, no margin.
- No text, letters or numbers in the image, except where a prompt says otherwise. No logos, no aircraft registration.
- Keep the two panels of a pair visually consistent: same characters, same palette, same line weight.
- For best consistency, generate `seatbelts-1` first and pass it as a style/character reference for every other image.

## Shared style block

Paste this at the start of every prompt.

> Flat vector illustration in the style of an aircraft safety card. Full-bleed 4:5 portrait scene filling the whole canvas edge to edge, with no frame, border or rounded corners. Uniform thick dark navy outlines on the shapes and characters inside the scene, no gradients, no textures, no shadows, minimal shading with at most one flat darker tone per shape. Muted palette: dusty teal-grey background (#B9D0CC) or warm sand background (#E3CFAE), terracotta red-orange (#D26A50) for the passenger's T-shirt and for arrows and warning marks, navy blue (#2F4B66) for trousers and the pilot's uniform, cream (#E8D8B8) for seats, soft peach skin tones. Characters: the passenger is an adult man with short dark hair and a terracotta T-shirt; the pilot wears a navy uniform, a peaked cap with a small badge, and a tie. Simple friendly faces, calm expressions. Cabin of a small four-seat single-engine aircraft, tight and cosy, not an airliner. Clear single subject, background colour continuing to all four edges, generous empty space, readable at 150 px wide.

Avoid: any frame, border or outline around the image, rounded-corner card, margins, text, watermarks, photorealism, airliner interiors, gradients, 3D rendering, extra fingers, cluttered backgrounds.

## Seat belts

Text: seat belts for taxi, takeoff and landing; shoulder harness for takeoff and landing; seat adjusted and locked.

**`seatbelts-1.png`** (teal-grey background)
Close-up of a passenger's hands clicking a lap belt buckle closed across their lap, in a cream aircraft seat. A terracotta arrow points at the buckle. Belt webbing in navy.

**`seatbelts-2.png`** (teal-grey background)
Passenger seated upright and relaxed in a cream seat, wearing both the lap belt and the diagonal shoulder harness, one hand resting on the buckle. A small terracotta seat-adjustment lever visible at the seat base, with a tiny arrow, to suggest "seat adjusted and locked".

## All environmental factors

Text: note where the air vents are; the pilot explains the flight conditions; tell the pilot at the first sign of discomfort or sickness.

**`environmental-1.png`** (sand background)
Overhead air vent (round gimbal nozzle) on the cabin ceiling, with three curved terracotta airflow lines coming out of it, and the passenger's hand reaching up to twist it. Passenger's head and shoulders visible below, looking up at it.

**`environmental-2.png`** (teal-grey background)
Passenger looking slightly pale and uncomfortable, one hand on the stomach or forehead, raising the other hand toward the pilot beside them to signal. A terracotta exclamation mark near them. The pilot, half turned toward them, looks attentive and concerned, a headset around the neck.

## Fire extinguisher

Text: know where the fire extinguisher is; the pilot explains how to use it.

**`fire-1.png`** (sand background)
Passenger turning in their seat and pointing to a small red fire extinguisher stowed in a bracket on the floor or wall between the seats. A terracotta arrow above the extinguisher. Keep the extinguisher clearly readable as such: cylinder, handle, hose, safety pin.

**`fire-2.png`** (teal-grey background)
Pilot, seen from the chest up, holding the fire extinguisher upright in both hands with one finger on the safety pin, demonstrating. Passenger partly visible at the edge, watching. A terracotta highlight ring around the pin.

## Egress and emergency

Text: exit doors on the side; after an evacuation head toward the tail; not through the door on the fire side; unlock doors before an emergency landing.

**`egress-1.png`** (teal-grey background)
Passenger walking away from the aircraft toward the tail, seen from the side: the aircraft's tail fin and horizontal stabilizer visible at the top, a terracotta arrow pointing along the fuselage toward the tail. Grey tarmac strip at the bottom.

**`egress-2.png`** (sand background)
Inside the cabin: passenger's hand unlocking the door, pulling the latch handle to the "unlocked" position, a small padlock symbol in terracotta open beside it. A small window in the door shows flames in the far corner on the opposite side, with a terracotta "no" mark (circle with diagonal line) over the flame side. No text.

## Traffic

Text: the pilot scans for other aircraft, the passenger helps look; "see something, say something"; sterile cockpit during critical phases.

**`traffic-1.png`** (sand background)
Passenger looking out of the side window and pointing at a small distant aircraft in the sky; a second small aircraft silhouette in the distance. A speech-bubble outline containing a small terracotta exclamation mark comes from the passenger.

**`traffic-2.png`** (teal-grey background)
Pilot at the controls, hands on the yoke, looking ahead through the windshield with a small aircraft visible in the distance. A single terracotta finger-to-lips "shh" hand gesture in a small circle in the corner, to suggest the sterile cockpit. Headset on.

## Your questions

Text: do you have any questions for your pilot?

**`questions-1.png`** (sand background)
Pilot turned slightly toward the passenger seat with a friendly open expression, one hand open in an inviting gesture, a small aircraft visible through the window behind.

**`questions-2.png`** (teal-grey background)
Passenger with one hand raised, looking curious, a large dark green-grey question mark beside them filling most of the panel (same green-grey as the current question mark, #3C4A3E). No text other than the question mark.
