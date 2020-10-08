const input=document.getElementsByTagName('input');
const form=document.getElementById('form');


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

}


//    function focusandblur() {
//         //checking focus
//     for (i = 0; i < input.length; i++) {
//         input[i].addEventListener("focus", function(event) 
//         { 
//             // alert(input[i])
//            input[i].className="focus";
//         });
//         input[i].addEventListener("blur", function(event) 
//         { 
//            input[i].classList.remove('focus');
//         });
//     }
//    }

//    focusandblur();


form.addEventListener("submit", validateform());
//    validateform()