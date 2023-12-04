import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import  * as PWA  from 'vite-plugin-pwa'

const { VitePWA } = PWA

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        // Atur properti manifest PWA di sini
        name: 'Koni Kulon Progo',
        short_name: 'Koni Kulon Progo',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
          {
            src: '/koni.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/koni.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
})
