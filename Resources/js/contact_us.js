function message(){
  var email= document.getElementById('email').value;
  console.log(email);
  if(email==""){
    document.getElementById('contact-btn').setAttribute("href", "#pop-info_form");
      alert(`please input the email and then type message `);
  }
  else {
    document.getElementById('contact-btn').setAttribute("href", "#pop-info");
      alert(`THANK YOU ! ${email} for contacting us we will get you back soon `);
      document.getElementById('email').value="";
      document.getElementById('message').value="";
  }


}


function clear_form(){
  document.getElementById('email').value="";
  document.getElementById('message').value="";
}
