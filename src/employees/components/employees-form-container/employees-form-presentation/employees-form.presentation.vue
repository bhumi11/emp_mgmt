<template>
{{employee}}
<!--to display ref value -->
<!-- {{$refs.input.value}} -->
  <div class="submit-form">
      <div class="form-group">
        <label for="firstName">First Name</label>
        <input
          type="text"
          class="form-control"
          id="firstName"
          v-model="employee.firstName"
          name="firstName"
          ref="input"
        />
      </div>

      <div class="form-group">
        <label for="lastName">Last Name</label>
        <input
          type="text"
          class="form-control"
          id="lastName"
          v-model="employee.lastName"
          name="lastName"
        />
      </div>

      <div class="form-group">
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios1"
            :value="1"
            v-model="employee.gender"
            checked
          />
          <label class="form-check-label" for="exampleRadios1">
            Male
          </label>
        </div>
        
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios2"
            :value="2"
            v-model="employee.gender"
          />
          <label class="form-check-label" for="exampleRadios2">
            Female
          </label>
        </div>
      </div>

      <div class="form-group">
        <label for="exampleFormControlSelect1">Select Technology</label>
        <select class="form-control" id="exampleFormControlSelect1"
        v-model="employee.technology">
          <option v-for="option in technologyArr" :key="option" :value="option">{{option}}</option>
        </select>
      </div>

      <div class="form-group">
        <label for="salary">Salary</label>
        <input
          type="text"
          class="form-control"
          id="salary"
          v-model="employee.salary"
          @keypress="handleSalaryInput($event)"
          @keyup.delete="handleSalaryInput($event)"
          name="salary"
        />
      </div>

      <div class="form-group">
        <label for="joingDate">Joining Date:</label>
        <input v-model="employee.joiningDate" 
        class="form-control" type="date" id="joingDate" name="joingDate">
      </div>

      <button @click="saveEmployee" class="btn btn-success">Submit</button>
  </div>
</template>

<script>
import Mask from "@/mixins/mask";
import DateFormat from "@/mixins/date-format";

export default {
  name: "EmployeeFormPresentation",
  data() {
    return {
      employee: {
        firstName: "",
        lastName:"",
        gender:1,
        salary:"",
        technology: "",
        joiningDate:""
      },
      technologyArr:['.NET','JAVA','Python','Angular','Vue']
    };
  },
  mounted() {
    this.$refs.input.focus()
  },
  mixins: [Mask,DateFormat],
  props:{
    employeeData:{
      type:Array
    }
  },
  watch:{
    employeeData(newValue){
      this.employee=JSON.parse(JSON.stringify(newValue));
      this.employee.salary = this.maskNumericIntoSeperator(this.employee.salary.toString())
    }
  },
  emits: [
    "addEmployee"
  ],
  methods:{
    saveEmployee(){
      console.log(this.employee,"emp");
      this.$emit("addEmployee",this.employee)
    },
    handleSalaryInput(event) {
        this.employee.salary = this.maskThousandSeperatorForThousandPosition(
          event,
          this.employee.salary
        );
    },
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>