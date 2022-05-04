const path = require('path')

//导入html-webpack-plugin这个插件
const HtmlPlugin = require('html-webpack-plugin')
    //用new构造函数 创建插件的实例对象
const htmlPlugin = new HtmlPlugin({
    //指定复制哪个对象
    template: './src/index.html',
    //指定复制出来的文件名和复制路径
    filename: './index.html'
})

//左侧的{}是解构赋值
const  { CleanWebpackPlugin }  =  require ( 'clean-webpack-plugin' )



//使用node.js中的导出语法，向外导出一个webpack配置对象
module.exports = {
    //在开发调试阶段把devtool的值设置成eval-source-map
    // devtool: 'eval-source-map',
    //在实际发布的时候建议把devtool设置成nosources-source-map或直接关闭SourMap
    devtool: 'nosources-source-map',
    //代表webpack运行模式可选值有development和production
    mode: 'development',
    //开发的时候用development，因为追求的是打包速度不是体积
    //发布的时候用production，因为追求的是体积大小不是打包速度

    //entry：'制定要处理哪个文件'
    entry: path.join(__dirname, 'src/index1.js'),

    //指定生成文件放在哪里
    output: {
        //存放目录,前一个path代表属性表示存到哪个目录，后一个path代表node里的一个模块
        path: path.join(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },

    //插件的数组，将来webpack在运行时会调用这些插件
    plugins: [htmlPlugin,new  CleanWebpackPlugin ( ), ],
    devServer: {
        //首次打包成功后自动打开浏览器
        open: true,
        //修改端口号，在https协议中端口号80可以被省略
        port: 80,
        //指定运行主机地址
        host: '127.0.0.1'
    },

    module: {
        rules: [
            //定义不同模块对应的loader
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            //处理图片文件的loader
            //调用loader一个用字符串也行，多个则指定数组,在配置url-loader时，多个参数之间要有&符号进行分隔
            {test: /\.jpg|png|gif$/,use:'url-loader?limit=470&outputPath=images'},
            //使用巴贝拉babel-loader处理高级JS语法
            //配置babel-loader，只需把自己代码转换，一定要排除node_modules中的JS文件，因为第三方包的js文件不存在兼容问题
            // {test: /\.js$/,use:'babel-loader', exclude: /node_modules/}
        ]
    },
    resolve: {
        alias: {
            //告诉webpack程序猿写的代码中@表示src这一层目录
            '@':path.join(__dirname,'./src/')
        }
    }


}