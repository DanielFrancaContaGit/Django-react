import WebpackDevServer from 'webpack-dev-server';
const webpack = require('webpack');

const config = require('./webpack.config.js');

new WebpackDevServer(webpack(config), {
  port: 3000,
  hot: true,
  historyApiFallback: true,
  headers: { 'Access-Control-Allow-Origin': '*' },
}).start(3000, '0.0.0.0', (err) => {
  if (err) {
    console.log(err);
  }

  console.log('Listening at 0.0.0.0:3000');
});