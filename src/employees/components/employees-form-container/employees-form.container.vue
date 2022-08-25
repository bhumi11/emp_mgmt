<template>
  <employee-form-presentation
    @addEmployee="submitEmployee($event)"
    :employeeData="employeeData"
  ></employee-form-presentation>
</template>

<script>
import EmployeeFormPresentation from "../employees-form-container/employees-form-presentation/employees-form.presentation.vue";
import { EmployeesService } from "../../service/employees.service";
import { useToast } from "vue-toastification";
import Mask from "@/mixins/mask";

export default {
  name: "EmployeeFormContainer",
  components: {
    EmployeeFormPresentation,
  },
  data(){
    return{
      employeeData:[]
    }
  },
  mixins: [Mask],
  setup() {
    // Get toast interface
    const toast = useToast();
    // Make it available inside methods
    return { toast };
  },
  computed:{
    employeeId() {
      return this.$route.params.id;
    },
  },
  created(){
    if(this.employeeId){
      EmployeesService.getEmployeeById(this.employeeId).then((response) => {
        this.employeeData=response
      });
    }
  },
  methods: {
    submitEmployee(employeeData) {
      const detail = Object.assign({}, employeeData);
      detail.salary =
              detail.salary && detail.salary.toString().includes(",")
                ? Number(this.unmaskString(detail.salary))
                : detail.salary
                ? Number(detail.salary)
                : null;

      if(this.employeeId){
        EmployeesService.updateEmployeeDetail(detail,this.employeeId).then(() => {
          this.toast.success("Data updated successfully");
          this.$router.push({ name: "EmployeeListContainer" });
        });
      }else{
        EmployeesService.addEmployee(detail).then(() => {
          this.toast.success("Data added successfully");
          this.$router.push({ name: "EmployeeListContainer" });
        });
      }
    },
  },
};
</script>

<style>
</style>