
// Display thank you message
 alert (`you decied to fill Thank you `);

 const submitButton = document.getElementById('submit-button');


 submitButton.disabled = true;
 
 
 setTimeout(() => {
  
   submitButton.disabled = false;
 }, 3000);

