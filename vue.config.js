module.exports = {
    pages: {
        index: {
            // 应用入口配置，相当于单页面应用的main.js，必需项
            entry: 'src/main.js',

            // 应用的模版，相当于单页面应用的public/index.html，可选项，省略时默认与模块名一致
            template: 'public/index.html',

            // 编译后在dist目录的输出文件名，可选项，省略时默认与模块名一致
            filename: 'index.html',

            // 标题，可选项，一般情况不使用，通常是在路由切换时设置title
            // 需要注意的是使用title属性template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'index',

            // 包含的模块，可选项
            chunks: ['index']
        },
        page1: {
            // 应用入口配置，相当于单页面应用的main.js，必需项
            entry: 'src/C_more/page01/page01.js',

            // 应用的模版，相当于单页面应用的public/index.html，可选项，省略时默认与模块名一致
            template: 'public/C_cart.html',

            // 编译后在dist目录的输出文件名，可选项，省略时默认与模块名一致
            filename: 'C_cart.html',

            // 标题，可选项，一般情况不使用，通常是在路由切换时设置title
            // 需要注意的是使用title属性template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
             title: 'C_cart',

            // 包含的模块，可选项
            chunks: ['page1']
        },
        /**
        page2: {
            // 应用入口配置，相当于单页面应用的main.js，必需项
            entry: 'src/modules/page2/page2.js',

            // 应用的模版，相当于单页面应用的public/index.html，可选项，省略时默认与模块名一致
            template: 'public/page2.html',

            // 编译后在dist目录的输出文件名，可选项，省略时默认与模块名一致
            filename: 'page2.html',

            // 标题，可选项，一般情况不使用，通常是在路由切换时设置title
            // 需要注意的是使用title属性template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'page2',

            // 包含的模块，可选项
            chunks: ['page2']
        },
         */
        // 只有entry属性时，直接用字符串表示模块入口
        client: 'src/main.js'
    }
}