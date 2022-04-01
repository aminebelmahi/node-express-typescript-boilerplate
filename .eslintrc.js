module.exports = {
     root: true,
     parser: '@typescript-eslint/parser',
     parserOptions: {
          ecmaVersion: 2020,
          sourceType: 'module',
          ecmaFeatures: {
               jsx: true,
          },
     },
     settings: {
          react: {
               version: 'detect',
          },
          'import/resolver': {
               node: {
                    paths: ['src'],
                    extensions: ['.js', '.ts'],
               },
          },
     },
     env: {
          amd: true,
          node: true,
          jest: true,
     },
     extends: [
          'eslint:recommended',
          'plugin:react/recommended',
          'plugin:jsdoc/recommended',
          'plugin:prettier/recommended', // Make sure this is always the last element in the array.
     ],
     plugins: ['simple-import-sort', 'prettier'],
     rules: {
          'no-console': 'warn',
          'prettier/prettier': ['error', {}, { usePrettierrc: true }],
          '@typescript-eslint/explicit-function-return-type': 'off',
          'simple-import-sort/imports': 'error',
          'simple-import-sort/exports': 'error',
          'jsdoc/require-returns-type': 0,
          'jsdoc/require-param-type': 0,
          'jsdoc/require-description-complete-sentence': 'warn',
          'jsdoc/require-description': 'warn',
          // Conflict with jsdoc
          'jsdoc/check-alignment': 0,
          'jsdoc/require-jsdoc': [
               'warn',
               {
                    publicOnly: false,
                    require: {
                         ClassDeclaration: true,
                         ClassExpression: true,
                         FunctionDeclaration: true,
                         ArrowFunctionExpression: true,
                         FunctionExpression: true,
                         MethodDefinition: true,
                    },

                    contexts: [
                         'ClassDeclaration',
                         'ClassProperty:not([accessibility=/(private|protected)/])',
                         'ExportNamedDeclaration:has(VariableDeclaration)',
                         'FunctionExpression',
                         'MethodDefinition:not([accessibility=/(private|protected)/]) > FunctionExpression',
                         // we need to precise AST needed to make them required
                         // https://github.com/gajus/eslint-plugin-jsdoc/issues/496#issuecomment-591204300
                         'TSEnumDeclaration',
                         'TSInterfaceDeclaration',
                         'TSPropertySignature',
                         'TSMethodSignature',
                         // This is required for ts type but it causes problem in nested object because its duplicates
                         // documentation, lets just deactivate it in nested object in types.
                         'TSTypeLiteral',
                         'TSEnumMember',
                         'TSTypeAliasDeclaration',
                    ],
               },
          ],
     },
};
