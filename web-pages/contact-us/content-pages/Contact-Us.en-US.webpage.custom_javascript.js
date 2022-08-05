if (window.jQuery) {
 (function ($) {
 $(document).ready(function () {
 if (typeof (Page_Validators) == 'undefined') return;
 // Create new validator
 var newValidator = document.createElement('span');
 newValidator.style.display = "none";
 newValidator.id = "emailaddress1Validator";
 newValidator.controltovalidate = "emailaddress1";
 newValidator.errormessage = "<a href='#emailaddress1_label'>You have indicated Web as how you heard about us, please input an email address before submitting.</a>";
 newValidator.validationGroup = ""; // Set this if you have set ValidationGroup on the form
 newValidator.initialvalue = "";
 newValidator.evaluationfunction = function () {
 var contactMethod = $("#leadsourcecode").val();
 if (contactMethod == "Web") return true; // check if contact method is not 'Email'.
 // only require email address if preferred contact method is email.
 var value = $("#emailaddress1").val();
 if (value === null || value === "") {
 return false;
 } else {
 return true;
 }
 };
 // Add the new validator to the page validators array:
 Page_Validators.push(newValidator);
 // Wire-up the click event handler of the validation summary link
 $("a[href='#emailaddress1_label']").on("click", function () { 
scrollToAndFocus('emailaddress1_label','emailaddress1'); });
 });
 }(window.jQuery));
}
