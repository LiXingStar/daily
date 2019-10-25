import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'u-reset.css';
import VCharts from 'v-charts';

// 1. 引入组件
// import table from "./views/table";
import login from './views/login';
import index from './views/index';
import studentAdd from './views/student/add';
import studentQuery from './views/student/query';
import studentEdit from './views/student/edit';
import vcharts from "./views/vcharts";
// 学生主界面
import student from "./views/student";
import write from './views/daily/write';
import query from './views/daily/query';
Vue.config.productionTip = false
// 插件  1.引入 2.Vue.use
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(VCharts);

let router = new VueRouter({
    routes: [
        // /index/add   add
        {path: '/', component: index,name:'index',meta:{title:'学生日报系统'},
         children:[
             {path:'studentadd',component:studentAdd,
                 meta:{title:'学生添加'}
                 },
             {path:'studentquery',component:studentQuery,
                 meta:{title:'学生查询'}
             },
             {path:'studentedit/:id',component:studentEdit,name:'studentedit',
                 meta:{title:'学生编辑'}
             },
             {
                 path:'vcharts',component:vcharts,name:'vcharts'
             }
         ]
        },
        {path: '/login', component: login},
        {
            path:'/student',component:student,name:'student',meta:{
                title:'学生主界面'
            },
            children:[
                {path:'write',component:write,name:'studentwrite',
                 meta:{title:'学生填写日报'}
                },
                {path:'query',component:query,name:'studentquery',
                    meta:{title:'学生查看日报'}
                },
            ]
        }
    ]
});
// 导航守卫
// 组件切换  设置文档标题
/**
 * 1. 监听组件切换
 * 2. 当前组件标题  meta
 * 3. 设置文档标题
 */
router.beforeEach((to, from, next)=>{
    let title = to.meta.title || '学生日报管理系统';
    document.title = title;
    next();
});


new Vue({
    render: h => h(App),
    router
}).$mount('#app')
