// import { defineConfig } from "vite";

// export default defineConfig({
//   base: "./",
//   build: {
//     minify: "terser",
//   },
// });


// import { defineConfig } from "vite";

// export default defineConfig({
//   base: '/interactive-portfolio/',  // Adjust this to your repository name
//   build: {
//     minify: "terser",
//   },
// });


import { defineConfig } from 'vite';

export default defineConfig({
  base: '/interactive-portfolio/',  // Adjust this to your repository name
  build: {
    outDir: 'dist',
    minify: 'terser',
  },
  server: {
    open: true,  // Automatically open the app in the browser
  },
  resolve: {
    alias: {
      '@': '/src',  // Optional: if you use aliasing
    },
  },
});
