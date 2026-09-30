# General Aviation Passenger Briefing

A friendly, multilingual website designed to prepare passengers for private general aviation flights. The goal is to make pre-flight information clear, accessible, and visually engaging—drawing inspiration from aircraft safety cards.

---

## Features

- **Before Flying**: Key reminders to ensure a safe and comfortable flight, such as feeling well, eating before flying, and appropriate clothing.  
- **Passenger Briefing**: Clear guidance on seat belts, environmental factors, fire extinguishers, emergency procedures, traffic awareness, and a section for passenger questions.  
- **Multilingual Support**: English, French, Spanish, German, Italian and Portuguese, each on its own URL (`/en`, `/fr`, …) with hreflang, localized metadata and sitemap entries.  
- **Responsive Design**: Optimized for both desktop and mobile devices.  
- **Visual Clarity**: Illustrations and layout inspired by aircraft safety cards, making information easy to read at a glance.

---

## Development

Built with [Astro](https://astro.build) (static output) and Tailwind CSS v4.

```sh
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # type-check + static build into dist/
```

### Adding or fixing a language

Copy `src/i18n/en.ts` to `src/i18n/<code>.ts`, translate it, then register it in `src/i18n/index.ts` (`translations`, `languageNames`, `ogLocales`) and in `astro.config.mjs` (`locales`). Pages, hreflang, and the sitemap pick it up automatically.

---

## Contribution

This project welcomes contributions from anyone interested in improving passenger safety and experience. You can help by:

- Suggesting or adding content improvements  
- Enhancing illustrations and visual design  
- Fixing typos or language issues  
- Improving accessibility and readability  

We encourage **friendly collaboration** and value contributions that keep the experience simple, clear, and engaging for passengers.

---

## License

This project is released under the MIT License. Feel free to use and share responsibly.

---

## Legal Disclaimer

This website and its content are **provided as-is** for **educational and informational purposes only**. It is **not a substitute for professional flight training, pilot instruction, or official safety briefings**. The authors make no guarantees regarding accuracy, completeness, or suitability for any purpose. Users assume all responsibility for actions taken based on this information.