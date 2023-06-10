var input1 = document.querySelector("#phone-input-1");
var input2 = document.querySelector("#phone-input-2");

window.intlTelInput(input1, {
  separateDialCode: true
});

window.intlTelInput(input2, {
  separateDialCode: true
});