module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
    ],
    plugins: [
        'prettier',
    ],
    rules: {
        'prettier/prettier': 'error',
    },
    parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
    },
    env: {
        node: true,
    },
    overrides: [
        {
            files: ['**.test.ts'],
            extends: [
                'plugin:jest:recommended',
            ],
        },
    ],
};