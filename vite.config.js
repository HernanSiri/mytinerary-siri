import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Asegúrate de importar la librería path

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Ruta absoluta a tu directorio "src"
    },
  },
});