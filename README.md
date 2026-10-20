# Sebastian Varon: Portfolio

Personal portfolio for Sebastian Varon, full-stack and iOS developer. Live at **https://varon-portfolio.vercel.app**.

## Stack

- Next.js 16 (App Router), React 19 and TypeScript
- Tailwind CSS 4 with a shadcn-style `components/ui` folder
- Motion for scroll reveals and the floating nav
- A WebGL2 liquid-particle hero (Sculpture Hero from 21st.dev, by guglielmogiannattasio.it), fed by a custom sculpture rendered with `scripts/generate-sculpture.py`

## Editing content

All copy lives in `lib/content.ts`. Add a project by adding an entry to `projects`.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000. Run `npm run lint` and `npm run build` before pushing.

## Regenerating the sculpture

```bash
python3 -m pip install numpy pillow
python3 scripts/generate-sculpture.py
```
