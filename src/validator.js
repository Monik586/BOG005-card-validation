const validator = {

  isValid: function (creditCardNumber) {

    let digits = creditCardNumber.split("").reverse();
  
    let sum = 0;

    //iterating "creditCardNumber" line 11 index.js.

    for (let i = 0; i < creditCardNumber.length; i++) {
      digits[i] = parseInt(digits[i]);
     

      if (i % 2 !== 0) {
        digits[i] *= 2

        if (digits[i] > 9) {
          digits[i] -= 9
        }
      }

      sum += digits[i];
    }
    // console.log(sum);
    //Results.
    if (sum % 10 === 0) {
      // console.log("TRUE")
      return true
    } else {
      // console.log("FALSE")
      return false
    }
  },
  maskify: function (creditCardNumber) {

    let maskDigits= creditCardNumber.slice(0,-4).replace(/./g,"#");
    let ultimosCuatro= creditCardNumber.slice(-4);
    let todo= maskDigits + ultimosCuatro;

    return todo
}

}

export default validator;
