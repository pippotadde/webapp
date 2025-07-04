// react-frontend/webpack.config.js
const path = require('path');

module.exports = {
  entry: {
    // Nome "home" => cerca in src/pages/home/index.js
    home: './src/pages/home/index.js',
    // Nome "seconda" => cerca in src/pages/paginaseconda/index.js
    seconda: './src/pages/paginaseconda/index.js',
  },
  output: {
    // [name] verrà sostituito da "home" e "seconda"
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
