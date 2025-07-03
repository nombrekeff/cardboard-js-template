import { defineConfig } from 'tsup'

export default defineConfig({
    entry: ['src/index.ts'],
    clean: true,
    sourcemap: true,
    dts: true,
    format: ['iife'],
    globalName: 'app',
    platform: 'browser',
    outDir: 'dist/src',
    splitting: true,
    external: [],
    minify: true,
    treeshake: true,
})