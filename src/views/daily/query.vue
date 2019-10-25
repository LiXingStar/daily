<template>
    <div v-if="dailyArr.length">
        <div style="padding: 10px 0;"> 学生查看日报 </div>
        <el-form :model="form" :inline="true">
            <el-form-item label="内容">
            <el-input v-model="form.content" placeholder="搜索内容"></el-input>
        </el-form-item>
            <el-form-item label="提交时间">
                <el-date-picker
                        v-model="form.ctime"
                        type="date"
                        format="yyyy-MM-dd"
                        value-format="yyyy-MM-dd"
                        placeholder="选择日期">
                </el-date-picker>
            </el-form-item>
            <el-form-item>
                <el-button type="primary"
                           @click="getDaily(1)"
                >搜索</el-button>
            </el-form-item>
        </el-form>
        <el-table :data="dailyArr">
            <el-table-column prop="content" label="内容"></el-table-column>
            <el-table-column prop="finish" label="完成度"></el-table-column>
            <el-table-column prop="motto" label="座右铭"></el-table-column>
            <el-table-column prop="suggest" label="建议"></el-table-column>
            <el-table-column prop="problem" label="问题"></el-table-column>
            <el-table-column prop="feeling" label="心得体会"></el-table-column>
            <el-table-column prop="other" label="其他"></el-table-column>
            <el-table-column prop="ctime" label="提交时间"></el-table-column>
        </el-table>
        <my-page :total="total" :page-size="2"
           @changepage="getDaily"
        ></my-page>
    </div>

</template>

<script>
    import  {SUCCESS ,FAIL,HOSTNAME} from "../../config/base";
    // import base from '../../config/base';
    import MyPage from '../../components/my-page';
    export default {
        name: "query",
        data(){
            return {
                dailyArr:[],
                total:0,
                user:null,
                limit:2,
                form:{
                    content:'',
                    ctime:''
                }
            }
        },
        computed:{
           objTransformQS(){
               let str = '';
               for(let i in this.form){
                   let val = this.form[i];
                   if(val !=''){
                     str += '&'+i +'='+ val
                   }
               }
               return str;
           }
        },
        methods:{
            /*changePage(i){
                // HOSTNAME + 'index/index/query?names='+user&page=i&limit=this.limit

            },*/
            getDaily(i=1){
                let user = this.user.username;
                let qs = '?names='+user+'&page='+i+'&limit='+this.limit + this.objTransformQS;
                fetch(HOSTNAME + 'index/index/query'+qs)
                    .then(res=>res.json())
                    .then(data=>{
                        if(data.code == SUCCESS){
                            this.dailyArr = data.data;
                            this.total = data.count;
                        }else if(data.code == FAIL){
                            console.log(data);
                        }

                    })
            },
            getUser(){
                this.user = JSON.parse(localStorage.user);
            }
        },
        beforeMount() {
            this.getUser();
            this.getDaily();
        },
        components:{
            MyPage
        }
    }
</script>

<style scoped>

</style>
