import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
    root: "src",
    base: "./",
    build: {
        outDir: "../dist",
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, "src/index.html"),
                cn: resolve(__dirname, "src/index_cn.html"),
            },
        },
    },
    server: {
        host: true,
        port: 8088,
    },
});
