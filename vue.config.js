module.exports = {
    baseUrl: '/', //根路径
    outputDir: 'dist', //打包的时候生成的一个文件名
    assetsDir: 'assets', //静态资源目录(js,css,img,fonts)这些文件都可以写里面
    lintOnSave: false, //是否开启eslint保存检测 ,它的有效值为 true || false || 'error'
    devServer: {
        proxy: { //如需跨域请求多个域名，在此对象进行扩展即可
            '/apis': {
                target: 'http://132.232.141.100:8080/cqykdky',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/apis': ''
                }
            }
        }
    },
    productionSourceMap: false
}