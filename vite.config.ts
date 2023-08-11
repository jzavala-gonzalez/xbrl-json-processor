
/// <reference types="vitest" />
// Configure Vitest (https://vitest.dev/config/)

// used https://onderonur.netlify.app/blog/creating-a-typescript-library-with-vite/ as a reference for setup

import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
// https://vitejs.dev/guide/build.html#library-mode
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'xbrl-json-processor',
      fileName: 'xbrl-json-processor',
    },
  },
  plugins: [dts()],
  test: {
    // ...
  },
});