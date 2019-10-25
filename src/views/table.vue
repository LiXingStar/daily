<template>
    <div>
        <my-table :data="students">
            <template v-slot:header>
                <h2>学生信息表</h2>
            </template>
<!--            <slot msg="hello world" :length="data.length"></slot>-->

            <template v-slot:default="props">
                <h3>{{props.msg}} {{props.length}}</h3>
            </template>
            <!--  :tables="data"-->
            <template v-slot:tbody="props">
                <tr v-for="item in props.tables" :key="item.id">
                    <td>{{item.names}}</td>
                    <td>{{item.sex}}</td>
                    <td><button >X {{item.id}}</button></td>
                </tr>
            </template>
            <template #beizhu>
                <div>表格备注</div>
            </template>
        </my-table>
    </div>
</template>

<script>
    import MyTable from '../components/my-table';
    export default {
        name: "index",
        data:function(){
            return {
                students:[
                    {id:1,names:'文强',sex:'男'},
                    {id:2,names:'李雯',sex:'女'},
                    {id:3,names:'殷增艳',sex:'女'},
                    {id:4,names:'毛江莉',sex:'女'},
                    {id:5,names:'李一帆',sex:'男'},
                ]
            }
        },
        components:{
            MyTable
        }
    }
</script>

<style scoped>

</style>
