import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  build:"./dist",
  base:"/",
  // development proxy
  server:{
    proxy:{
      "/api":{
        target:"localhost:3000",
        changeOrigin:true,
        secure:false,
      }
    }
  },
})
