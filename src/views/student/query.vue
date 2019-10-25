<template>
    <div>
       <el-table :data="students">
           <el-table-column prop="id" label="ID"></el-table-column>
           <el-table-column prop="username" label="姓名"></el-table-column>
           <el-table-column label="操作">
               <template slot-scope="scope">
                   <div>
                       <!--<el-button>
                           <router-link :to="{name:'studentedit'}">编辑</router-link>
                       </el-button>-->
                       <router-link :to="{name:'studentedit',params:{id:scope.row.id}}" tag="el-button">编辑</router-link>
                       <el-button @click="deleteStudent(scope.row.id)">删除</el-button>
                   </div>
               </template>
           </el-table-column>
       </el-table>
    </div>
</template>

<script>
    import student from '../../data/student';
    export default {
        name: "query",
        data(){
            return {
                students:[]
            }
        },
        methods:{
            // 获取数据
            getStudent(){
                // request
                let students = JSON.parse(localStorage.getItem('form'));
                student.push(students);
                this.students = student;
            },
            deleteStudent(id){
                // findIndex splice
                this.students = this.students.filter(ele=>ele.id!=id)
            }
        },
        beforeCreate:()=>{

           /* console.log('beforeCreate');
            console.log(this);*/
        },
        created:()=>{
            /*console.log('created');
            console.log(this);*/
        },
        beforeMount(){
             this.getStudent();
        },
        // 生命周期函数
        mounted() {

        },
       /* beforeUpdate() {
            console.log('beforeUpdate');
            console.log(this.data);
            console.log(this.$el);
            console.log(this);
        },
        updated() {
            console.log('updated');
            console.log(this.data);
            console.log(this.$el);
            console.log(this);
        }*/
    }
</script>

<style scoped>
 a{
     color: #333333;
 }
</style>
