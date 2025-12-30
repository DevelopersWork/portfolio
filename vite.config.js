import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

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
    resolve: {
        alias: {
            'styled-components': '/workspaces/portfolio/src/__mocks__/styled-components.js',
        },
    },
    test: {
        globals: true,
        environment: 'node',
        isolate: false,
        server: {
            deps: {
                inline: ['styled-components'],
            },
        },
    },
});
