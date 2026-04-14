import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'call-assistant': resolve(__dirname, 'services/call-assistant.html'),
        'chat-bots': resolve(__dirname, 'services/chat-bots.html'),
        'app-development': resolve(__dirname, 'services/app-development.html'),
        'ai-ad-optimization': resolve(__dirname, 'services/ai-ad-optimization.html'),
        'crm': resolve(__dirname, 'services/crm.html'),
        'website-design': resolve(__dirname, 'services/website-design.html'),
      }
    }
  }
})