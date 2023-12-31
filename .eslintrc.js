module.exports = {
  "extends": ["airbnb", "airbnb-typescript", "airbnb/hooks", "prettier"],
  "plugins": ["react", "import", "jsx-a11y", "promise", "react", "@typescript-eslint", "prettier"],
  "env": {
    "browser": true,
    "es2021": true
  },
  "globals": {
    "JSX": true
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "project": ["./tsconfig.json"],
    "tsconfigRootDir": __dirname,
    "sourceType": "module"
  },
  "ignorePatterns": ['.eslintrc.js','rollup.config.js','stories','vite.config.js','storybook-static','jest.config.js','assets'],
  "rules": {
    "react/jsx-key": "error",
    "react/react-in-jsx-scope": 0,
    "react/jsx-props-no-spreading": 0,
    "react/jsx-no-useless-fragment": 0,
    "react/jsx-filename-extension": 0,
    "react/prop-types": 0,
    "react/no-array-index-key": 1,
    "react/jsx-one-expression-per-line": 0,
    "react/function-component-definition": 0,
    "react/require-default-props": 0,

    "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/indent": 0,
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/consistent-type-assertions": [
      "error",
      { "assertionStyle": "as", "objectLiteralTypeAssertions": "allow-as-parameter" }
    ],
    "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
    "@typescript-eslint/prefer-includes": "warn",
    "@typescript-eslint/no-unsafe-return": "error",
    "@typescript-eslint/no-unsafe-call": "error",
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        "vars": "all",
        "args": "after-used",
        "ignoreRestSiblings": false,
        "caughtErrors": "all",
        "argsIgnorePattern": "^_"
      }
    ],
    "@typescript-eslint/prefer-nullish-coalescing": "warn",
    "@typescript-eslint/prefer-optional-chain": "warn",
    "@typescript-eslint/prefer-readonly": "warn",
    "@typescript-eslint/type-annotation-spacing": "error",
    "@typescript-eslint/no-empty-interface": 0,
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": [
      "warn",
      {
        "allowComparingNullableBooleansToTrue": true,
        "allowComparingNullableBooleansToFalse": true
      }
    ],

    "max-len": [
      "warn",
      {
        "code": 110,
        "tabWidth": 2,
        "comments": 1000,
        "ignoreComments": true,
        "ignoreTrailingComments": true,
        "ignoreUrls": true,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true,
        "ignoreRegExpLiterals": true
      }
    ],
    "import/order": [
      1,
      {
        "groups": ["external", "builtin", "internal", "sibling", "parent", "index"],
        "newlines-between": "always"
      }
    ],
    "padding-line-between-statements": [
      "error",
      { "blankLine": "always", "prev": "*", "next": "return" },
      { "blankLine": "always", "prev": "block", "next": "*" },
      { "blankLine": "always", "prev": "case", "next": "default" },
      { "blankLine": "always", "prev": "class", "next": "*" },
      { "blankLine": "always", "prev": "block-like", "next": "*" },
      { "blankLine": "always", "prev": "*", "next": "try" },
      { "blankLine": "always", "prev": "multiline-const", "next": "*" },
      { "blankLine": "always", "prev": "multiline-let", "next": "*" }
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "": "never",
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    "no-confusing-arrow": ["error", { "onlyOneSimpleParam": true }],
    "no-shadow": "off",
    "import/prefer-default-export": 0,
    "object-curly-newline": 0,
    "arrow-body-style": ["error", "as-needed"],
    "no-unused-vars": "off",
    "operator-linebreak": "off",
    "implicit-arrow-linebreak": 0,
    "no-console": ["error", { "allow": ["error", "info"] }],
    "no-alert": "off",
    "no-underscore-dangle": "off",
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
  }
}