var config = {
   entry: './main.js',
   output: {
      path:'/',
      filename: 'index.js',
   },
   devServer: {
      inline: true,
      port: 7070,
      headers: { "Access-Control-Allow-Origin": "*" }
   },
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react'],
               plugins:[
                        'transform-class-properties' , 
                        'transform-decorators-legacy']
            }
         }
      ]
   }
}
module.exports = config;