import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Unocss from "unocss/vite";
import presetUno from "@unocss/preset-uno";
import presetWebFonts from "@unocss/preset-web-fonts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Unocss({
      presets: [
        presetUno(),
        presetWebFonts({
          provider: "google",
          fonts: {
            sans: "Roboto",
            mono: ["Fira Code", "Fira Mono:400,700"],
            lobster: "Lobster",
            lato: [
              {
                name: "Lato",
                weights: ["400", "700"],
                italic: true,
              },
              {
                name: "sans-serif",
                provider: "none",
              },
            ],
          },
        }),
      ],
    }),
  ],
});
