// vite.config.js
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      // 여러 진입점은 객체 또는 배열로 지정할 수 있습니다.
      entry: resolve(__dirname, 'index.ts'),
      name: 'MiniDataStructure',
      // 적절한 확장자가 추가됩니다.
      fileName: 'mini-data-structure',
    },
  },
});
