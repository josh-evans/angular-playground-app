const typescriptEslintRecommended = require('@typescript-eslint/eslint-plugin')
    .configs.recommended;

module.exports = {
    env: {
        amd: true,
        browser: true,
        es6: true,
        jasmine: true,
        node: true,
    },
    extends: [
        'airbnb-base',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    parserOptions: {
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
    },
    root: true,
    rules: {
        'import/prefer-default-export': 'off', // Prefer the use of named imports to promote clarity. Tooling differs on handling default imports/exports, so best to just avoid them altogether
        'import/no-default-export': 'error', // Throw lint error if found using 'export default'
        'import/no-unresolved': 'error', // Turn on errors for missing imports
        'prettier/prettier': 'error',
        curly: ['error', 'multi-line', 'consistent'],
        'no-console': ['error', { allow: ['warn', 'error'] }],
        'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
        'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
        quotes: ['error', 'single', { allowTemplateLiterals: true }],
        'quote-props': ['error', 'as-needed'],
    },
    overrides: [
        {
            // Typescript files
            files: ['**/*.ts', '**/*.tsx'],
            parser: '@typescript-eslint/parser', // Specifies the ESLint parser
            parserOptions: {
                project: './tsconfig.json',
                tsconfigRootDir: '.',
            },
            rules: Object.assign(typescriptEslintRecommended.rules, {
                'no-unused-vars': 'off',
                '@typescript-eslint/no-unused-vars': 'error',
                'no-useless-constructor': 'off',
                '@typescript-eslint/no-useless-constructor': 'error',
                '@typescript-eslint/explicit-function-return-type': [
                    'error',
                    {
                        allowTypedFunctionExpressions: true,
                    },
                ],
            }),
        },
        {
            // Config files
            files: ['*.conf*.js'],
            rules: {
                'func-names': 'off',
                'import/no-extraneous-dependencies': [
                    'error',
                    {
                        devDependencies: true,
                    },
                ],
            },
        },
        // {
        //     // Test files
        //     files: ['**/*.spec*.ts'],
        //     rules: {
        //         'func-names': 'off',
        //         'import/no-extraneous-dependencies': ['error', {
        //             'devDependencies': true
        //         }],
        //     }
        // }
    ],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
            // Allows us to use module import path aliases in tsconfig.json
            // Use <root>/tsconfig.json
            typescript: {},
        },
    },
    plugins: ['import', '@typescript-eslint', 'prettier'],
};
