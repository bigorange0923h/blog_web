// 引入jq需要加入以下代码
const webpack = require('webpack')

module.exports = {
    chainWebpack: config => {
        config.plugin('provide').use(webpack.ProvidePlugin, [{
            $: 'jquery',
            jquery: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',

            //semantic UI
            semantic: 'semantic-ui-css',
            Semantic: 'semantic-ui-css',
            'semantic-ui': 'semantic-ui-css'
        }])
    }
}
