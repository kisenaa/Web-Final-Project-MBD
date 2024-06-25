import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import parser from '@typescript-eslint/parser'
import eslintConfigPrettier from 'eslint-config-prettier'
import tailwind from 'eslint-plugin-tailwindcss'
import globals from 'globals'

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  ...pluginVue.configs['flat/recommended'],
  ...tailwind.configs['flat/recommended'],
  {
    plugins: {
      'typescript-eslint': tseslint,
      vue: pluginVue,
      tailwindcss: tailwind,
    },
    languageOptions: {
      parserOptions: {
        parser: parser,
        project: './tsconfig.json',
        extraFileExtensions: ['.vue'],
        sourceType: 'module',
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        computed: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        defineProps: 'readonly',
        onMounted: 'readonly',
        onUnmounted: 'readonly',
        reactive: 'readonly',
        ref: 'readonly',
        shallowReactive: 'readonly',
        shallowRef: 'readonly',
        toRef: 'readonly',
        toRefs: 'readonly',
        watch: 'readonly',
        watchEffect: 'readonly',
        useRouter: 'readonly',
        ...globals.node,
        ...globals.browser,
      },
    },
    rules: {
      'no-undef': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-unused-vars': 'off',
      'no-console': 'warn',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'vue/require-default-prop': 'off',
    },
  },
  eslintConfigPrettier
)
