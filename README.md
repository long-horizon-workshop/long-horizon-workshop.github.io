# Long-Horizon Workshop Website

This repository contains the website for the ICRA 2027 Long-Horizon Workshop

## Getting Started

To get the project up and running locally, follow these steps:

1.  **Install Dependencies:**
    ```bash
    npm install
    ```

2.  **Run the Development Server:**
    ```bash
    npm run dev
    ```
    This will start a local development server, and you can view the application in your browser, usually at `http://localhost:5173`.

## Deployment

This project is configured for manual GitHub Pages deployment without GitHub Actions.

1. **Build and publish**
   Run:
   ```bash
   npm run deploy
   ```
   This will first build the app and then publish the contents of the `dist` folder to the `gh-pages` branch using `gh-pages`.

2. **GitHub Pages settings**
   In GitHub, open the repository settings and configure GitHub Pages to serve from the `gh-pages` branch (root directory).

3. **Vite base path**
   The project uses `base: '/'` in [vite.config.ts](vite.config.ts), which is appropriate for a root GitHub Pages site such as this one.
