<template>
    <div>
       <ul class="pages">
           <li :class="{active:i==current}" v-for="i in pageNumber" :key="i"
             @click="pagechange(i)"
           >
               {{i}}
           </li>
       </ul>
    </div>
</template>

<script>
   export default {
       name:'my-btn',
       props:{
           total:{
               required:true,
               type:Number
           },
           pageSize:{
               type:Number,
               default:3
           }
       },
       data(){
         return {
             current:1
         }
       },
       computed:{
           pageNumber(){
              return Math.ceil( this.total / this.pageSize);
           }
       },
       methods:{
           pagechange(n){
               if(this.current == n){
                   return;
               }
               this.current = n;
               this.$emit('changepage',n);
           }
       }
   }
</script>

<style scoped>
  .pages{
      width: 100%;
      height: 30px;
      display: flex;
  }
  .pages > li{
      width: 30px;
      height: 28px;
      text-align: center;
      line-height: 28px;
      border-radius: 3px;
      background-color: #eaeaea;
      margin-left: 10px;
      cursor: pointer;
  }
    .pages > li.active{
        background-color: #4094fe;
        color: #ffffff;
    }
</style>
