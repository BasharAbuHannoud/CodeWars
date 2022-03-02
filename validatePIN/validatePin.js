/*ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.*/

function validatePIN (pin) {
  

 if (/^\d+$/.test(pin)&& pin.length == 4  ){
   return true;
 }else if (  /^\d+$/.test(pin)&& pin.length == 6 ){
    return true;
 }
  
  return false 
}

/*to check if there is only numbers there is a different ways:

1- /^[0-9]+$/ 

2-  /^\d+$/

3- /^(\d{4}|\d{6})$/

/*
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
*/