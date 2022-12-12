import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ react(),   VitePWA({
    registerType: 'autoUpdate',
    devOptions: {
      enabled: true
    },
    mode: "development",
    base: "/",
    srcDir: "src",
    filename: "sw.ts",
    includeAssets: ["/favicon.png"],
    strategies: "generateSW",
    manifest: {
      name: "PWA WORLD CASH",
      short_name: "WC",
      theme_color: "#6767e1",
      start_url: "/",
      display: "standalone",
      background_color: "#ffffff",
      icons: [
        {
          "src": "assets/react.svg",
          "sizes": "any",
          "purpose":"any"
        }
      
     
      ],
      lang:"es-MX",
      orientation:"portrait", 
      prefer_related_applications:false,
      scope: "/",


    },
  

  })]
})
