<template>
  <employee-list-presentation :employees="employees"></employee-list-presentation>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import EmployeeListPresentation from '../employees-list-container/employees-list-presentation/employees-list.presentation.vue'
export default defineComponent({
    name:"EmployeeListContainer",
    components:{
        EmployeeListPresentation
    },
    data(){
      return{
        employees:[]
      }
    }
})
</script>

<style>
</style>