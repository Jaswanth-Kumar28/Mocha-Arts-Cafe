# Mocha Arts Cafe - React Version

This is the React + Vite npm version of the Mocha Arts Cafe website.

## Tech Stack

- React.js
- Vite
- JavaScript JSX
- JSON menu data
- CSS

## Folder Structure

```txt
mocha-react-app/
├── index.html
├── package.json
├── README.md
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── styles.css
    └── data/
        └── menuData.json
```

## Run Locally

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
```

## Deploy on Vercel

1. Push this project to GitHub.
2. Import the repo in Vercel.
3. Framework preset: Vite.
4. Build command: `npm run build`.
5. Output directory: `dist`.

## Notes

* Menu data is stored in `src/data/menuData.json`.
* Main React components are in `src/App.jsx`.
* Styling is in `src/styles.css`.
* Booking and contact forms currently show frontend success messages only.
