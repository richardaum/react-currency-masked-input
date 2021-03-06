import babelPlugin from 'rollup-plugin-babel'

export default {
  input: 'src/components/currency-input.js',
  output: {
    format: 'cjs',
    file: 'react-currency-masked-input.js',
  },
  plugins: [babelPlugin({ exclude: 'node_modules/**' })]
}
