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
                cn_domestic: resolve(__dirname, "src/cn.html"),
                cn: resolve(__dirname, "src/index_cn.html"),
                bilingual: resolve(__dirname, "src/index_bilingual.html"),
            },
        },
    },
    server: {
        host: true,
        port: 10000,
    },
});
