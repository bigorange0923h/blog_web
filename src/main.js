import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import axios from 'axios'



//-------------------------------------------------------------- v-md-editor -----------------------------------------------------------------------------------------------
import VMdEditor from '@kangc/v-md-editor/lib/codemirror-editor';
import '@kangc/v-md-editor/lib/style/codemirror-editor.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';

// highlightjs
import hljs from 'highlight.js';

// codemirror 编辑器的相关资源
import Codemirror from 'codemirror';
// mode
import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/mode/vue/vue';
// edit
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/matchbrackets';
// placeholder
import 'codemirror/addon/display/placeholder';
// active-line
import 'codemirror/addon/selection/active-line';
// scrollbar
import 'codemirror/addon/scroll/simplescrollbars';
import 'codemirror/addon/scroll/simplescrollbars.css';
// style
import 'codemirror/lib/codemirror.css';

VMdEditor.Codemirror = Codemirror;
VMdEditor.use(githubTheme, {
    Hljs: hljs,
});

//-------------------------------------------------------------- v-md-editor ----------------------------------------------------------------------------------------------
// -------------------------------------------------------------  semantic ------------------------------------------------------------------------------------------------
// 引入js文件，这里直接使用的是这个文件里的路径，不需要再resolver中修改路径之类的操作
import semantic from '../node_modules/semantic-ui-css/semantic.min.js'
// 引入css文件
import '../node_modules/semantic-ui-css/semantic.min.css'

// ------------------------------------------------------------- semantic -------------------------------------------------------------------------------------------------


const app = createApp(App)
installElementPlus(app)
app.use(VMdEditor).use(store).use(router).use(semantic).mount('#app')
app.config.globalProperties.$axios = axios;
