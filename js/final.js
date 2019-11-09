var car1_company = 'Toyota';
var car1_name = 'GLI';
var car1_year = '2019';
var car1_dist = 'Easy Cars';
var car1_price = '4000';

var car2_company = 'Honda';
var car2_name = 'Civic';
var car2_year = '2019';
var car2_dist = 'Alex Cars';
var car2_price = '6000';

var car3_company = 'Honda';
var car3_name = 'City';
var car3_year = '2019';
var car3_dist = 'Trans Auto';
var car3_price = '5000';

var car4_company = 'Toyota';
var car4_name = 'Grandy';
var car4_year = '2017';
var car4_dist = 'Trans Auto';
var car4_price = '9500';

var car5_company = 'BMW';
var car5_name = 'X7';
var car5_year = '2019';
var car5_dist = 'Alex Cars';
var car5_price = '4000';

var car6_company = 'Honda';
var car6_name = 'Accord';
var car6_year = '2012';
var car6_dist = 'Alex Cars';
var car6_price = '7000';

var car7_company = 'Toyota';
var car7_name = 'Fortuner';
var car7_year = '2018';
var car7_dist = 'Alex Cars';
var car7_price = '4000';

var car8_company = 'Honda';
var car8_name = 'Civic';
var car8_year = '2015';
var car8_dist = 'Trans Auto';
var car8_price = '8000';

var car9_company = 'Suzuki';
var car9_name = 'Ciaz';
var car9_year = '2018';
var car9_dist = 'Alex Cars';
var car9_price = '6000';

var car10_company = 'Toyota';
var car10_name = 'XLI';
var car10_year = '2019';
var car10_dist = 'Trans Auto';
var car10_price = '4500';


  // initialize an empty object
  let car = '';
  // get URL query string
  let params = window.location.search;
  // remove the '?' character
  params = params.substr(1);
  let queryParamArray = params.split('&amp;');
  // iterate over parameter array
  queryParamArray.forEach(function(queryParam) {
    // split the query parameter over '='
    let item = queryParam.split("=");
    car = decodeURIComponent(item[1]);
  });

  // body.addEventListener("load", set_car_info_on_pop_info());


function set_car_info_on_pop_info(){
  if (car=="gli"){
    document.getElementById('car_company').innerHTML=car1_company;
    document.getElementById('car_model').innerHTML=car1_name;
    document.getElementById('car_year').innerHTML=car1_year;
    document.getElementById('car_suplier').innerHTML=car1_dist;
    document.getElementById('car_price').innerHTML=car1_price;
    document.getElementById('car_3').src="Resources/img/cars/gli/gli_3.jpg";
    document.getElementById('car_2').src="Resources/img/cars/gli/gli_2.jpg";
    document.getElementById('car_1').src="Resources/img/cars/gli/gli_1.jpg";
  }
  else if (car=='civic'){
    document.getElementById('car_company').innerHTML=car2_company;
    document.getElementById('car_model').innerHTML=car2_name;
    document.getElementById('car_year').innerHTML=car2_year;
    document.getElementById('car_suplier').innerHTML=car2_dist;
    document.getElementById('car_price').innerHTML=car2_price;
    document.getElementById('car_3').src="Resources/img/cars/civic/civic_3.jpeg";
    document.getElementById('car_2').src="Resources/img/cars/civic/civic_2.jpg";
    document.getElementById('car_1').src="Resources/img/cars/civic/civic_1.jpg";
  }
  else if(car=='city'){
    document.getElementById('car_company').innerHTML=car3_company;
    document.getElementById('car_model').innerHTML=car3_name;
    document.getElementById('car_year').innerHTML=car3_year;
    document.getElementById('car_suplier').innerHTML=car3_dist;
    document.getElementById('car_price').innerHTML=car3_price;
    document.getElementById('car_3').src="Resources/img/cars/city/city_3.jpg";
    document.getElementById('car_2').src="Resources/img/cars/city/city_2.jpg";
    document.getElementById('car_1').src="Resources/img/cars/city/city_1.jpg";
  }
  else if (car=='grandy'){
    document.getElementById('car_company').innerHTML=car4_company;
    document.getElementById('car_model').innerHTML=car4_name;
    document.getElementById('car_year').innerHTML=car4_year;
    document.getElementById('car_suplier').innerHTML=car4_dist;
    document.getElementById('car_price').innerHTML=car4_price;
    document.getElementById('car_3').src="Resources/img/cars/grandy/grandy_3.jpg";
    document.getElementById('car_2').src="Resources/img/cars/grandy/grandy_2.jpg";
    document.getElementById('car_1').src="Resources/img/cars/grandy/grandy_1.jpg";
  }
  else if (car=='x7'){
    document.getElementById('car_company').innerHTML=car5_company;
    document.getElementById('car_model').innerHTML=car5_name;
    document.getElementById('car_year').innerHTML=car5_year;
    document.getElementById('car_suplier').innerHTML=car5_dist;
    document.getElementById('car_price').innerHTML=car5_price;
    document.getElementById('car_3').src="Resources/img/cars/bmw/x7_3.jpg";
    document.getElementById('car_2').src="Resources/img/cars/bmw/x7_2.jpg";
    document.getElementById('car_1').src="Resources/img/cars/bmw/x7_1.jpg";
  }
  else if (car=='accord'){
    document.getElementById('car_company').innerHTML=car6_company;
    document.getElementById('car_model').innerHTML=car6_name;
    document.getElementById('car_year').innerHTML=car6_year;
    document.getElementById('car_suplier').innerHTML=car6_dist;
    document.getElementById('car_price').innerHTML=car6_price;
    document.getElementById('car_3').src="Resources/img/cars/accord/accord_3.jpg";
    document.getElementById('car_2').src="Resources/img/cars/accord/accord_2.jpg";
    document.getElementById('car_1').src="Resources/img/cars/accord/accord_1.jpg";
  }
  else if (car=='fortuner'){
    document.getElementById('car_company').innerHTML=car7_company;
    document.getElementById('car_model').innerHTML=car7_name;
    document.getElementById('car_year').innerHTML=car7_year;
    document.getElementById('car_suplier').innerHTML=car7_dist;
    document.getElementById('car_price').innerHTML=car7_price;
    document.getElementById('car_3').src="Resources/img/cars/fortuner/fortuner_3.jpg";
    document.getElementById('car_2').src="Resources/img/cars/fortuner/fortuner_2.jpg";
    document.getElementById('car_1').src="Resources/img/cars/fortuner/fortuner_1.jpg";
  }
  else if (car=='civic_2015'){
    document.getElementById('car_company').innerHTML=car8_company;
    document.getElementById('car_model').innerHTML=car8_name;
    document.getElementById('car_year').innerHTML=car8_year;
    document.getElementById('car_suplier').innerHTML=car8_dist;
    document.getElementById('car_price').innerHTML=car8_price;
    document.getElementById('car_3').src="Resources/img/cars/civic2015/civic_2015_3.jpg";
    document.getElementById('car_2').src="Resources/img/cars/civic2015/civic_2015_2.jpg";
    document.getElementById('car_1').src="Resources/img/cars/civic2015/civic_2015_1.jpg";
  }
  else if (car=='ciaz'){
    document.getElementById('car_company').innerHTML=car9_company;
    document.getElementById('car_model').innerHTML=car9_name;
    document.getElementById('car_year').innerHTML=car9_year;
    document.getElementById('car_suplier').innerHTML=car9_dist;
    document.getElementById('car_price').innerHTML=car9_price;
    document.getElementById('car_3').src="Resources/img/cars/suzuki/ciaz_3.jpg";
    document.getElementById('car_2').src="Resources/img/cars/suzuki/ciaz_2.jpg";
    document.getElementById('car_1').src="Resources/img/cars/suzuki/ciaz_1.jpg";
  }
  else if (car=='xli'){
    document.getElementById('car_company').innerHTML=car10_company;
    document.getElementById('car_model').innerHTML=car10_name;
    document.getElementById('car_year').innerHTML=car10_year;
    document.getElementById('car_suplier').innerHTML=car10_dist;
    document.getElementById('car_price').innerHTML=car10_price;
    document.getElementById('car_3').src="Resources/img/cars/xli/xli_3.jpg";
    document.getElementById('car_2').src="Resources/img/cars/xli/xli_2.jpg";
    document.getElementById('car_1').src="Resources/img/cars/xli/xli_1.jpg";
  }
  else {
    alert("Car information unavailable!");
  }
}
