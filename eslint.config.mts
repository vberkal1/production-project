import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import i18next from "eslint-plugin-i18next";

export default defineConfig([
  // Базовый конфиг
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: {
      js,
      react: pluginReact,
      i18next,
    },
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
      "i18next/no-literal-string": [
        "error",
        {
          mode: "jsx-only", // Проверять только JSX разметку
          "jsx-components": {
            exclude: ["Trans"],
          },
          // Игнорировать определенные атрибуты в JSX
          ignoreAttribute: [
            "className",
            "style",
            "type",
            "name",
            "id",
            "key",
            "ref",
            "data-testid",
          ],
          // Разрешить числа и спецсимволы
          allow: [
            "^\\d+$", // числа
            "^[\\.,!?;:\\-]+$", // пунктуация
            "^\\s+$", // пробелы
          ],
        },
      ],
    },
  },
]);
