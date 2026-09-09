import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves project sites from a /<repo-name>/ subpath, not the
  // domain root. The deploy workflow sets DEPLOY_TARGET=gh-pages; every other
  // build (Vercel, local dev/preview) keeps serving from '/'.
  base: process.env.DEPLOY_TARGET === 'gh-pages' ? '/roam-ready/' : '/',
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        // Keep the framework in its own long-lived chunk so content edits
        // don't invalidate it in the browser cache.
        manualChunks(id) {
          if (id.includes('node_modules')) return 'vendor'
        },
      },
    },
  },
})
