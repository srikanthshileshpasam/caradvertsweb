

var search_form=document.getElementById('search-form');
search_form.onclick= function search_car(){

var search_term=document.getElementById('search-input').value;


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
else if(search_term=== 'toyota'){
document.getElementById('car-1').classList.remove("search_results");
document.getElementById('car-2').classList.add("search_results");
document.getElementById('car-3').classList.add("search_results");
document.getElementById('car-4').classList.remove("search_results");
document.getElementById('car-5').classList.add("search_results");
document.getElementById('car-6').classList.add("search_results");
document.getElementById('car-7').classList.remove("search_results");
document.getElementById('car-8').classList.add("search_results");
document.getElementById('car-9').classList.add("search_results");
document.getElementById('car-10').classList.remove("search_results");
}
else if (search_term=='honda') {
  document.getElementById('car-1').classList.add("search_results");
  document.getElementById('car-2').classList.remove("search_results");
  document.getElementById('car-3').classList.remove("search_results");
  document.getElementById('car-4').classList.add("search_results");
  document.getElementById('car-5').classList.add("search_results");
  document.getElementById('car-6').classList.remove("search_results");
  document.getElementById('car-7').classList.add("search_results");
  document.getElementById('car-8').classList.remove("search_results");
  document.getElementById('car-9').classList.add("search_results");
  document.getElementById('car-10').classList.add("search_results");
}
else if (search_term=='bmw') {
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
else if (search_term=='suzuki') {
  document.getElementById('car-1').classList.add("search_results");
  document.getElementById('car-2').classList.add("search_results");
  document.getElementById('car-3').classList.add("search_results");
  document.getElementById('car-4').classList.add("search_results");
  document.getElementById('car-5').classList.add("search_results");
  document.getElementById('car-6').classList.add("search_results");
  document.getElementById('car-7').classList.add("search_results");
  document.getElementById('car-8').classList.add("search_results");
  document.getElementById('car-9').classList.remove("search_results");
  document.getElementById('car-10').classList.add("search_results");
}
else if (search_term=='gli') {
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
else if(search_term=='civic'){
document.getElementById('car-1').classList.add("search_results");
document.getElementById('car-2').classList.remove("search_results");
document.getElementById('car-3').classList.add("search_results");
document.getElementById('car-4').classList.add("search_results");
document.getElementById('car-5').classList.add("search_results");
document.getElementById('car-6').classList.add("search_results");
document.getElementById('car-7').classList.add("search_results");
document.getElementById('car-8').classList.remove("search_results");
document.getElementById('car-9').classList.add("search_results");
document.getElementById('car-10').classList.add("search_results");
}
else if (search_term=='city') {
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
else if (search_term=='grandy') {
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
else if (search_term=='x7') {
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
else if (search_term=='accord') {
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
else if (search_term=='fortuner') {
  document.getElementById('car-1').classList.add("search_results");
  document.getElementById('car-2').classList.add("search_results");
  document.getElementById('car-3').classList.add("search_results");
  document.getElementById('car-4').classList.add("search_results");
  document.getElementById('car-5').classList.add("search_results");
  document.getElementById('car-6').classList.add("search_results");
  document.getElementById('car-7').classList.remove("search_results");
  document.getElementById('car-8').classList.add("search_results");
  document.getElementById('car-9').classList.add("search_results");
  document.getElementById('car-10').classList.add("search_results");
}
else if (search_term=='ciaz') {
  document.getElementById('car-1').classList.add("search_results");
  document.getElementById('car-2').classList.add("search_results");
  document.getElementById('car-3').classList.add("search_results");
  document.getElementById('car-4').classList.add("search_results");
  document.getElementById('car-5').classList.add("search_results");
  document.getElementById('car-6').classList.add("search_results");
  document.getElementById('car-7').classList.add("search_results");
  document.getElementById('car-8').classList.add("search_results");
  document.getElementById('car-9').classList.remove("search_results");
  document.getElementById('car-10').classList.add("search_results");
}
else if (search_term=='xli') {
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
