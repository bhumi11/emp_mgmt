<template>
  <div>
    <button @click="handleClick">Insert/Remove</button>
    <div v-if="show" ref="content">I am an element</div>
  </div>
</template>

<script>
import { nextTick } from "vue";

export default {
  name: "nexttickExample",
  data() {
    return {
      show: true,
    };
  },
  methods: {
    handleClick() {
      this.show = !this.show;
      //without nexttick
      console.log(this.show, this.$refs.content);

      //with nexttick
      // nextTick(() => {
      //   console.log(this.show, this.$refs.content);
      // });
    },
  },
};
</script>

<style scoped>
button {
  margin-bottom: 10px;
}
</style>