<template>
    <el-container>
        <el-aside width="200px">
            <el-menu
                    class="el-menu-vertical-demo"
                    :router="true">
                <el-submenu index="/student">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>日报管理</span>
                    </template>
                    <el-menu-item index="/student/write">填写日报</el-menu-item>
                    <el-menu-item index="/student/query">查看日报</el-menu-item>
                </el-submenu>
            </el-menu>
        </el-aside>
        <el-container class="container">
            <el-header>
                <el-menu  class="el-menu-demo" mode="horizontal" >
                    <el-menu-item index="1">处理中心</el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">我的工作台</template>
                        <el-menu-item index="2-1">选项1</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                        <el-menu-item index="2-3">选项3</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="3">消息中心</el-menu-item>
                    <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
                </el-menu>

                <div style="position: absolute;right: 200px;top: 0;"> {{user.username}}</div>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name: "index",
        data(){
            return {
                user:null
            }
        },
        methods:{
            getUser(){
                this.user = JSON.parse(localStorage.getItem('user'))
            }
        },
        beforeMount() {
            this.getUser();
        }
    }
</script>

<style scoped>
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }
    .el-header{
        padding: 0;
    }
    .el-aside {
        background-color: #D3DCE6;
        color: #333;
    }

    .el-main {
        min-height:400px;
        background-color: #ffffff;
        color: #333;
    }
    a{
        color: #333333;
    }
    .router-link-exact-active{
        color: #4094fe;
    }
</style>
