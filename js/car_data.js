var car1 = ['Toyota', 'GLI', '2019', 'Easy Cars', '4000']
var car2 = ['Honda', 'Civic', '2019', 'Alex Cars', '6000']
var car3 = ['Honda', 'City', '2019', 'Trans Auto', '5000']
var car4 = ['Toyota', 'Grandy', '2017', 'Trans Auto', '9500']
var car5 = ['BMW', 'X7', '2019', 'Alex Cars', '4000']
var car6 = ['Honda', 'Accord', '2012', 'Alex Cars', '7000']
var car7 = ['Toyota', 'Fortuner', '2018', 'Alex Cars', '4000']
var car8 = ['Honda', 'Civic', '2015', 'Trans Auto', '8000']
var car9 = ['Suzuki', 'Ciaz', '2018', 'Alex Cars', '6000']
var car10 = ['Toyota', 'XLI', '2019', 'Trans Auto', '4500']

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


function set_car_info_on_pop_info(){
  if (car=="gli"){
    document.getElementById('car_company').innerHTML=car1[0];
    document.getElementById('car_model').innerHTML=car1[1];
    document.getElementById('car_year').innerHTML=car1[2];
    document.getElementById('car_suplier').innerHTML=car1[3];
    document.getElementById('car_price').innerHTML=car1[4];
    document.getElementById('car_1').src="Resources/img/cars/gli/gli_1.jpg";
    document.getElementById('car_2').src="Resources/img/cars/gli/gli_2.jpg";
    document.getElementById('car_3').src="Resources/img/cars/gli/gli_3.jpg";
    document.getElementById('car_4').src="Resources/img/cars/gli/gli_4.jpg";
    document.getElementById('car_5').src="Resources/img/cars/gli/gli_5.png";
    document.getElementById('car_6').src="Resources/img/cars/gli/gli_6.jpg";
  }
  else if (car=='civic'){
    document.getElementById('car_company').innerHTML=car2[0];
    document.getElementById('car_model').innerHTML=car2[1];
    document.getElementById('car_year').innerHTML=car2[2];
    document.getElementById('car_suplier').innerHTML=car2[3];
    document.getElementById('car_price').innerHTML=car2[4];
    document.getElementsById('car_3').src="Resources/img/cars/civic/civic_3.jpeg";
    document.getElementsById('car_2').src="Resources/img/cars/civic/civic_2.jpg";
    document.getElementsById('car_1').src="Resources/img/cars/civic/civic_1.jpg";
  }
  else if (car=='city'){
    document.getElementById('car_company').innerHTML=car3[0];
    document.getElementById('car_model').innerHTML=car3[1];
    document.getElementById('car_year').innerHTML=car3[2];
    document.getElementById('car_suplier').innerHTML=car3[3];
    document.getElementById('car_price').innerHTML=car3[4];
    document.getElementById('car_3').src="Resources/img/cars/city/city_3.jpg";
    document.getElementById('car_2').src="Resources/img/cars/city/city_2.jpg";
    document.getElementById('car_1').src="Resources/img/cars/city/city_1.jpg";
  }
  else if (car=='grandy'){
    document.getElementById('car_company').innerHTML=car4[0];
    document.getElementById('car_model').innerHTML=car4[1];
    document.getElementById('car_year').innerHTML=car4[2];
    document.getElementById('car_suplier').innerHTML=car4[3];
    document.getElementById('car_price').innerHTML=car4[4];
    document.getElementById('car_3').src="Resources/img/cars/grandy/grandy_3.jpg";
    document.getElementById('car_2').src="Resources/img/cars/grandy/grandy_2.jpg";
    document.getElementById('car_1').src="Resources/img/cars/grandy/grandy_1.jpg";
  }
  else if (car=='x7'){
    document.getElementById('car_company').innerHTML=car5[0];
    document.getElementById('car_model').innerHTML=car5[1];
    document.getElementById('car_year').innerHTML=car5[2];
    document.getElementById('car_suplier').innerHTML=car5[3];
    document.getElementById('car_price').innerHTML=car5[4];
    document.getElementById('car_3').src="Resources/img/cars/bmw/x7_3.jpg";
    document.getElementById('car_2').src="Resources/img/cars/bmw/x7_2.jpg";
    document.getElementById('car_1').src="Resources/img/cars/bmw/x7_1.jpg";
  }
  else if (car=='accord'){
    document.getElementById('car_company').innerHTML=car6[0];
    document.getElementById('car_model').innerHTML=car6[1];
    document.getElementById('car_year').innerHTML=car6[2];
    document.getElementById('car_suplier').innerHTML=car6[3];
    document.getElementById('car_price').innerHTML=car6[4];
    document.getElementById('car_3').src="Resources/img/cars/accord/accord_3.jpg";
    document.getElementById('car_2').src="Resources/img/cars/accord/accord_2.jpg";
    document.getElementById('car_1').src="Resources/img/cars/accord/accord_1.jpg";
  }
  else if (car=='fortuner'){
    document.getElementById('car_company').innerHTML=car7[0];
    document.getElementById('car_model').innerHTML=car7[1];
    document.getElementById('car_year').innerHTML=car7[2];
    document.getElementById('car_suplier').innerHTML=car7[3];
    document.getElementById('car_price').innerHTML=car7[4];
    document.getElementById('car_3').src="Resources/img/cars/fortuner/fortuner_3.jpg";
    document.getElementById('car_2').src="Resources/img/cars/fortuner/fortuner_2.jpg";
    document.getElementById('car_1').src="Resources/img/cars/fortuner/fortuner_1.jpg";
  }
  else if (car=='civic_2015'){
    document.getElementById('car_company').innerHTML=car8[0];
    document.getElementById('car_model').innerHTML=car8[1];
    document.getElementById('car_year').innerHTML=car8[2];
    document.getElementById('car_suplier').innerHTML=car8[3];
    document.getElementById('car_price').innerHTML=car8[4];
    document.getElementById('car_3').src="Resources/img/cars/civic2015/civic_2015_3.jpg";
    document.getElementById('car_2').src="Resources/img/cars/civic2015/civic_2015_2.jpg";
    document.getElementById('car_1').src="Resources/img/cars/civic2015/civic_2015_1.jpg";
  }
  else if (car=='ciaz'){
    document.getElementById('car_company').innerHTML=car9[0];
    document.getElementById('car_model').innerHTML=car9[1];
    document.getElementById('car_year').innerHTML=car9[2];
    document.getElementById('car_suplier').innerHTML=car9[3];
    document.getElementById('car_price').innerHTML=car9[4];
    document.getElementById('car_3').src="Resources/img/cars/suzuki/ciaz_3.jpg";
    document.getElementById('car_2').src="Resources/img/cars/suzuki/ciaz_2.jpg";
    document.getElementById('car_1').src="Resources/img/cars/suzuki/ciaz_1.jpg";
  }
  else if (car=='xli'){
    document.getElementById('car_company').innerHTML=car10[0];
    document.getElementById('car_model').innerHTML=car10[1];
    document.getElementById('car_year').innerHTML=car10[2];
    document.getElementById('car_suplier').innerHTML=car10[3];
    document.getElementById('car_price').innerHTML=car10[4];
    document.getElementById('car_3').src="Resources/img/cars/xli/xli_3.jpg";
    document.getElementById('car_2').src="Resources/img/cars/xli/xli_2.jpg";
    document.getElementById('car_1').src="Resources/img/cars/xli/xli_1.jpg";
  }
   else {
     alert("Car information unavailable!");
   }
}
