import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import basicSsl from '@vitejs/plugin-basic-ssl';
// https://vite.dev/config/
export default defineConfig({
  base: '/prueba1/', // Reemplázalo con el nombre de tu repositorio
  build: {
    outDir: 'docs'
  }
});
