<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>首页</el-breadcrumb-item>
            <el-breadcrumb-item>编辑学生</el-breadcrumb-item>
        </el-breadcrumb>
        <el-divider></el-divider>
        <div class="form" v-if="form">
            <el-form :model="form" ref="form" label-width="80px">
                <el-form-item label="姓名">
                    <el-input v-model="form.username" placeholder="Username" clearable>
                        <i slot="prefix" class="el-input-icon el-icon-user"></i>
                    </el-input>
                </el-form-item>
                <el-form-item label="性别">
                    <el-radio label="男" v-model="form.sex"></el-radio>
                    <el-radio label="女" v-model="form.sex"></el-radio>
                </el-form-item>
                <el-form-item label="年龄">
                    <el-input v-model="form.age" placeholder="Age" clearable>
                        <i slot="prefix" class="el-input-icon el-icon-user"></i>
                    </el-input>
                </el-form-item>
                <el-form-item label="班级">
                    <el-select v-model="form.classes" placeholder="请选择">
                        <el-option
                                v-for="item in classes"
                                :key="item.cid"
                                :label="item.cname"
                                :value="item.cname">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="num">
                    <el-input v-model="form.num" placeholder="学号" clearable>
                        <i slot="prefix" class="el-input-icon el-icon-user"></i>
                    </el-input>
                </el-form-item>
                <el-form-item label="联系方式">
                    <el-input v-model="form.tell" placeholder="联系方式" clearable>
                        <i slot="prefix" class="el-input-icon el-icon-user"></i>
                    </el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="form.password" placeholder="Password" clearable>
                        <i slot="prefix" class="el-input-icon el-icon-lock"></i>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button @click="submitForm('form')">提交</el-button>
                </el-form-item>
            </el-form>
        </div>


    </div>
</template>

<script>
    export default {
        name: "add",
        data: function () {
            return {
                form: null,
                classes: [
                    {cid: 1, cname: 'wuif1907-2'},
                    {cid: 2, cname: 'wuif1907-1'},
                    {cid: 3, cname: 'wuif1908'}
                ],
                id:0
            }
        },
        methods: {
            submitForm() {

            },
            getStudent(){
                //
                let form = localStorage.getItem('form');
                if(form){
                    this.form = JSON.parse(form);
                }else{
                    this.$message.error('数据获取失败');
                }
            }
        },
        beforeMount() {
           this.id = this.$route.params.id;
           //
           this.getStudent();
        }
    }
</script>

<style scoped>
    .form {
        width: 500px;
    }
</style>
