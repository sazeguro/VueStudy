import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  {languageOptions: { globals: globals.browser }},

  pluginJs.configs.recommended,

  ...pluginVue.configs["flat/essential"],

  skipFormatting,
  
  {
    rules:{
      "vue/no-unused-vars": "off",
    }
  }
];