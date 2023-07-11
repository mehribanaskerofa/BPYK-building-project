// const phoneInputField1 = document.querySelector("#phone");
// const phoneInput1 = window.intlTelInput(phoneInputField, {
//   utilsScript:
//     "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
// });


var input1 = document.querySelector("#phone-input-1");
var input2 = document.querySelector("#phone-input-2");

window.intlTelInput(input1, {
  separateDialCode: true
});

window.intlTelInput(input2, {
  separateDialCode: true
});