const input=document.getElementsByTagName('input');


function validateform() { 
    let valid =true
    // A loop that checks everinput input field in the current tab:
    for (i = 0; i < input.length; i++) {
   
      // If a field is emptinput...
      if (input[i].value == "") {
        // add an "invalid" class to the field:
        input[i].className += " invalid";
        // and set the current valid status to false
        valid = false;
      }
    }