import type { Configuration } from 'webpack';
const ExtensionReloader = require('webpack-ext-reloader');
const config = require('./custom-webpack.config');

module.exports = {
    ...config,
    mode: 'development',
    plugins: [
        new ExtensionReloader({
            reloadPage: true,
            entries: {
                background: 'background',
            }
        })
    ]
} as Configuration;
