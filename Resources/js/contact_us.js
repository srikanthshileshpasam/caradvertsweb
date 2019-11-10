
function message(){
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var message = document.getElementById('message').value;


  console.log(name);
  console.log(email);
  console.log(phone);

  if(name==""){
    document.getElementById('contact-btn').setAttribute("href", "#pop-up-form");
    alert(`Please provide your name.`);
  }
  else if (email=="") {
    document.getElementById('contact-btn').setAttribute("href", "#pop-up-form");
    alert(`Please provide your email.`);
  }
  else if (phone=="") {
    document.getElementById('contact-btn').setAttribute("href", "#pop-up-form");
    alert(`Please provide your phone number.`);
  }
  else {
    document.getElementById('contact-btn').setAttribute("href", "#pop-info");
      alert(`Thank you, ${name} for contacting us. We will get back to you soon.`);
      document.getElementById('name').value="";
      document.getElementById('email').value="";
      document.getElementById('phone').value="";
      document.getElementById('message').value="";
  }
}

function clear_form(){
  document.getElementById('name').value="";
  document.getElementById('email').value="";
  document.getElementById('phone').value="";
  document.getElementById('message').value="";
}
