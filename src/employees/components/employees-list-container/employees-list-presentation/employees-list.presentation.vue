<template>
<div>
  <p>{{msg}}</p>
  <p>Employees List</p>
</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name:"EmployeeListPresentation",
    data() {
      return {
        msg: "Hello World",
      }
    },
    beforeCreate() {
      console.log('beforeCreate hook called');
    },
    created() {
      console.log('created hook called');
    },
    beforeMount() {
      console.log('beforeMount hook called');
    },
    mounted() {
      console.log('mounted has been called'); 
    },
    beforeUpdate(){
       console.log('beforeUpdate hook called');
    },
    updated(){
       console.log('updated hook called');
    },
    // beforeDestroy() {
    //    console.log('beforeDestroy hook called');
    // },
    // destroyed() {
    //    console.log('destroyed hook called')
    // }
})
</script>
