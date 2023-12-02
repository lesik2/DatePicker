import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';
import babel from '@rollup/plugin-babel';
import eslint from '@rollup/plugin-eslint';
import alias from '@rollup/plugin-alias';
import styles from "rollup-plugin-styles";
const packageJson = require('./package.json');

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: packageJson.main,
                format: 'cjs',
                sourcemap: true,
                name: 'react-ts-lib'
            },
            {
                file: packageJson.module,
                format: 'esm',
                sourcemap: true
            }
        ],
        plugins: [
            alias({
              entries: [
                { find: /^@\/(.*)/, replacement: 'src/$1' },
                { find: /^@components\/(.*)/, replacement: 'src/components/$1' },
                { find: /^@customTypes\/(.*)/, replacement: 'src/types/$1' },
                { find: /^@constants\/(.*)/, replacement: 'src/constants/$1' },
                { find: /^@assets\/(.*)/, replacement: 'src/assets/$1' },
              ]
            }),
            external(),
            resolve({
              extensions: ['.ts','.tsx'],
            }),
            commonjs(),
            typescript({ 
              tsconfig: './tsconfig.json',
              declaration: true,
              declarationDir: 'dist',
              exclude: [
                'node_modules',
                /\.test.((js|jsx|ts|tsx))$/,
                /\.stories.((js|jsx|ts|tsx|mdx))$/,
              ]
            }),
            postcss(),
            terser(),
            babel({ babelHelpers: 'bundled' }),
            eslint(),
            styles(),
        ],
        external: ["react", "react-dom", "styled-components"],
    },
    {
        input: 'dist/esm/index.d.ts',
        output: [{ file: 'dist/index.d.ts', format: "esm" }],
        external: [/\.css$/],
        plugins: [dts.default()],
    },
]
