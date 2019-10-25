<template>
    <div>
       <el-form :model="daily" ref="myform" :rules="rules">
            <el-form-item label="座右铭" prop="motto">
                <el-input v-model="daily.motto" placeholder="座右铭" minlength="10" maxlength="50"
                          show-word-limit></el-input>
            </el-form-item>
           <el-form-item label="完成情况">
               <el-input v-model="daily.finish" placeholder="完成情况"></el-input>
           </el-form-item>
           <el-form-item label="完成内容">
               <el-input
                       type="textarea"
                       placeholder="请输入内容"
                       v-model="daily.content"
                       minlength="10"
               >
               </el-input>
           </el-form-item>
           <el-form-item label="心得体会">
               <el-input
                       placeholder="请输入内容"
                       v-model="daily.feeling">
               </el-input>
           </el-form-item>
           <el-form-item label="遇到问题">
               <el-input
                       placeholder="请输入内容"
                       v-model="daily.problem">
               </el-input>
           </el-form-item>
           <el-form-item label="建议">
               <el-input
                       placeholder="请输入内容"
                       v-model="daily.suggest">
               </el-input>
           </el-form-item>
           <el-form-item label="其他">
               <el-input
                       placeholder="请输入内容"
                       v-model="daily.other">
               </el-input>
           </el-form-item>
           <el-form-item>
               <el-button type="primary" @click="submitDaily">提交</el-button>
           </el-form-item>
       </el-form>
    </div>
</template>

<script>
    export default {
        name: "write",
        data(){
            return {
                daily:{
                    names:'',
                    classes:'wuif1907-2',
                    motto:'',
                    content:'',
                    finish:'',
                    problem:'',
                    feeling:'',
                    suggest:'',
                    other:''
                },
                rules:{
                    motto:[
                        {required:true,message:'必填',trigger:'blur'}
                    ]
                }
            }
        },
        methods:{
            submitDaily(){
                this.$refs.myform.validate(valid=>{
                    if(valid){
                        this.daily.names = JSON.parse(localStorage.user).username;
                        /*fetch('http://www.daily-end.com/api/index')
                            .then(res=>res.json())
                            .then(data=>{
                                console.log(data);
                            })*/
                        fetch('http://www.daily-end.com/index/index/index',{
                            method:'POST',
                            body: JSON.stringify(this.daily),
                            headers: new Headers({
                                'Content-Type': 'application/json'
                            })
                        })
                            .then(res=>res.json())
                            .then(data=>{
                                if(data.code == 200){
                                    this.$message.success(data.msg);
                                    this.$refs.myform.resetFields();
                                }else{
                                    this.$message.error(data.msg);
                                }
                            })
                    }
                })

            }
        }
    }
</script>

<style>
    .el-textarea__inner{
      resize: none;
  }
</style>
