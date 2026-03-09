import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // Базовый конфиг
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js, react: pluginReact },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
  },

  // TypeScript правила
  tseslint.configs.recommended,
  // React правила
  pluginReact.configs.flat.recommended,

  // Настройки React
  {
    settings: {
      react: {
        version: "detect", // автоматически определит версию из package.json
      },
    },
  },
  // Переопределения
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    rules: {
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
    },
  },
]);
