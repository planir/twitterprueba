const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.ts('resources/js/app.ts', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .webpackConfig({
        module: {
          rules: [
            {
              test: /\.scss$/,
              use: [{
                  loader: 'sass-resources-loader',
                  options: {
                    resources: [
                        './resources/sass/variables.scss'
                    ]
                  },
                },
              ],
            },
          ],
    }});
