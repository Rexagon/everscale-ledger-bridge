import basicSsl from '@vitejs/plugin-basic-ssl'

/** @type {import('vite').UserConfig} */
export default {
  root: 'src',
  build: {
    outDir: '../docs',
    assetsDir: './',
    emptyOutDir: true,
  },
  plugins: [
    basicSsl(),
  ],
  server: {
    https: true,
  },
}
