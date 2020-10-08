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


    //checking focus
    for (i = 0; i < input.length; i++) {
        window.addEventListener("focus", function(event) 
        { 
           input[i].classList.add('focus');
        }, false);
        window.addEventListener("blur", function(event) 
        { 
           input[i].classList.remove('focus');
        }, false);
        }