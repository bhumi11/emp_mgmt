import { Shared } from "@/constants";

const Mask = {
  methods: {
    unmaskString(str: string) {
      if (typeof str === "string") {
        return str.replace(/\D+/g, "")
      } else {
        return str;
      }
    },
    /**
     * mask keypressed value in comma separated value
     * @param value get keypressed value by user
     */
    maskNumericIntoSeperator(value: string) {
      value = value.replace(/\D/g, "");
      const array = value.split("");
      let index = -3;
      while (array.length + index > 0) {
        array.splice(index, 0, ",");
        // Decrement by 4 since we just added another unit to the array.
        index -= 4;
      }
      value = array.join("");
      return value;
    },
    /**
     * thousand separator(comma in every odd position)
     * @param value  value Input
     */
    maskThousandSeperatorForThousandPosition(
      event: KeyboardEvent | any,
      value: string,
      separator = false
    ) {
      let val = value;
      if (!separator) {
        const keysAllowed: string[] = [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
        ];
        const keyPressed: string = event.key;
        if (!keysAllowed.includes(keyPressed)) {
          event.preventDefault();
        }
        val = value + event.key;
      }
      val = this.unmaskString(val);
      if (event) {
        event.preventDefault();
      }
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  },
};

export default Mask;
