import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';

export default [
  {
    input: 'src/main.js',
    output: {
      file: 'dist/main.js',
      format: 'es',
    },
    plugins: [
      resolve(),
      commonjs(),
      babel({ babelHelpers: 'bundled', exclude: 'node_modules/**' }),
    ],
  },
  {
    input: 'src/video_resolver.js',
    output: {
      file: 'dist/video_resolver.js',
      format: 'es',
    },
    plugins: [
      resolve(),
      commonjs(),
      babel({ babelHelpers: 'bundled', exclude: 'node_modules/**' }),
    ],
  },
];
