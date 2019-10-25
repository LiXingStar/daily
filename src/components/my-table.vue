<template>
    <div>
        <slot name="header"></slot>
        <slot msg="hello world" :length="data.length"></slot>
       <!-- <template>
            <h3></h3>
        </template>-->
        <table>
          <tr>
              <th>姓名</th>
              <th>姓别</th>
          </tr>
           <slot name="tbody" :tables="data"></slot>
        </table>
        <slot name="beizhu"></slot>
    </div>
</template>
<script>
    export default {
        name: "my-table",
        props:{
            data:{
                required:true,
                type:Array
            }
        }
    }
</script>

<style scoped>
  table, th,td{
      border: 1px solid #cccccc;
      border-collapse: collapse;
  }
    td,th{
        padding: 6px 12px;
    }
</style>
