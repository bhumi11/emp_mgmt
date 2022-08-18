<template>
  <div>
    <!--List-->
    <h1>Employees</h1>
    <!-- <a routerLink="add" class="btn btn-sm btn-success mb-2">Add Employee</a> -->
    
    <button class="btn btn-sm btn-success mb-2" type="button"  @click="$router.push({ name: 'AddEmployeeFormContainer' })">Add Employee</button>
    <table class="table table-striped">
      <thead>
        <tr>
          <th style="width: 30%">Name</th>
          <th style="width: 30%">Email</th>
          <th style="width: 30%">Role</th>
          <th style="width: 10%"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(employee,index) in employees" :key="index">
          <td>{{ employee.title }} {{ employee.firstName }} {{ employee.lastName }}</td>
          <td>{{ employee.email }}</td>
          <td>{{ employee.role }}</td>
          <td style="white-space: nowrap">
            <a routerLink="edit/{{employee.id}}" class="btn btn-sm btn-primary mr-1"
              >Edit</a
            >
            <button
              (click)="deleteEmployee(employee.id)"
              class="btn btn-sm btn-danger btn-delete-employee"
              [disabled]="employee.isDeleting"
            >
              <span
                v-if="employee.isDeleting"
                class="spinner-border spinner-border-sm"
              ></span>
              <span v-if="!employee.isDeleting">Delete</span>
            </button>
          </td>
        </tr>
        <tr v-if="employees.length==0">
          <td colspan="4" class="text-center">
            <!-- <span class="spinner-border spinner-border-lg align-center"></span> -->
            <p>No records added</p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "EmployeeListPresentation",
  data() {
    return {
      msg: "Hello World",
    };
  },
  props:{
    employees:{
      type:Array as any
    },
  },
  beforeCreate() {
    console.log("beforeCreate hook called");
  },
  created() {
    console.log("created hook called");
  },
  beforeMount() {
    console.log("beforeMount hook called");
  },
  mounted() {
    console.log("mounted has been called");
  },
  beforeUpdate() {
    console.log("beforeUpdate hook called");
  },
  updated() {
    console.log("updated hook called");
  },
  // beforeDestroy() {
  //    console.log('beforeDestroy hook called');
  // },
  // destroyed() {
  //    console.log('destroyed hook called')
  // }
});
</script>

