{
  mode: 'development',
  context: 'C:\\Users\\ez\\Desktop\\work\\ims-h5-03',
  devtool: 'cheap-module-eval-source-map',
  node: {
    setImmediate: false,
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
  output: {
    path: 'C:\\Users\\ez\\Desktop\\work\\ims-h5-03\\dist',
    filename: '[name].js',
    publicPath: '/',
    globalObject: '(typeof self !== \'undefined\' ? self : this)'
  },
  resolve: {
    alias: {
      '@': 'C:\\Users\\ez\\Desktop\\work\\ims-h5-03\\src',
      vue$: 'vue/dist/vue.runtime.esm.js'
    },
    extensions: [
      '.mjs',
      '.js',
      '.jsx',
      '.vue',
      '.json',
      '.wasm'
    ],
    modules: [
      'node_modules',
      'C:\\Users\\ez\\Desktop\\work\\ims-h5-03\\node_modules',
      'C:\\Users\\ez\\Desktop\\work\\ims-h5-03\\node_modules\\@vue\\cli-service\\node_modules'
    ]
  },
  resolveLoader: {
    modules: [
      'C:\\Users\\ez\\Desktop\\work\\ims-h5-03\\node_modules\\@vue\\cli-plugin-babel\\node_modules',
      'node_modules',
      'C:\\Users\\ez\\Desktop\\work\\ims-h5-03\\node_modules',
      'C:\\Users\\ez\\Desktop\\work\\ims-h5-03\\node_modules\\@vue\\cli-service\\node_modules'
    ]
  },
  module: {
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
    rules: [
      /* config.module.rule('vue') */
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'cache-loader',
            options: {
              cacheDirectory: 'C:\\Users\\ez\\Desktop\\work\\ims-h5-03\\node_modules\\.cache\\vue-loader',
              cacheIdentifier: '849005f4'
            }
          },
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false
              },
              cacheDirectory: 'C:\\Users\\ez\\Desktop\\work\\ims-h5-03\\node_modules\\.cache\\vue-loader',
              cacheIdentifier: '849005f4'
            }
          }
        ]
      },
      /* config.module.rule('images') */
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'img/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('svg') */
      {
        test: /\.(svg)(\?.*)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      /* config.module.rule('media') */
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'media/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('fonts') */
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'fonts/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('pug') */
      {
        test: /\.pug$/,
        oneOf: [
          /* config.module.rule('pug').oneOf('pug-vue') */
          {
            resourceQuery: /vue/,
            use: [
              {
                loader: 'pug-plain-loader'
              }
            ]
          },
          /* config.module.rule('pug').oneOf('pug-template') */
          {
            use: [
              {
                loader: 'raw-loader'
              },
              {
                loader: 'pug-plain-loader'
              }
            ]
          }
        ]
      },
      /* config.module.rule('css') */
      {
        test: /\.css$/,
        oneOf: [
          /* config.module.rule('css').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('normal') */
          {
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('postcss') */
      {
        test: /\.p(ost)?css$/,
        oneOf: [
          /* config.module.rule('postcss').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('normal') */
          {
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('scss') */
      {
        test: /\.scss$/,
        oneOf: [
          /* config.module.rule('scss').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('normal') */
          {
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('sass') */
      {
        test: /\.sass$/,
        oneOf: [
          /* config.module.rule('sass').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  indentedSyntax: true
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  indentedSyntax: true
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  indentedSyntax: true
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('normal') */
          {
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  indentedSyntax: true
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('less') */
      {
        test: /\.less$/,
        oneOf: [
          /* config.module.rule('less').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'style-resources-loader',
                options: {
                  patterns: [
                    'C:\\Users\\ez\\Desktop\\work\\ims-h5-03\\src\\style\\less\\*.less'
                  ]
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'style-resources-loader',
                options: {
                  patterns: [
                    'C:\\Users\\ez\\Desktop\\work\\ims-h5-03\\src\\style\\less\\*.less'
                  ]
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'style-resources-loader',
                options: {
                  patterns: [
                    'C:\\Users\\ez\\Desktop\\work\\ims-h5-03\\src\\style\\less\\*.less'
                  ]
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('normal') */
          {
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'style-resources-loader',
                options: {
                  patterns: [
                    'C:\\Users\\ez\\Desktop\\work\\ims-h5-03\\src\\style\\less\\*.less'
                  ]
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('stylus') */
      {
        test: /\.styl(us)?$/,
        oneOf: [
          /* config.module.rule('stylus').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('normal') */
          {
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('js') */
      {
        test: /\.m?jsx?$/,
        exclude: [
          function () { /* omitted long function */ }
        ],
        use: [
          {
            loader: 'cache-loader',
            options: {
              cacheDirectory: 'C:\\Users\\ez\\Desktop\\work\\ims-h5-03\\node_modules\\.cache\\babel-loader',
              cacheIdentifier: 'aec4bfa2'
            }
          },
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    /* config.plugin('vue-loader') */
    new VueLoaderPlugin(),
    /* config.plugin('define') */
    new DefinePlugin(
      {
        'process.env': {
          NODE_ENV: '"development"',
          BASE_URL: '"/"'
        }
      }
    ),
    /* config.plugin('case-sensitive-paths') */
    new CaseSensitivePathsPlugin(),
    /* config.plugin('friendly-errors') */
    new FriendlyErrorsWebpackPlugin(
      {
        additionalTransformers: [
          function () { /* omitted long function */ }
        ],
        additionalFormatters: [
          function () { /* omitted long function */ }
        ]
      }
    ),
    /* config.plugin('hmr') */
    new HotModuleReplacementPlugin(),
    /* config.plugin('progress') */
    new ProgressPlugin(),
    /* config.plugin('html') */
    new HtmlWebpackPlugin(
      {
        templateParameters: function () { /* omitted long function */ },
        template: 'C:\\Users\\ez\\Desktop\\work\\ims-h5-03\\public\\index.html'
      }
    ),
    /* config.plugin('copy') */
    new CopyWebpackPlugin(
      [
        {
          from: 'C:\\Users\\ez\\Desktop\\work\\ims-h5-03\\public',
          to: 'C:\\Users\\ez\\Desktop\\work\\ims-h5-03\\dist',
          toType: 'dir',
          ignore: [
            '.DS_Store'
          ]
        }
      ]
    ),
    {
      options: {
        context: 'C:\\Users\\ez\\Desktop\\work\\ims-h5-03',
        manifest: {
          name: 'vue_0516de62a2c1e32284bb',
          content: {
            './node_modules/webpack/buildin/global.js': {
              id: 46,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/process/browser.js': {
              id: 71,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/vue/dist/vue.runtime.esm.js': {
              id: 144,
              buildMeta: {
                exportsType: 'namespace',
                providedExports: [
                  'default'
                ]
              }
            },
            './node_modules/timers-browserify/main.js': {
              id: 145,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/setimmediate/setImmediate.js': {
              id: 146,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/vue-router/dist/vue-router.esm.js': {
              id: 147,
              buildMeta: {
                exportsType: 'namespace',
                providedExports: [
                  'default'
                ]
              }
            },
            './node_modules/vuex/dist/vuex.esm.js': {
              id: 148,
              buildMeta: {
                exportsType: 'namespace',
                providedExports: [
                  'default',
                  'Store',
                  'install',
                  'mapState',
                  'mapMutations',
                  'mapGetters',
                  'mapActions',
                  'createNamespacedHelpers'
                ]
              }
            }
          }
        }
      }
    },
    {
      options: {
        context: 'C:\\Users\\ez\\Desktop\\work\\ims-h5-03',
        manifest: {
          name: 'bases_0516de62a2c1e32284bb',
          content: {
            './node_modules/core-js/modules/_export.js': {
              id: 0,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_an-object.js': {
              id: 1,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_global.js': {
              id: 2,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_is-object.js': {
              id: 3,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_fails.js': {
              id: 4,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_wks.js': {
              id: 5,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_descriptors.js': {
              id: 6,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_to-length.js': {
              id: 7,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_object-dp.js': {
              id: 8,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_to-object.js': {
              id: 9,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_a-function.js': {
              id: 10,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_core.js': {
              id: 11,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_to-iobject.js': {
              id: 12,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_has.js': {
              id: 13,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_hide.js': {
              id: 14,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_redefine.js': {
              id: 15,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_object-gopd.js': {
              id: 16,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_object-gpo.js': {
              id: 17,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_string-html.js': {
              id: 18,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/axios/lib/utils.js': {
              id: 19,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_ctx.js': {
              id: 20,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_cof.js': {
              id: 21,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_to-integer.js': {
              id: 22,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_strict-method.js': {
              id: 23,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_to-primitive.js': {
              id: 24,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_defined.js': {
              id: 25,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_object-sap.js': {
              id: 26,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_array-methods.js': {
              id: 27,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_object-keys.js': {
              id: 28,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_object-create.js': {
              id: 29,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_typed-array.js': {
              id: 30,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_metadata.js': {
              id: 31,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_property-desc.js': {
              id: 32,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_library.js': {
              id: 33,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_meta.js': {
              id: 34,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_classof.js': {
              id: 35,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_add-to-unscopables.js': {
              id: 36,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_for-of.js': {
              id: 37,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_uid.js': {
              id: 38,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_to-absolute-index.js': {
              id: 39,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_object-gopn.js': {
              id: 40,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_iterators.js': {
              id: 41,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_set-species.js': {
              id: 42,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_an-instance.js': {
              id: 43,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_redefine-all.js': {
              id: 44,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_validate-collection.js': {
              id: 45,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_set-to-string-tag.js': {
              id: 47,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_string-trim.js': {
              id: 48,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_shared.js': {
              id: 49,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_iobject.js': {
              id: 50,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_object-pie.js': {
              id: 51,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/core.get-iterator-method.js': {
              id: 52,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_flags.js': {
              id: 53,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_species-constructor.js': {
              id: 54,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_array-includes.js': {
              id: 55,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_object-gops.js': {
              id: 56,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_is-array.js': {
              id: 57,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_string-at.js': {
              id: 58,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_iter-define.js': {
              id: 59,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_iter-create.js': {
              id: 60,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_is-regexp.js': {
              id: 61,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_iter-detect.js': {
              id: 62,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_regexp-exec-abstract.js': {
              id: 63,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_fix-re-wks.js': {
              id: 64,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_user-agent.js': {
              id: 65,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_collection.js': {
              id: 66,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_typed.js': {
              id: 67,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_object-forced-pam.js': {
              id: 68,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_set-collection-of.js': {
              id: 69,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_set-collection-from.js': {
              id: 70,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/process/browser.js': {
              id: 71,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/axios/lib/defaults.js': {
              id: 72,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_dom-create.js': {
              id: 73,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_wks-define.js': {
              id: 74,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_shared-key.js': {
              id: 75,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_enum-bug-keys.js': {
              id: 76,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_html.js': {
              id: 77,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_object-assign.js': {
              id: 78,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_set-proto.js': {
              id: 79,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_invoke.js': {
              id: 80,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_string-ws.js': {
              id: 81,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_inherit-if-required.js': {
              id: 82,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_string-repeat.js': {
              id: 83,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_math-sign.js': {
              id: 84,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_math-expm1.js': {
              id: 85,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_string-context.js': {
              id: 86,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_fails-is-regexp.js': {
              id: 87,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_is-array-iter.js': {
              id: 88,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_create-property.js': {
              id: 89,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_array-species-create.js': {
              id: 90,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_array-fill.js': {
              id: 91,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.array.iterator.js': {
              id: 92,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_iter-step.js': {
              id: 93,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_regexp-exec.js': {
              id: 94,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_advance-string-index.js': {
              id: 95,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_task.js': {
              id: 96,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_microtask.js': {
              id: 97,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_new-promise-capability.js': {
              id: 98,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_typed-buffer.js': {
              id: 99,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_own-keys.js': {
              id: 100,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_replacer.js': {
              id: 101,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/axios/lib/helpers/bind.js': {
              id: 102,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/axios/lib/adapters/xhr.js': {
              id: 103,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/axios/lib/core/createError.js': {
              id: 104,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/axios/lib/cancel/isCancel.js': {
              id: 105,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/axios/lib/cancel/Cancel.js': {
              id: 106,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_ie8-dom-define.js': {
              id: 107,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_wks-ext.js': {
              id: 108,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_object-keys-internal.js': {
              id: 109,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_object-dps.js': {
              id: 110,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_object-gopn-ext.js': {
              id: 111,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_same-value.js': {
              id: 112,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_bind.js': {
              id: 113,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_parse-int.js': {
              id: 114,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_parse-float.js': {
              id: 115,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_a-number-value.js': {
              id: 116,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_is-integer.js': {
              id: 117,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_math-log1p.js': {
              id: 118,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_math-fround.js': {
              id: 119,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_iter-call.js': {
              id: 120,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_array-reduce.js': {
              id: 121,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_array-copy-within.js': {
              id: 122,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.regexp.exec.js': {
              id: 123,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.regexp.flags.js': {
              id: 124,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_perform.js': {
              id: 125,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_promise-resolve.js': {
              id: 126,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.map.js': {
              id: 127,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_collection-strong.js': {
              id: 128,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.set.js': {
              id: 129,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.weak-map.js': {
              id: 130,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_collection-weak.js': {
              id: 131,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_to-index.js': {
              id: 132,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_flatten-into-array.js': {
              id: 133,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_string-pad.js': {
              id: 134,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_object-to-array.js': {
              id: 135,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_collection-to-json.js': {
              id: 136,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_array-from-iterable.js': {
              id: 137,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_math-scale.js': {
              id: 138,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/core.is-iterable.js': {
              id: 139,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_partial.js': {
              id: 140,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_path.js': {
              id: 141,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_object-define.js': {
              id: 142,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/axios/index.js': {
              id: 150,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/axios/lib/axios.js': {
              id: 151,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/axios/node_modules/is-buffer/index.js': {
              id: 152,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/axios/lib/core/Axios.js': {
              id: 153,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/axios/lib/helpers/normalizeHeaderName.js': {
              id: 154,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/axios/lib/core/settle.js': {
              id: 155,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/axios/lib/core/enhanceError.js': {
              id: 156,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/axios/lib/helpers/buildURL.js': {
              id: 157,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/axios/lib/helpers/parseHeaders.js': {
              id: 158,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/axios/lib/helpers/isURLSameOrigin.js': {
              id: 159,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/axios/lib/helpers/cookies.js': {
              id: 160,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/axios/lib/core/InterceptorManager.js': {
              id: 161,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/axios/lib/core/dispatchRequest.js': {
              id: 162,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/axios/lib/core/transformData.js': {
              id: 163,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/axios/lib/helpers/isAbsoluteURL.js': {
              id: 164,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/axios/lib/helpers/combineURLs.js': {
              id: 165,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/axios/lib/cancel/CancelToken.js': {
              id: 166,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/axios/lib/helpers/spread.js': {
              id: 167,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/clipboard/dist/clipboard.js': {
              id: 168,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/index.js': {
              id: 169,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/shim.js': {
              id: 170,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.symbol.js': {
              id: 171,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_function-to-string.js': {
              id: 172,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_enum-keys.js': {
              id: 173,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.object.create.js': {
              id: 174,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.object.define-property.js': {
              id: 175,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.object.define-properties.js': {
              id: 176,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.object.get-own-property-descriptor.js': {
              id: 177,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.object.get-prototype-of.js': {
              id: 178,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.object.keys.js': {
              id: 179,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.object.get-own-property-names.js': {
              id: 180,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.object.freeze.js': {
              id: 181,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.object.seal.js': {
              id: 182,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.object.prevent-extensions.js': {
              id: 183,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.object.is-frozen.js': {
              id: 184,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.object.is-sealed.js': {
              id: 185,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.object.is-extensible.js': {
              id: 186,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.object.assign.js': {
              id: 187,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.object.is.js': {
              id: 188,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.object.set-prototype-of.js': {
              id: 189,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.object.to-string.js': {
              id: 190,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.function.bind.js': {
              id: 191,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.function.name.js': {
              id: 192,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.function.has-instance.js': {
              id: 193,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.parse-int.js': {
              id: 194,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.parse-float.js': {
              id: 195,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.number.constructor.js': {
              id: 196,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.number.to-fixed.js': {
              id: 197,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.number.to-precision.js': {
              id: 198,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.number.epsilon.js': {
              id: 199,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.number.is-finite.js': {
              id: 200,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.number.is-integer.js': {
              id: 201,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.number.is-nan.js': {
              id: 202,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.number.is-safe-integer.js': {
              id: 203,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.number.max-safe-integer.js': {
              id: 204,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.number.min-safe-integer.js': {
              id: 205,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.number.parse-float.js': {
              id: 206,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.number.parse-int.js': {
              id: 207,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.math.acosh.js': {
              id: 208,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.math.asinh.js': {
              id: 209,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.math.atanh.js': {
              id: 210,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.math.cbrt.js': {
              id: 211,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.math.clz32.js': {
              id: 212,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.math.cosh.js': {
              id: 213,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.math.expm1.js': {
              id: 214,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.math.fround.js': {
              id: 215,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.math.hypot.js': {
              id: 216,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.math.imul.js': {
              id: 217,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.math.log10.js': {
              id: 218,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.math.log1p.js': {
              id: 219,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.math.log2.js': {
              id: 220,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.math.sign.js': {
              id: 221,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.math.sinh.js': {
              id: 222,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.math.tanh.js': {
              id: 223,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.math.trunc.js': {
              id: 224,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.string.from-code-point.js': {
              id: 225,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.string.raw.js': {
              id: 226,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.string.trim.js': {
              id: 227,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.string.iterator.js': {
              id: 228,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.string.code-point-at.js': {
              id: 229,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.string.ends-with.js': {
              id: 230,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.string.includes.js': {
              id: 231,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.string.repeat.js': {
              id: 232,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.string.starts-with.js': {
              id: 233,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.string.anchor.js': {
              id: 234,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.string.big.js': {
              id: 235,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.string.blink.js': {
              id: 236,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.string.bold.js': {
              id: 237,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.string.fixed.js': {
              id: 238,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.string.fontcolor.js': {
              id: 239,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.string.fontsize.js': {
              id: 240,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.string.italics.js': {
              id: 241,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.string.link.js': {
              id: 242,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.string.small.js': {
              id: 243,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.string.strike.js': {
              id: 244,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.string.sub.js': {
              id: 245,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.string.sup.js': {
              id: 246,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.date.now.js': {
              id: 247,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.date.to-json.js': {
              id: 248,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.date.to-iso-string.js': {
              id: 249,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_date-to-iso-string.js': {
              id: 250,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.date.to-string.js': {
              id: 251,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.date.to-primitive.js': {
              id: 252,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_date-to-primitive.js': {
              id: 253,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.array.is-array.js': {
              id: 254,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.array.from.js': {
              id: 255,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.array.of.js': {
              id: 256,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.array.join.js': {
              id: 257,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.array.slice.js': {
              id: 258,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.array.sort.js': {
              id: 259,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.array.for-each.js': {
              id: 260,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_array-species-constructor.js': {
              id: 261,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.array.map.js': {
              id: 262,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.array.filter.js': {
              id: 263,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.array.some.js': {
              id: 264,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.array.every.js': {
              id: 265,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.array.reduce.js': {
              id: 266,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.array.reduce-right.js': {
              id: 267,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.array.index-of.js': {
              id: 268,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.array.last-index-of.js': {
              id: 269,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.array.copy-within.js': {
              id: 270,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.array.fill.js': {
              id: 271,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.array.find.js': {
              id: 272,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.array.find-index.js': {
              id: 273,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.array.species.js': {
              id: 274,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.regexp.constructor.js': {
              id: 275,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.regexp.to-string.js': {
              id: 276,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.regexp.match.js': {
              id: 277,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.regexp.replace.js': {
              id: 278,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.regexp.search.js': {
              id: 279,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.regexp.split.js': {
              id: 280,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.promise.js': {
              id: 281,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.weak-set.js': {
              id: 282,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.typed.array-buffer.js': {
              id: 283,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.typed.data-view.js': {
              id: 284,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.typed.int8-array.js': {
              id: 285,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.typed.uint8-array.js': {
              id: 286,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.typed.uint8-clamped-array.js': {
              id: 287,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.typed.int16-array.js': {
              id: 288,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.typed.uint16-array.js': {
              id: 289,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.typed.int32-array.js': {
              id: 290,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.typed.uint32-array.js': {
              id: 291,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.typed.float32-array.js': {
              id: 292,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.typed.float64-array.js': {
              id: 293,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.reflect.apply.js': {
              id: 294,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.reflect.construct.js': {
              id: 295,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.reflect.define-property.js': {
              id: 296,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.reflect.delete-property.js': {
              id: 297,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.reflect.enumerate.js': {
              id: 298,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.reflect.get.js': {
              id: 299,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js': {
              id: 300,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.reflect.get-prototype-of.js': {
              id: 301,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.reflect.has.js': {
              id: 302,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.reflect.is-extensible.js': {
              id: 303,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.reflect.own-keys.js': {
              id: 304,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.reflect.prevent-extensions.js': {
              id: 305,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.reflect.set.js': {
              id: 306,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es6.reflect.set-prototype-of.js': {
              id: 307,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es7.array.includes.js': {
              id: 308,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es7.array.flat-map.js': {
              id: 309,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es7.array.flatten.js': {
              id: 310,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es7.string.at.js': {
              id: 311,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es7.string.pad-start.js': {
              id: 312,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es7.string.pad-end.js': {
              id: 313,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es7.string.trim-left.js': {
              id: 314,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es7.string.trim-right.js': {
              id: 315,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es7.string.match-all.js': {
              id: 316,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es7.symbol.async-iterator.js': {
              id: 317,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es7.symbol.observable.js': {
              id: 318,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es7.object.get-own-property-descriptors.js': {
              id: 319,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es7.object.values.js': {
              id: 320,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es7.object.entries.js': {
              id: 321,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es7.object.define-getter.js': {
              id: 322,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es7.object.define-setter.js': {
              id: 323,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es7.object.lookup-getter.js': {
              id: 324,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es7.object.lookup-setter.js': {
              id: 325,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es7.map.to-json.js': {
              id: 326,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es7.set.to-json.js': {
              id: 327,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es7.map.of.js': {
              id: 328,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es7.set.of.js': {
              id: 329,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es7.weak-map.of.js': {
              id: 330,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es7.weak-set.of.js': {
              id: 331,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es7.map.from.js': {
              id: 332,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es7.set.from.js': {
              id: 333,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es7.weak-map.from.js': {
              id: 334,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es7.weak-set.from.js': {
              id: 335,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es7.global.js': {
              id: 336,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es7.system.global.js': {
              id: 337,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es7.error.is-error.js': {
              id: 338,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es7.math.clamp.js': {
              id: 339,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es7.math.deg-per-rad.js': {
              id: 340,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es7.math.degrees.js': {
              id: 341,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es7.math.fscale.js': {
              id: 342,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es7.math.iaddh.js': {
              id: 343,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es7.math.isubh.js': {
              id: 344,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es7.math.imulh.js': {
              id: 345,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es7.math.rad-per-deg.js': {
              id: 346,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es7.math.radians.js': {
              id: 347,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es7.math.scale.js': {
              id: 348,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es7.math.umulh.js': {
              id: 349,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es7.math.signbit.js': {
              id: 350,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es7.promise.finally.js': {
              id: 351,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es7.promise.try.js': {
              id: 352,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es7.reflect.define-metadata.js': {
              id: 353,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es7.reflect.delete-metadata.js': {
              id: 354,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es7.reflect.get-metadata.js': {
              id: 355,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es7.reflect.get-metadata-keys.js': {
              id: 356,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es7.reflect.get-own-metadata.js': {
              id: 357,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js': {
              id: 358,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es7.reflect.has-metadata.js': {
              id: 359,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es7.reflect.has-own-metadata.js': {
              id: 360,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es7.reflect.metadata.js': {
              id: 361,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es7.asap.js': {
              id: 362,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/es7.observable.js': {
              id: 363,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/web.timers.js': {
              id: 364,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/web.immediate.js': {
              id: 365,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/web.dom.iterable.js': {
              id: 366,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/core.dict.js': {
              id: 367,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/_keyof.js': {
              id: 368,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/core.get-iterator.js': {
              id: 369,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/core.delay.js': {
              id: 370,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/core.function.part.js': {
              id: 371,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/core.object.is-object.js': {
              id: 372,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/core.object.classof.js': {
              id: 373,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/core.object.define.js': {
              id: 374,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/core.object.make.js': {
              id: 375,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/core.number.iterator.js': {
              id: 376,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/core.regexp.escape.js': {
              id: 377,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/core.string.escape-html.js': {
              id: 378,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/core-js/modules/core.string.unescape-html.js': {
              id: 379,
              buildMeta: {
                providedExports: true
              }
            }
          }
        }
      }
    },
    {
      options: {
        context: 'C:\\Users\\ez\\Desktop\\work\\ims-h5-03',
        manifest: {
          name: 'lodash_0516de62a2c1e32284bb',
          content: {
            './node_modules/webpack/buildin/global.js': {
              id: 46,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/lodash/lodash.js': {
              id: 381,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/webpack/buildin/module.js': {
              id: 382,
              buildMeta: {
                providedExports: true
              }
            }
          }
        }
      }
    },
    {
      options: {
        context: 'C:\\Users\\ez\\Desktop\\work\\ims-h5-03',
        manifest: {
          name: 'swiper_0516de62a2c1e32284bb',
          content: {
            './node_modules/vue-awesome-swiper/dist/vue-awesome-swiper.js': {
              id: 384,
              buildMeta: {
                providedExports: true
              }
            },
            './node_modules/swiper/dist/js/swiper.js': {
              id: 385,
              buildMeta: {
                providedExports: true
              }
            }
          }
        }
      }
    },
    {
      assets: [
        {
          filepath: 'C:\\Users\\ez\\Desktop\\work\\ims-h5-03\\public\\vendor\\*.js',
          publicPath: '/vendor',
          outputPath: '/vendor'
        }
      ],
      addedAssets: []
    }
  ],
  entry: {
    app: [
      './src/main.js'
    ]
  }
}
