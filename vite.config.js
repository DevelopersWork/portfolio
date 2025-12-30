import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
    plugins: [react()],
    esbuild: {
        loader: "jsx",
        include: /src\/.*\.[tj]sx?$/,
        exclude: [],
    },
    optimizeDeps: {
        esbuildOptions: {
            loader: {
                '.js': 'jsx',
            },
        },
    },
    test: {
        globals: true,
        environment: 'node',
        isolate: false,
        alias: {
            'styled-components': fileURLToPath(new URL('./src/__mocks__/styled-components.js', import.meta.url)),
        },
        server: {
            deps: {
                inline: ['styled-components'],
            },
        },
    },
});
