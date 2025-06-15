import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    return {
        // Always use root path for all deployments
        base: '/',
        plugins: [vue()],
        css: {
            preprocessorOptions: {
                scss: {
                    silenceDeprecations: ["mixed-decls", "color-functions", "global-builtin", "import"],
                },
            },
        },
        build: {
            // Force clean build
            emptyOutDir: true,
            // Generate different asset names each time
            rollupOptions: {
                output: {
                    assetFileNames: 'assets/[name]-[hash][extname]',
                    chunkFileNames: 'assets/[name]-[hash].js',
                    entryFileNames: 'assets/[name]-[hash].js'
                }
            }
        }
    }
})