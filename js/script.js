
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

var url_string = "file:///Users/srikanthshileshpasam/Documents/GitHub/caradvertsweb.github.io/info.html?car=xli";
var url = new URL(url_string);
var car = url.searchParams.get("car");
console.log(car);

function set_car_info_on_pop_info(car){
  if(car=='gli'){
    car_model=document.getElementById('gli_model').innerHTML;
    car_year=document.getElementById('gli_year').innerHTML;
    car_suplier=document.getElementById('gli_suplier').innerHTML;
    car_price=document.getElementById('gli_price').innerHTML;
    console.log(car_price);
    document.getElementById('car_company').innerHTML="CAROLLA";
      document.getElementById('car_model').innerHTML=car_model;
        document.getElementById('car_year').innerHTML=car_year;
          document.getElementById('car_suplier').innerHTML=car_suplier;
            document.getElementById('car_price').innerHTML=car_price;
            document.getElementById('car_3').src="Resources/img/cars/gli/gli_3.jpg";
            document.getElementById('car_2').src="Resources/img/cars/gli/gli_2.jpg";
            document.getElementById('car_1').src="Resources/img/cars/gli/gli_1.jpg";

  }

  else if (car=='civic') {
    car_model=document.getElementById('civic_model').innerHTML;
    car_year=document.getElementById('civic_year').innerHTML;
    car_suplier=document.getElementById('civic_suplier').innerHTML;
    car_price=document.getElementById('civic_price').innerHTML;
    console.log(car_price);
    document.getElementById('car_company').innerHTML="HONDA";
      document.getElementById('car_model').innerHTML=car_model;
        document.getElementById('car_year').innerHTML=car_year;
          document.getElementById('car_suplier').innerHTML=car_suplier;
            document.getElementById('car_price').innerHTML=car_price;
            document.getElementById('car_3').src="Resources/img/cars/civic/civic_3.jpeg";
            document.getElementById('car_2').src="Resources/img/cars/civic/civic_2.jpg";
            document.getElementById('car_1').src="Resources/img/cars/civic/civic_1.jpg";
  }


else if(car=='city'){
  car_model=document.getElementById('city_model').innerHTML;
  car_year=document.getElementById('city_year').innerHTML;
  car_suplier=document.getElementById('city_suplier').innerHTML;
  car_price=document.getElementById('city_price').innerHTML;
  console.log(car_price);
  document.getElementById('car_company').innerHTML="HONDA";
    document.getElementById('car_model').innerHTML=car_model;
      document.getElementById('car_year').innerHTML=car_year;
        document.getElementById('car_suplier').innerHTML=car_suplier;
          document.getElementById('car_price').innerHTML=car_price;
          document.getElementById('car_3').src="Resources/img/cars/city/city_3.jpg";
          document.getElementById('car_2').src="Resources/img/cars/city/city_2.jpg";
          document.getElementById('car_1').src="Resources/img/cars/city/city_1.jpg";
}

else if (car=='grandy') {
  car_model=document.getElementById('grandy_model').innerHTML;
  car_year=document.getElementById('grandy_year').innerHTML;
  car_suplier=document.getElementById('grandy_suplier').innerHTML;
  car_price=document.getElementById('grandy_price').innerHTML;
  console.log(car_price);
  document.getElementById('car_company').innerHTML="TOYOTA";
    document.getElementById('car_model').innerHTML=car_model;
      document.getElementById('car_year').innerHTML=car_year;
        document.getElementById('car_suplier').innerHTML=car_suplier;
          document.getElementById('car_price').innerHTML=car_price;
          document.getElementById('car_3').src="Resources/img/cars/grandy/grandy_3.jpg";
          document.getElementById('car_2').src="Resources/img/cars/grandy/grandy_2.jpg";
          document.getElementById('car_1').src="Resources/img/cars/grandy/grandy_1.jpg";
}

else if (car=='x7') {
  car_model=document.getElementById('x7_model').innerHTML;
  car_year=document.getElementById('x7_year').innerHTML;
  car_suplier=document.getElementById('x7_suplier').innerHTML;
  car_price=document.getElementById('x7_price').innerHTML;
  console.log(car_price);
  document.getElementById('car_company').innerHTML="BMW";
    document.getElementById('car_model').innerHTML=car_model;
      document.getElementById('car_year').innerHTML=car_year;
        document.getElementById('car_suplier').innerHTML=car_suplier;
          document.getElementById('car_price').innerHTML=car_price;
          document.getElementById('car_3').src="Resources/img/cars/bmw/x7_3.jpg";
          document.getElementById('car_2').src="Resources/img/cars/bmw/x7_2.jpg";
          document.getElementById('car_1').src="Resources/img/cars/bmw/x7_1.jpg";
}

else if (car=='accord') {
  car_model=document.getElementById('accord_model').innerHTML;
  car_year=document.getElementById('accord_year').innerHTML;
  car_suplier=document.getElementById('accord_suplier').innerHTML;
  car_price=document.getElementById('accord_price').innerHTML;
  console.log(car_price);
  document.getElementById('car_company').innerHTML="HONDA";
    document.getElementById('car_model').innerHTML=car_model;
      document.getElementById('car_year').innerHTML=car_year;
        document.getElementById('car_suplier').innerHTML=car_suplier;
          document.getElementById('car_price').innerHTML=car_price;
          document.getElementById('car_3').src="Resources/img/cars/accord/accord_3.jpg";
          document.getElementById('car_2').src="Resources/img/cars/accord/accord_2.jpg";
          document.getElementById('car_1').src="Resources/img/cars/accord/accord_1.jpg";
}



else if (car=='fortuner') {
  car_model=document.getElementById('fortuner_model').innerHTML;
  car_year=document.getElementById('fortuner_year').innerHTML;
  car_suplier=document.getElementById('fortuner_suplier').innerHTML;
  car_price=document.getElementById('fortuner_price').innerHTML;
  console.log(car_price);
  document.getElementById('car_company').innerHTML="TOYOTA";
    document.getElementById('car_model').innerHTML=car_model;
      document.getElementById('car_year').innerHTML=car_year;
        document.getElementById('car_suplier').innerHTML=car_suplier;
          document.getElementById('car_price').innerHTML=car_price;
          document.getElementById('car_3').src="Resources/img/cars/fortuner/fortuner_3.jpg";
          document.getElementById('car_2').src="Resources/img/cars/fortuner/fortuner_2.png";
          document.getElementById('car_1').src="Resources/img/cars/fortuner/fortuner_1.jpg";
}


else if (car=='civic_2015') {
  car_model=document.getElementById('civic_2015_model').innerHTML;
  car_year=document.getElementById('civic_2015_year').innerHTML;
  car_suplier=document.getElementById('civic_2015_suplier').innerHTML;
  car_price=document.getElementById('civic_2015_price').innerHTML;
  console.log(car_price);
  document.getElementById('car_company').innerHTML="HONDA";
    document.getElementById('car_model').innerHTML=car_model;
      document.getElementById('car_year').innerHTML=car_year;
        document.getElementById('car_suplier').innerHTML=car_suplier;
          document.getElementById('car_price').innerHTML=car_price;
          document.getElementById('car_3').src="Resources/img/cars/civic2015/civic_2015_3.jpg";
          document.getElementById('car_2').src="Resources/img/cars/civic2015/civic_2015_2.jpg";
          document.getElementById('car_1').src="Resources/img/cars/civic2015/civic_2015_1.jpg";
}

else if (car=='ciaz') {
  car_model=document.getElementById('ciaz_model').innerHTML;
  car_year=document.getElementById('ciaz_year').innerHTML;
  car_suplier=document.getElementById('ciaz_suplier').innerHTML;
  car_price=document.getElementById('ciaz_price').innerHTML;
  console.log(car_price);
  document.getElementById('car_company').innerHTML="SAZUKI";
    document.getElementById('car_model').innerHTML=car_model;
      document.getElementById('car_year').innerHTML=car_year;
        document.getElementById('car_suplier').innerHTML=car_suplier;
          document.getElementById('car_price').innerHTML=car_price;
          document.getElementById('car_3').src="Resources/img/cars/suzuki/ciaz_3.jpg";
          document.getElementById('car_2').src="Resources/img/cars/suzuki/ciaz_2.jpg";
          document.getElementById('car_1').src="Resources/img/cars/suzuki/ciaz_1.jpg";
}


else if (car=='xli') {
  car_model=document.getElementById('xli_model').innerHTML;
  car_year=document.getElementById('xli_year').innerHTML;
  car_suplier=document.getElementById('xli_suplier').innerHTML;
  car_price=document.getElementById('xli_price').innerHTML;
  console.log(car_price);
  document.getElementById('car_company').innerHTML="TOYOTA";
    document.getElementById('car_model').innerHTML=car_model;
      document.getElementById('car_year').innerHTML=car_year;
        document.getElementById('car_suplier').innerHTML=car_suplier;
          document.getElementById('car_price').innerHTML=car_price;
          document.getElementById('car_3').src="Resources/img/cars/xli/xli_3.jpg";
          document.getElementById('car_2').src="Resources/img/cars/xli/xli_2.jpg";
          document.getElementById('car_1').src="Resources/img/cars/xli/xli_1.jpg";
}

else {
  alert("there is an error while getting the car information");
}


}




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
