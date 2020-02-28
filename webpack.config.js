module.exports = {
  resolve: {
    extensions: ['','.js','.jsx']
  },
  entry: {
    app: ['./src/index.js']
  },
  output: {
    filename: '[name].js',
    path: './public',
    publicPath: '/'
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    inline: true
  },
  module: {
    loaders: [
      { test: /(\.js|.jsx)$/, explude: /node_modules/,loader: 'babel' }
    ]
  }
}