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


var search_form=document.getElementById('search-form');

search_form.onclick= function search_car(){
  var year=document.getElementById('search-input').value;

if(year==2019){
document.getElementById('car-1').classList.remove("search_results");
document.getElementById('car-2').classList.remove("search_results");
document.getElementById('car-3').classList.remove("search_results");
document.getElementById('car-4').classList.add("search_results");
document.getElementById('car-5').classList.remove("search_results");
document.getElementById('car-6').classList.add("search_results");
document.getElementById('car-7').classList.add("search_results");
document.getElementById('car-8').classList.add("search_results");
document.getElementById('car-9').classList.add("search_results");
document.getElementById('car-10').classList.remove("search_results");
}
else if (year==2018) {
  document.getElementById('car-1').classList.add("search_results");
  document.getElementById('car-2').classList.add("search_results");
  document.getElementById('car-3').classList.add("search_results");
  document.getElementById('car-4').classList.add("search_results");
  document.getElementById('car-5').classList.add("search_results");
  document.getElementById('car-6').classList.add("search_results");
  document.getElementById('car-7').classList.remove("search_results");
  document.getElementById('car-8').classList.add("search_results");
  document.getElementById('car-9').classList.remove("search_results");
  document.getElementById('car-10').classList.add("search_results");
}
else if (year==2017) {
  document.getElementById('car-1').classList.add("search_results");
  document.getElementById('car-2').classList.add("search_results");
  document.getElementById('car-3').classList.add("search_results");
  document.getElementById('car-4').classList.remove("search_results");
  document.getElementById('car-5').classList.add("search_results");
  document.getElementById('car-6').classList.add("search_results");
  document.getElementById('car-7').classList.add("search_results");
  document.getElementById('car-8').classList.add("search_results");
  document.getElementById('car-9').classList.add("search_results");
  document.getElementById('car-10').classList.add("search_results");
}
else if (year==2015) {
  document.getElementById('car-1').classList.add("search_results");
  document.getElementById('car-2').classList.add("search_results");
  document.getElementById('car-3').classList.add("search_results");
  document.getElementById('car-4').classList.add("search_results");
  document.getElementById('car-5').classList.add("search_results");
  document.getElementById('car-6').classList.add("search_results");
  document.getElementById('car-7').classList.add("search_results");
  document.getElementById('car-8').classList.remove("search_results");
  document.getElementById('car-9').classList.add("search_results");
  document.getElementById('car-10').classList.add("search_results");
}
else if (year==2012) {
  document.getElementById('car-1').classList.add("search_results");
  document.getElementById('car-2').classList.add("search_results");
  document.getElementById('car-3').classList.add("search_results");
  document.getElementById('car-4').classList.add("search_results");
  document.getElementById('car-5').classList.add("search_results");
  document.getElementById('car-6').classList.remove("search_results");
  document.getElementById('car-7').classList.add("search_results");
  document.getElementById('car-8').classList.add("search_results");
  document.getElementById('car-9').classList.add("search_results");
  document.getElementById('car-10').classList.add("search_results");
}
else{
  alert(`Sorry! No cars available that are manufactured in ${year}. Please search for a different year.`);
  return false;
}
}
