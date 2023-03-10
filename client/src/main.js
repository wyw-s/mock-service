import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import less from 'less';
import router from './router';
import App from './App.vue';
import './assets/global.css';
import './assets/classname.less';
import 'element-plus/dist/index.css';

const app = createApp(App);

app.$router = router;

app.use(less);
app.use(router);
app.use(ElementPlus);
app.mount('#app')
