

var search_form=document.getElementById('search-form');
search_form.onclick= function search_car(){

var text=document.getElementById('search-input').value;
var search_term=text.toLowerCase();


if(search_term=='2019'){
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
else if (search_term=='2018') {
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
else if (search_term=='2017') {
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
else if (search_term=='2015') {
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
else if (search_term=='2012') {
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
else if(search_term=='audi') {
  document.getElementById('car-1').classList.remove("search_results");
  document.getElementById('car-2').classList.add("search_results");
  document.getElementById('car-3').classList.add("search_results");
  document.getElementById('car-4').classList.add("search_results");
  document.getElementById('car-5').classList.add("search_results");
  document.getElementById('car-6').classList.add("search_results");
  document.getElementById('car-7').classList.add("search_results");
  document.getElementById('car-8').classList.add("search_results");
  document.getElementById('car-9').classList.add("search_results");
  document.getElementById('car-10').classList.add("search_results");
}
else if (search_term=='buggati') {
  document.getElementById('car-1').classList.add("search_results");
  document.getElementById('car-2').classList.remove("search_results");
  document.getElementById('car-3').classList.add("search_results");
  document.getElementById('car-4').classList.add("search_results");
  document.getElementById('car-5').classList.add("search_results");
  document.getElementById('car-6').classList.add("search_results");
  document.getElementById('car-7').classList.add("search_results");
  document.getElementById('car-8').classList.add("search_results");
  document.getElementById('car-9').classList.add("search_results");
  document.getElementById('car-10').classList.add("search_results");
}
else if (search_term=='ferrari') {
  document.getElementById('car-1').classList.add("search_results");
  document.getElementById('car-2').classList.add("search_results");
  document.getElementById('car-3').classList.remove("search_results");
  document.getElementById('car-4').classList.add("search_results");
  document.getElementById('car-5').classList.add("search_results");
  document.getElementById('car-6').classList.add("search_results");
  document.getElementById('car-7').classList.add("search_results");
  document.getElementById('car-8').classList.add("search_results");
  document.getElementById('car-9').classList.add("search_results");
  document.getElementById('car-10').classList.add("search_results");
}
else if (search_term=='ford') {
  document.getElementById('car-1').classList.add("search_results");
  document.getElementById('car-2').classList.add("search_results");
  document.getElementById('car-3').classList.add("search_results");
  document.getElementById('car-4').classList.remove("search_results");
  document.getElementById('car-5').classList.add("search_results");
  document.getElementById('car-6').classList.add("search_results");
  document.getElementById('car-7').classList.remove("search_results");
  document.getElementById('car-8').classList.add("search_results");
  document.getElementById('car-9').classList.add("search_results");
  document.getElementById('car-10').classList.add("search_results");
}
else if (search_term=='mclaren') {
  document.getElementById('car-1').classList.add("search_results");
  document.getElementById('car-2').classList.add("search_results");
  document.getElementById('car-3').classList.add("search_results");
  document.getElementById('car-4').classList.add("search_results");
  document.getElementById('car-5').classList.remove("search_results");
  document.getElementById('car-6').classList.add("search_results");
  document.getElementById('car-7').classList.add("search_results");
  document.getElementById('car-8').classList.add("search_results");
  document.getElementById('car-9').classList.add("search_results");
  document.getElementById('car-10').classList.add("search_results");
}
else if(search_term=='mercedes') {
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
else if (search_term=='porsche') {
  document.getElementById('car-1').classList.add("search_results");
  document.getElementById('car-2').classList.add("search_results");
  document.getElementById('car-3').classList.add("search_results");
  document.getElementById('car-4').classList.add("search_results");
  document.getElementById('car-5').classList.add("search_results");
  document.getElementById('car-6').classList.add("search_results");
  document.getElementById('car-7').classList.add("search_results");
  document.getElementById('car-8').classList.remove("search_results");
  document.getElementById('car-9').classList.remove("search_results");
  document.getElementById('car-10').classList.add("search_results");
}
else if (search_term=='lamborghini') {
  document.getElementById('car-1').classList.add("search_results");
  document.getElementById('car-2').classList.add("search_results");
  document.getElementById('car-3').classList.add("search_results");
  document.getElementById('car-4').classList.add("search_results");
  document.getElementById('car-5').classList.add("search_results");
  document.getElementById('car-6').classList.add("search_results");
  document.getElementById('car-7').classList.add("search_results");
  document.getElementById('car-8').classList.add("search_results");
  document.getElementById('car-9').classList.add("search_results");
  document.getElementById('car-10').classList.remove("search_results");
}
else{
  alert(`Sorry! No cars available matching ${search_term}. Please try again.`);
  return false;
}
window.location.reload(flase);
}
