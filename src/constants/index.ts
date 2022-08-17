const Shared = {
    // DISPATCH: {
    //   SET_GET_ALL: "setGetAll",
    //   HIDE_LOADER: "hideLoader",
    // },
    // TOASTER: {
    //   DELETE: "Data deleted successfully",
    //   SAVE: "Data saved successfully",
    //   UPDATE: "Data updated successfully",
    //   COPY_SELLER_SAVE: "Seller configuration copied successfully",
    // },

    REGEX: {
      //eslint-disable-next-line
      EMAIL: /(^$)|^([0-9a-zA-Z]((?!.*\.{2})[-\.\w]*[0-9a-zA-Z])@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/,
      ZIPCODE_5: /(^$)|(^\d{5}?(\d{4})?$)/,
      ZIPCODE_9: /(^$)|(^\d{5}([-]*)?(\d{4})?$)/,
      DIGITS: /^[0-9]*$/,
      DIGITS_WITH_FRACTION: /^[0-9.]*$/,
      NEGATIVE_DIGITS: /^[0-9-]*$/,
      NEGATIVE_DIGITS_WITH_FRACTION: /^[0-9.-]*$/,
      DIGITS_WITH_COMMA: /^[0-9,]*$/,
      BUSINESS_NAME: /^[a-zA-Z0-9 ]*$/,
    },

    // SORT_DIRECTION: {
    //   ASC: "asc",
    //   DESC: "desc",
    // },

  };
  export { Shared };
  