import { Shared } from "@/constants";

const Mask = {
  methods: {
    maskString(str: string, pattern: string) {
      let i = 0;
      const padded = pattern.replace(/#/g, () => {
        return str[i++];
      });
      return padded;
    },
    maskPhoneNumber(str: string, pattern: string) {
      let i = 0;
      const padded = pattern.replace(/0/g, () => {
        return str[i++];
      });
      return padded;
    },
    maskFederalTaxId(str: string, pattern: string) {
      let i = 0;
      const padded = pattern.replace(/A/g, () => {
        return str[i++];
      });
      return padded;
    },
    unmaskString(str: string) {
      if (typeof str === "string") {
        return str.replace(/\D+/g, "")
      } else {
        return str;
      }

    },
    unmaskDecimalString(str: any) {
      let string = str
      if (typeof str == 'number') {
        string = str.toString()
      }
      return string?.replace(/[^0-9.-]/g, "");
    },
    phoneNumberCell(
      h: any,
      tdElement: any,
      props: any,
      listeners: any,
      key: any
    ) {
      const value = props.dataItem.phoneNumber
        ? this.maskString(props.dataItem.phoneNumber, "(###)###-####")
        : "-";
      return h("td", {}, [value]);
    },
    unmaskFederalTaxId(str: string) {
      return str.replace(/[^A-Za-z0-9]/g, "");
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
    },
    /**
     * thousand separator(comma in every odd position) Paste scenarion
     * @param event input event
     * @param digitLength  valid digit
     */
    maskThousandSeperatorForThousandPositionInput(
      event: any,
      digitLength: number
    ) {
      const paste = event.clipboardData.getData("text");
      const digits = Shared.REGEX.DIGITS;
      const found = paste.match(digits);
      if (!found || paste.length > digitLength) {
        event.preventDefault();
      } else {
        const unmask = this.unmaskString(paste);
        event.preventDefault();
        return unmask.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
    },
    validateNumber(
      value: any,
      integersLength: number,
      fractionalLength: number,
      allowNegative: boolean
    ) {
      let regexToValidate;
      if (value) {
        if (allowNegative) {
          if (fractionalLength) {
            //eslint-disable-next-line
            regexToValidate = `/^-?(\d{1,${integersLength}}|\d{1,${integersLength}}\.\d{1,${fractionalLength}})$/`;
          } else {
            //eslint-disable-next-line
            regexToValidate = `/^-?(\d{1,${integersLength}}|\d{1,${integersLength}})$/`;
          }
        } else {
          if (fractionalLength) {
            //eslint-disable-next-line
            regexToValidate = `^(\d{1,${integersLength}}|\d{1,${integersLength}}\.\d{1,${fractionalLength}})$`;
          } else {
            //eslint-disable-next-line
            regexToValidate = `/^(\d{1,${integersLength}}|\d{1,${integersLength}})$/`;
          }
        }
        // regexToValidate = new RegExp(regexToValidate)
        if (!value.match(regexToValidate)) {
          return false;
        }
      }
      return true;
    },
    maskNumberValue(value: any) {
      value = this.unmaskDecimalString(value);
      const isNegative = value.includes("-");
      const withoutNegativeSignValue = isNegative
        ? value.slice(1, value.length)
        : value;
      const splitValue = withoutNegativeSignValue.split(".");
      let val = this.maskNumericIntoSeperator(splitValue[0]);
      if (value.includes(".")) {
        val = val + "." + splitValue[1];
      }
      return isNegative ? "-" + val : val;
    },
    maskNumberValueWithoutNegativeSign(value: any) {
      value = this.unmaskDecimalString(value);
      const isNegative = value.includes("-");
      const withoutNegativeSignValue = isNegative
        ? value.slice(1, value.length)
        : value;
      const splitValue = withoutNegativeSignValue.split(".");
      let val = this.maskNumericIntoSeperator(splitValue[0]);
      if (value.includes(".")) {
        val = val + "." + splitValue[1];
      }
      return val;
    },
    onPasteInNumberField(
      event: any,
      allowDecimal: boolean,
      allowNegative: boolean,
      allowComma?: boolean
    ) {
      const pasteData = event.clipboardData.getData("text");
      let regexToValidate;
      if (allowNegative) {
        regexToValidate = allowDecimal
          ? Shared.REGEX.NEGATIVE_DIGITS_WITH_FRACTION
          : Shared.REGEX.NEGATIVE_DIGITS;
      } else if (allowComma) {
        regexToValidate = Shared.REGEX.DIGITS_WITH_COMMA;
      } else {
        regexToValidate = allowDecimal
          ? Shared.REGEX.DIGITS_WITH_FRACTION
          : Shared.REGEX.DIGITS;
      }
      const found = pasteData.match(regexToValidate);
      if (!found) {
        event.preventDefault();
      }
    },
    moneyMask(value: any) {
      if (value || Object.is(value, 0)) {
        const checkDecimal = JSON.parse(JSON.stringify(value.toString()));
        const dec = checkDecimal.split('.')[1]
        let length = 2;
        if (dec) {
          length = dec.length > 2 ? 2 : dec.length;
        }
        return '$' + Number(checkDecimal).toFixed(length)
      } else {
        return "";
      }
    },
    formatTermsValues(termType: any, month: any, mile: any) {
      if (termType == 1) {
        return this.maskNumberValue(month.toString());
      } else if (termType == 2) {
        return this.maskNumberValue(mile.toString());
      } else {
        if (month && mile === 0) {
          return this.maskNumberValue(month.toString()) + "/" + mile;
        } else if (mile && month === 0) {
          return month + "/" + this.maskNumberValue(mile.toString());
        } else if (month === 0 && mile === 0) {
          return month + "/" + mile;
        } else {
          return (
            this.maskNumberValue(month.toString()) +
            "/" +
            this.maskNumberValue(mile.toString())
          );
        }
      }
    },
    formatSlashNumericValue(value: number) {
      if (value) {
        return value.toString().split('/').map((x) => {
          return x.toString().replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1,');
        }).join("/");
      } else {
        return value;
      }
    },

    /**
     * This method is used for handling Decimal Input Value
     */
     handleNumberInput(event: KeyboardEvent, isDecimal = false) {
      let keysAllowed: string[];
      if(isDecimal) {
        keysAllowed = [
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
          ".",
        ];
      } else {
        keysAllowed = [
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
      }
      
      const keyPressed: string = event.key;
      if (!keysAllowed.includes(keyPressed)) {
        event.preventDefault();
      }
    },
  },
};

export default Mask;
