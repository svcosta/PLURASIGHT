var path = require("path");
var webpack = require("webpack");

var commonPlugin = new webpack.optimize.CommonsChunkPlugin("shared.js");

module.exports = {
  context: path.resolve("js"),
   // entry:["./utils.js","./app"],
   entry:{
        about:"./about.js",
        home:"./home.js",
        contact:"./contact.js"
   },

   //watch:true,

    output:{
        path:path.resolve("build/js/"),
        publicPath:"/public/assets/js/",
        //filename:"bundler.js"
        filename:"[name].js" //[name]: replace the name difined in the object entry.
    },   

    plugins:[commonPlugin],

    devServer:{
        contentBase:"public"
    },

    module:{       
        loaders:[
            {
                test: /\.es6$/, //regular expression to get all files with extension .es6
                exclude:/node_modules/, //exclude all files in the folder nome_modules
                loader:"babel-loader" //we are using the loader babel.
            }
        ]
    },

    resolve:{
        extensions: ['.js', '.es6'] //whe we set this resolve we don't have to put the extensions when we are going to refer modules in the require secssion.
    }
}



