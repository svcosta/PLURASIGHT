//stript load  to minification
var webpackStrip = require("strip-loader");

//export from the config file.
var devConfig = require("./webpack.config.js");

var stripLoad = {
    test:[/\.js$/,/\.es6$/],
    exclude:/node_modules/,
    loader: webpackStrip.loader('console.log','perfLog')
}

devConfig.module.loaders.push(stripLoad);

module.exports = devConfig;
