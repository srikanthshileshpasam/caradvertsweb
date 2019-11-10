// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}


var car_model;
var car_year;
var car_suplier;
var car_price;

var year_2019=['gli','civic','city','x7','xli'];
var year_2018=['ciaz','fortuner'];
var year_2015=['civic_2015'];
var year_2017=['grandy'];
var year_2012=['accord'];
var search_form=document.getElementById('search_form');


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




search_form.onsubmit=function search_car(){

  var year=document.getElementById('search-input').value;

  document.getElementById('card-1').classList.add("mystyle");
if(year=='2019'){
document.getElementById('card-1').classList.remove("overall_display");
document.getElementById('card-2').classList.remove("overall_display");
document.getElementById('card-3').classList.remove("overall_display");
document.getElementById('card-4').classList.add("overall_display");
document.getElementById('card-5').classList.remove("overall_display");
document.getElementById('card-6').classList.add("overall_display");
document.getElementById('card-7').classList.add("overall_display");
document.getElementById('card-8').classList.add("overall_display");
document.getElementById('card-9').classList.add("overall_display");
document.getElementById('card-10').classList.remove("overall_display");
return false;
}
else if (year==2018) {
  document.getElementById('card-1').classList.add("overall_display");
  document.getElementById('card-2').classList.add("overall_display");
  document.getElementById('card-3').classList.add("overall_display");
  document.getElementById('card-4').classList.add("overall_display");
  document.getElementById('card-5').classList.add("overall_display");
  document.getElementById('card-6').classList.add("overall_display");
  document.getElementById('card-7').classList.remove("overall_display");
  document.getElementById('card-8').classList.add("overall_display");
  document.getElementById('card-9').classList.remove("overall_display");
  document.getElementById('card-10').classList.add("overall_display");
  return false;
}
else if (year==2017) {
  document.getElementById('card-1').classList.add("overall_display");
  document.getElementById('card-2').classList.add("overall_display");
  document.getElementById('card-3').classList.add("overall_display");
  document.getElementById('card-4').classList.remove("overall_display");
  document.getElementById('card-5').classList.add("overall_display");
  document.getElementById('card-6').classList.add("overall_display");
  document.getElementById('card-7').classList.add("overall_display");
  document.getElementById('card-8').classList.add("overall_display");
  document.getElementById('card-9').classList.add("overall_display");
  document.getElementById('card-10').classList.add("overall_display");
  return false;
}
else if (year==2015) {
  document.getElementById('card-1').classList.add("overall_display");
  document.getElementById('card-2').classList.add("overall_display");
  document.getElementById('card-3').classList.add("overall_display");
  document.getElementById('card-4').classList.add("overall_display");
  document.getElementById('card-5').classList.add("overall_display");
  document.getElementById('card-6').classList.add("overall_display");
  document.getElementById('card-7').classList.add("overall_display");
  document.getElementById('card-8').classList.remove("overall_display");
  document.getElementById('card-9').classList.add("overall_display");
  document.getElementById('card-10').classList.add("overall_display");
  return false;
}
else if (year==2012) {
  document.getElementById('card-1').classList.add("overall_display");
  document.getElementById('card-2').classList.add("overall_display");
  document.getElementById('card-3').classList.add("overall_display");
  document.getElementById('card-4').classList.add("overall_display");
  document.getElementById('card-5').classList.add("overall_display");
  document.getElementById('card-6').classList.remove("overall_display");
  document.getElementById('card-7').classList.add("overall_display");
  document.getElementById('card-8').classList.add("overall_display");
  document.getElementById('card-9').classList.add("overall_display");
  document.getElementById('card-10').classList.add("overall_display");
return false;
}
else{
  alert(`Sorry! No cars available that are manufactured in ${year}. Please search for a different year.`);
return false;
}


}
