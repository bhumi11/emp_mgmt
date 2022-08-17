const CommonMixin = {
  methods: {
    ellipse(value: string, characterLength: number) {
      const val = value ? value?.substr(0, characterLength) : "-";
      return value && value.length > characterLength ? val + "..." : val;
    }
  }
};

export default CommonMixin;
