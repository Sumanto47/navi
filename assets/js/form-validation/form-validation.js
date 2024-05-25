//------------------------------------- FORM VALIDATION ONLY START ------------------------------//

document.addEventListener('DOMContentLoaded', function() {
    // DOM elements
    let form = document.querySelector("form");
    let Name = document.querySelector("#name");
    let Email = document.querySelector("#email");
    let mobNumber = document.querySelector("#mob_number");
  
    // Event listener to submit form
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        handleInput();
        handleTextarea();
    });
  
    // Event listeners for live validation
    Name.addEventListener("input", handleInput);
    Email.addEventListener("input", handleInput);
    mobNumber.addEventListener("input", handleInput);
  
    // Handle input fields validation
    function handleInput() {
        let NameValue = Name.value.trim();
        let EmailValue = Email.value.trim();
        let mobNumberValue = mobNumber.value.trim();
  
        // Checking for name
        if (NameValue === "") {
            setErrorFor(Name, "Name is required");
        } else {
            setSuccessFor(Name);
        }
  
        // Checking for email
        if (EmailValue === "") {
            setErrorFor(Email, "Email is required");
        } else if (!isValidEmail(EmailValue)) {
            setErrorFor(Email, "Please enter a valid email");
        } else {
            setSuccessFor(Email);
        }
  
        // Checking for mobile number
        if (mobNumberValue === "") {
            setErrorFor(mobNumber, "Mobile number is required");
        } else if (!isValidmobNumber(mobNumberValue)) {
              setErrorFor(mobNumber, "Please enter a 10 digit mobile number");
        } else {
              setSuccessFor(mobNumber);
        }
    }
    
    // Set error for input
    function setErrorFor(input, message) {
        let formControl = input.parentElement;
        formControl.className = "form-control error";
        let small = formControl.querySelector("small");
        small.innerText = message;
    }
  
    // Set success for input
    function setSuccessFor(input) {
        let formControl = input.parentElement;
        formControl.className = "form-control success";
    }
  
    // Check if email is valid
    function isValidEmail(email) {
        return /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email);
    }
  
    // Check if mobile number is valid
    function isValidmobNumber(mobnumber) {
        return /^\d{10}$/.test(mobnumber);
    }
  });
  
  //------------------------------------- FORM VALIDATION ONLY COMPLETE ------------------------------//
  
  //------------------------------------- FORM FUNCTION START ------------------------------//
  
    // Form show/hide functionality
  $(document).ready(function() {
      $('#select_purpose input[type="radio"]').on('change', function() {
          if ($('#telecom').is(':checked')) {
              $('#select_type_box').show();
              $('#select_type_box_2').hide();
          } else if ($('#it').is(':checked')) {
              $('#select_type_box').hide();
              $('#select_type_box_2').show();
          } else {
              $('#select_type_box').hide();
              $('#select_type_box_2').hide();
          }
      });
      // Trigger the change event on page load to set the initial state
      $('#radio input[type="radio"]:checked').trigger('change');
  });
  
    
  $('#type').on('change', function() {
    $('#choose_prod_jio').css('display', 'none');
    if ( $(this).val() === 'jio' ) {
      $('#choose_prod_jio').css('display', 'block');
    }
    $('#choose_prod_tatatele').css('display', 'none');
    if ( $(this).val() === 'tatatele' ) {
      $('#choose_prod_tatatele').css('display', 'block');
    }
    $('#choose_prod_sales').css('display', 'none');
    if ( $(this).val() === 'sales' ) {
      $('#choose_prod_sales').css('display', 'block');
    }
    $('#choose_prod_services').css('display', 'none');
    if ( $(this).val() === 'services' ) {
      $('#choose_prod_services').css('display', 'block');
    }
  });
  
  //------------------------------------- FORM FUNCTION COMPLETE ------------------------------//

  