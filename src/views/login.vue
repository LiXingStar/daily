<template>
    <div id="container">
    <div id="box" ref="box">
<!--         管理员 教师 学生-->
      <el-form :model="form" ref="form" :rules="rules">
          <el-form-item label="用户名" prop="username">
              <el-input v-model="form.username" placeholder="Username" clearable prefix-icon="el-icon-user"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
              <el-input v-model="form.password" placeholder="Passworld" clearable>
                  <i slot="prefix" class="el-input__icon el-icon-lock"></i>
              </el-input>
          </el-form-item>
          <el-form-item label="角色" prop="role">
              <el-radio v-for="(item,index) in roles" :key="index" v-model="form.role" :label="item"></el-radio>
          </el-form-item>
          <el-form-item>
              <el-button type="primary" @click="handleSubmit">Submit</el-button>
          </el-form-item>
      </el-form>
    </div>
    </div>
</template>

<script>
    import admin from '../data/admin';
    import student from '../data/student';
    import teacher from '../data/teacher';
    export default {
        name: "login",
        data:function(){
            return {
                form:{
                    username:'',
                    password:'',
                    role:''
                },
                roles:['student','teacher','admin'],
                rules:{
                    username:[
                        {required:true,message:'用户名必填',trigger:'blur'},
                        {min:2,max:10,message:'请输入2-10个字符',trigger:'blur'}
                    ],
                    password:[
                        {required:true,message:'密码必填',trigger:'blur'},
                        {min:3,max:10,message:'请输入3-10个字符',trigger:'blur'}
                    ],
                    role:[
                        {required:true,message:'角色必填',trigger:'change'}
                    ],
                }
            }
        },
        methods:{
            handleSubmit(){
                // 1. 箭头  2. this存临时变量  3. 函数定义时bind绑定this
                this.$refs.form.validate(valid=>{
                    if(valid){
                       let role = this.form.role;
                       let model = null;
                       if(role == 'admin'){
                          model =  admin;
                       }else if(role =='student'){
                          model =  student;
                       }else{
                          model = teacher
                       }
                       let flag = model.filter(ele=>ele.username==this.form.username&& ele.password==this.form.password);
                        if(flag.length){
                            localStorage.user = JSON.stringify(flag[0]);
                            if(role=='student'){
                                this.$router.push({name:'student'})
                            }else{
                                this.$router.push({name:'index'})
                            }
                        }else{
                            this.$message.warning('用户名密码不匹配');
                        }
                    }
                })
            }
        }
    }
</script>
<style scoped>
    #container{
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: #ffffff url("../assets/bg.jpg") center / cover;
    }
   #box{
       width: 350px;
       height: auto;
       position: absolute;
       left: 50%;
       top: 50%;
       transform: translate(-50%,-50%);
       background: #eaeaea;
       padding: 10px 20px;
       border-radius: 5px;
       box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
   }
</style>
