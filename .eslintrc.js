module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    overrides: [
        {
            files: ['**/*.tsx'],
            parser: '@typescript-eslint/parser',
            rules: {
                'react/prop-types': 'off',
            },
        },
    ],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
        // "project": "./tsconfig.json"
    },
    plugins: ['react', '@typescript-eslint', 'react-hooks', 'prettier'],
    rules: {
        'react/prop-types': 0,
        '@typescript-eslint/no-var-requires': 0,
        'react-hooks/rules-of-hooks': 'error',
        'no-unused-vars': ['error'],
        '@typescript-eslint/no-unused-vars': ['error'],
        indent: ['error', 4],
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
}
