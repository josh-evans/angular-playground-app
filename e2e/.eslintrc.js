module.exports = {
    extends: '../.eslintrc.js',
    overrides: [
        {
            // Test/Config files
            files: ['**/*.conf/*.js', 'src/**'],
            rules: {
                'func-names': 'off',
                '@typescript-eslint/no-unused-vars': 'off',
                '@typescript-eslint/explicit-function-return-type': 'off',
                '@typescript-eslint/explicit-member-accessibility': 'off',
                '@typescript-eslint/no-explicit-any': 'warn',
                'import/no-extraneous-dependencies': [
                    'error',
                    {
                        devDependencies: true, // Allow imports from devDependencies in test files
                    },
                ],
            },
        },
    ],
};
