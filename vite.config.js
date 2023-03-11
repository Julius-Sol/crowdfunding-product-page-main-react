import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://julius-sol.github.io/crowdfunding-product-page-main-react/',
  plugins: [react()],
})
