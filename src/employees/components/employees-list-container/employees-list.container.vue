<template>
  <employee-list-presentation :employees="employees" @deleteEmployee="onDelete($event)"></employee-list-presentation>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "../../../mixins/page-title";
import CommonMixin from "../../../mixins/common";
import DateFormat from "../../../mixins/date-format";
import Mask from "../../../mixins/mask";
import { EmployeesService } from "../../service/employees.service";
import EmployeeListPresentation from '../employees-list-container/employees-list-presentation/employees-list.presentation.vue';
import { useToast } from "vue-toastification";
import store from "../../../store";

export default defineComponent({
    name:"EmployeeListContainer",
    components:{
        EmployeeListPresentation
    },
    data(){
      return{
        employees: new Array<any>()
      }
    },
    mixins: [PageTitle, CommonMixin, DateFormat, Mask],
    created() {
    this.setPageTitle("Employees"); //Set Page Title
    // store.dispatch(Shared.SET_TITLE, Topbar.title);

    this.loadMore();
  },
  computed: {
    //return true/false value to make getall api call
    isGetAll() {
      return store.getters.callGetAll;
    },
  },
  watch:{
    isGetAll(newVal) {
      if (newVal) {
        store.dispatch("setGetAll", false);
        this.loadMore();
      }
    },
  },
  setup() {
    // Get toast interface
    const toast = useToast();
    // Make it available inside methods
    return { toast };
  },
  methods:{
    loadMore() {
      EmployeesService.getAllEmployees().then(
        (res: any) => {
          res.forEach((emp:any) => {
            emp.gender=emp.gender==1 ? 'Male' : 'Female'
            emp.salary = this.maskNumericIntoSeperator(emp.salary.toString());
            // emp.joiningDate = this.setDate(emp.joiningDate)
          });
          this.employees = res;
        }
      );
    },
    onDelete(id:any){
      const index = this.employees.findIndex((employee:any) => employee.id === id);
      this.employees.splice(index, 1);
      this.toast.success("Record deleted successfully");
      // EmployeesService.deleteEmployee(id).then(
      //   (res: any) => {
      //     this.toast.success("Record deleted successfully");
      //     store.dispatch(Shared.DISPATCH.SET_GET_ALL, true);
      //   }
      // );
    }
  }
})
</script>

<style>
</style>