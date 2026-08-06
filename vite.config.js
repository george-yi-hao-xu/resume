import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [
        {
            name: "serve-workspace-packages",
            transformIndexHtml: {
                order: "pre",
                handler(html) {
                    return html
                        .replaceAll(
                            "../packages/one-col/src/main.js",
                            `/@fs/${resolve(__dirname, "packages/one-col/src/main.js")}`,
                        )
                        .replaceAll(
                            "../packages/two-cols/src/main.js",
                            `/@fs/${resolve(__dirname, "packages/two-cols/src/main.js")}`,
                        );
                },
            },
            configureServer(server) {
                server.middlewares.use((req, _res, next) => {
                    if (req.url?.startsWith("/packages/")) {
                        req.url = `/@fs/${resolve(__dirname, req.url.slice(1))}`;
                    }

                    next();
                });
            },
        },
    ],
    root: "src",
    base: "./",
    build: {
        outDir: "../dist",
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, "src/index.html"),
                one_col: resolve(__dirname, "src/one-col.html"),
                cn_redirect: resolve(__dirname, "src/cn.html"),
                two_cols: resolve(__dirname, "src/two-cols.html"),
                bilingual_redirect: resolve(__dirname, "src/index_bilingual.html"),
            },
        },
    },
    server: {
        host: true,
        // port: 10000,
    },
});
