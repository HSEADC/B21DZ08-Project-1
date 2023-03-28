const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js',
    page: './src/page.jsx',
    myths: './src/myths.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs')
    // clean: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']]
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(ttf|otf|woff|woff2)$/i,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),

    new CopyPlugin({
      patterns: [{ from: 'src/share', to: 'share' }]
    }),

    // Landing page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/index.html',
      filename: './index.html',
      chunks: ['index']
    }),

    // For articles
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/myths/orion.html',
      filename: './myths/orion.html',
      chunks: ['myths']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/myths/capricorn.html',
      filename: './myths/capricorn.html',
      chunks: ['myths']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/myths/libra.html',
      filename: './myths/libra.html',
      chunks: ['myths']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/myths/lion.html',
      filename: './myths/lion.html',
      chunks: ['myths']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/myths/aquarius.html',
      filename: './myths/aquarius.html',
      chunks: ['myths']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/myths/pisces.html',
      filename: './myths/pisces.html',
      chunks: ['myths']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/myths/virgin.html',
      filename: './myths/virgin.html',
      chunks: ['myths']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/myths/keel_feed_sail.html',
      filename: './myths/keel_feed_sail.html',
      chunks: ['myths']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/myths/north_crown.html',
      filename: './myths/north_crown.html',
      chunks: ['myths']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/myths/swan_and_lira.html',
      filename: './myths/swan_and_lira.html',
      chunks: ['myths']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/myths/hare.html',
      filename: './myths/hare.html',
      chunks: ['myths']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/myths/big_dipper.html',
      filename: './myths/big_dipper.html',
      chunks: ['myths']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/myths/triangle.html',
      filename: './myths/triangle.html',
      chunks: ['myths']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/myths/dragon.html',
      filename: './myths/dragon.html',
      chunks: ['myths']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/myths/voznichi.html',
      filename: './myths/voznichi.html',
      chunks: ['myths']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/myths/perseus.html',
      filename: './myths/perseus.html',
      chunks: ['myths']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/myths/andromeda.html',
      filename: './myths/andromeda.html',
      chunks: ['myths']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/myths/taurus.html',
      filename: './myths/taurus.html',
      chunks: ['myths']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/myths/gemini.html',
      filename: './myths/gemini.html',
      chunks: ['myths']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/myths/scorpio.html',
      filename: './myths/scorpio.html',
      chunks: ['myths']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/myths/hydra.html',
      filename: './myths/hydra.html',
      chunks: ['myths']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/myths/veronica_hair.html',
      filename: './myths/veronica_hair.html',
      chunks: ['myths']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/myths/cancer.html',
      filename: './myths/cancer.html',
      chunks: ['myths']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/myths/cup.html',
      filename: './myths/cup.html',
      chunks: ['myths']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/myths/raven.html',
      filename: './myths/raven.html',
      chunks: ['myths']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/myths/centaurus.html',
      filename: './myths/centaurus.html',
      chunks: ['myths']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/myths/strelec.html',
      filename: './myths/strelec.html',
      chunks: ['myths']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/myths/aries.html',
      filename: './myths/aries.html',
      chunks: ['myths']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/myths/wolf.html',
      filename: './myths/wolf.html',
      chunks: ['myths']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/myths/eagle_arrow.html',
      filename: './myths/eagle_arrow.html',
      chunks: ['myths']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/myths/delphin.html',
      filename: './myths/delphin.html',
      chunks: ['myths']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/myths/zmeenosec.html',
      filename: './myths/zmeenosec.html',
      chunks: ['myths']
    }),

    //For Zodiak page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/main_pages/zodiak.html',
      filename: './main_pages/zodiak.html',
      chunks: ['myths']
    }),

    //For Map page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/main_pages/map.html',
      filename: './main_pages/map.html',
      chunks: ['myths']
    }),

    //For Myphology page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/main_pages/myphology.html',
      filename: './main_pages/myphology.html',
      chunks: ['myths']
    }),

    //For About page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/main_pages/about.html',
      filename: './main_pages/about.html',
      chunks: ['myths']
    }),

    // // Myths
    // new HtmlWebpackPlugin({
    //   hash: true,
    //   scriptLoading: 'blocking',
    //   template: './src/pages/myth.html',
    //   filename: './pages/myth.html',
    //   chunks: ['page']
    // }),

    // // Zodiak
    // new HtmlWebpackPlugin({
    //   hash: true,
    //   scriptLoading: 'blocking',
    //   template: './src/pages/zodiak.html',
    //   filename: './pages/zodiak.html',
    //   chunks: ['page']
    // }),
    // // Map
    // new HtmlWebpackPlugin({
    //   hash: true,
    //   scriptLoading: 'blocking',
    //   template: './src/pages/map.html',
    //   filename: './pages/map.html',
    //   chunks: ['page']
    // }),
    // new HtmlWebpackPlugin({
    //   hash: true,
    //   template: './src/pages/about.html',
    //   filename: './pages/about.html'
    // }),

    // // test
    // new HtmlWebpackPlugin({
    //   hash: true,
    //   scriptLoading: 'blocking',
    //   template: './src/test/articletest.html',
    //   filename: './test/articletest.html',
    //   chunks: ['page']
    // }),

    // Partials
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/analytics.html'),
        location: 'analytics',
        template_filename: '*',
        priority: 'replace'
      }
    ])
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}
