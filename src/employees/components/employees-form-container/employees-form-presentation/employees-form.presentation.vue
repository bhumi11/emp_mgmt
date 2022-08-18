<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="name">Employee Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          required
          v-model="employee.name"
          name="name"
        />
      </div>

      <div>Selected: {{ employee.selected }}</div>
      <div class="form-group">
        <select v-model="employee.selected">
          <option disabled value="">Please select one</option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
      </div>

      <button @click="saveTutorial" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newTutorial">Add</button>
    </div>
  </div>
</template>

<script>
export default {
    name:"EmployeeFormPresentation",
    data() {
    return {
      employee: {
        name: "",
        selected:false
      },
      // submitted: false
    };
  },
  mounted(){
    debugger
  }
}
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>