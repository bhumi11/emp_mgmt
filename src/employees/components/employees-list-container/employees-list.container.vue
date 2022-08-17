<template>
  <employee-list-presentation></employee-list-presentation>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import EmployeeListPresentation from '../employees-list-container/employees-list-presentation/employees-list.presentation.vue'
export default defineComponent({
    name:"EmployeeListContainer",
    components:{
        EmployeeListPresentation
    }
})
</script>

<style>

</style>