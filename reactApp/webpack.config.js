 var config = {
   entry: './main.js', //entry指定打包的入口文件main.js
    
   output: {
      path:'./',
      filename: 'index.js',
   },//配置打包结果，path定了输出的文件夹，filename则定义了打包结果文件的名称
    
   devServer: {
      inline: true,
      port: 7777    //设置服务器端口号，可自由设定
   },
    
   //定义了对模块的处理逻辑，这里可以用loaders定义了一系列的加载器，以及一些正则。
   //当需要加载的文件匹配test的正则时，就会调用后面的loader对文件进行处理 
   module: {
      loaders: [ {
         test: /\.jsx?$/,
         exclude: /node_modules/,
         loader: 'babel',
            
         query: {
            presets: ['es2015', 'react']
         }
      }]
   }
    
}

module.exports = config;