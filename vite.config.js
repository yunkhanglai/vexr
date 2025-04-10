import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // allow external access
    port: 3000, // or use process.env.PORT if needed
    allowedHosts: 'c508ce7b-e330-4726-883b-a7b930ed1174-00-2q8ucxk7vzapo.worf.replit.dev' // allow Replit's dynamic URL
  }
});
 