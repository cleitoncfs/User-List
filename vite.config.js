import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    base: "/User-List/", // O mesmo valor da propriedade "homepage" no package.json
});
