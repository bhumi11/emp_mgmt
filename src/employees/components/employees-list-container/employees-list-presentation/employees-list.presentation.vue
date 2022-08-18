<template>
<div>
  <p>{{msg}}</p>
  <p>Employees List</p>
 <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
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
