// var car1 = ['Toyota', 'GLI', '2019', 'Easy Cars', '4000']
// var car2 = ['Honda', 'Civic', '2019', 'Alex Cars', '6000']
// var car3 = ['Honda', 'City', '2019', 'Trans Auto', '5000']
// var car4 = ['Toyota', 'Grandy', '2017', 'Trans Auto', '9500']
// var car5 = ['BMW', 'X7', '2019', 'Alex Cars', '4000']
// var car6 = ['Honda', 'Accord', '2012', 'Alex Cars', '7000']
// var car7 = ['Toyota', 'Fortuner', '2018', 'Alex Cars', '4000']
// var car8 = ['Honda', 'Civic', '2015', 'Trans Auto', '8000']
// var car9 = ['Suzuki', 'Ciaz', '2018', 'Alex Cars', '6000']
// var car10 = ['Toyota', 'XLI', '2019', 'Trans Auto', '4500']
//
// var all_cars = [['Toyota', 'GLI', '2019', 'Easy Cars', '4000'],
//                 ['Honda', 'Civic', '2019', 'Alex Cars', '6000'],
//                 ['Honda', 'City', '2019', 'Trans Auto', '5000'],
//                 ['Toyota', 'Grandy', '2017', 'Trans Auto', '9500'],
//                 ['BMW', 'X7', '2019', 'Alex Cars', '4000'],
//                 ['Honda', 'Accord', '2012', 'Alex Cars', '7000'],
//                 ['Toyota', 'Fortuner', '2018', 'Alex Cars', '4000'],
//                 ['Honda', 'Civic', '2015', 'Trans Auto', '8000'],
//                 ['Suzuki', 'Ciaz', '2018', 'Alex Cars', '6000'],
//                 ['Toyota', 'XLI', '2019', 'Trans Auto', '4500']]


    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if(xhr.readyState==4 && xhr.status==200)
      {
        var javobj=JSON.parse(xhr.response);
      }
    };
    xhr.open("GET", "https://github.com/srikanthshileshpasam/caradvertsweb.github.io/blob/master/data/car_data.json", true);
    xhr.send();



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


function cars_display(){
  document.getElementById('car-pic-1').src="Resources/img/cars/gli/gli_1.jpg";
  document.getElementById('car-pic-2').src="Resources/img/cars/civic/civic_1.jpg";
  document.getElementById('car-pic-3').src="Resources/img/cars/city/city_1.jpg";
  document.getElementById('car-pic-4').src="Resources/img/cars/grandy/grandy_1.jpg";
  document.getElementById('car-pic-5').src="Resources/img/cars/bmw/x7_1.jpg";
  document.getElementById('car-pic-6').src="Resources/img/cars/accord/accord_1.jpg";
  document.getElementById('car-pic-7').src="Resources/img/cars/fortuner/fortuner_1.jpg";
  document.getElementById('car-pic-8').src="Resources/img/cars/civic2015/civic_2015_1.jpg";
  document.getElementById('car-pic-9').src="Resources/img/cars/suzuki/ciaz_1.jpg";
  document.getElementById('car-pic-10').src="Resources/img/cars/xli/xli_1.jpg";
}

let i=0;
while(i<=9){
    let j=1;
    while(j<=4){
      document.getElementById("car1_model").innerHTML=xhr.car1;
      j++;
      document.getElementById('car1_year').innerHTML=all_cars[i][j];
      j++;
      document.getElementById('car1_distributor').innerHTML=all_cars[i][j];
      j++;
      document.getElementById('car1_price').innerHTML=all_cars[i][j];
      j++;
     }
     i++;

      j=1;
     while(j<=4){
       document.getElementById("car2_model").innerHTML=all_cars[i][j];
       j++;
       document.getElementById('car2_year').innerHTML=all_cars[i][j];
       j++;
       document.getElementById('car2_distributor').innerHTML=all_cars[i][j];
       j++;
       document.getElementById('car2_price').innerHTML=all_cars[i][j];
       j++;
      }
      i++;

      j=1;
     while(j<=4){
       document.getElementById("car3_model").innerHTML=all_cars[i][j];
       j++;
       document.getElementById('car3_year').innerHTML=all_cars[i][j];
       j++;
       document.getElementById('car3_distributor').innerHTML=all_cars[i][j];
       j++;
       document.getElementById('car3_price').innerHTML=all_cars[i][j];
       j++;
      }
      i++;

      j=1;
     while(j<=4){
       document.getElementById("car4_model").innerHTML=all_cars[i][j];
       j++;
       document.getElementById('car4_year').innerHTML=all_cars[i][j];
       j++;
       document.getElementById('car4_distributor').innerHTML=all_cars[i][j];
       j++;
       document.getElementById('car4_price').innerHTML=all_cars[i][j];
       j++;
      }
      i++;

      j=1;
     while(j<=4){
       document.getElementById("car5_model").innerHTML=all_cars[i][j];
       j++;
       document.getElementById('car5_year').innerHTML=all_cars[i][j];
       j++;
       document.getElementById('car5_distributor').innerHTML=all_cars[i][j];
       j++;
       document.getElementById('car5_price').innerHTML=all_cars[i][j];
       j++;
      }
      i++;

      j=1;
     while(j<=4){
       document.getElementById("car6_model").innerHTML=all_cars[i][j];
       j++;
       document.getElementById('car6_year').innerHTML=all_cars[i][j];
       j++;
       document.getElementById('car6_distributor').innerHTML=all_cars[i][j];
       j++;
       document.getElementById('car6_price').innerHTML=all_cars[i][j];
       j++;
      }
      i++;

      j=1;
     while(j<=4){
       document.getElementById("car7_model").innerHTML=all_cars[i][j];
       j++;
       document.getElementById('car7_year').innerHTML=all_cars[i][j];
       j++;
       document.getElementById('car7_distributor').innerHTML=all_cars[i][j];
       j++;
       document.getElementById('car7_price').innerHTML=all_cars[i][j];
       j++;
      }
      i++;

      j=1;
     while(j<=4){
       document.getElementById("car8_model").innerHTML=all_cars[i][j];
       j++;
       document.getElementById('car8_year').innerHTML=all_cars[i][j];
       j++;
       document.getElementById('car8_distributor').innerHTML=all_cars[i][j];
       j++;
       document.getElementById('car8_price').innerHTML=all_cars[i][j];
       j++;
      }
      i++;

      j=1;
     while(j<=4){
       document.getElementById("car9_model").innerHTML=all_cars[i][j];
       j++;
       document.getElementById('car9_year').innerHTML=all_cars[i][j];
       j++;
       document.getElementById('car9_distributor').innerHTML=all_cars[i][j];
       j++;
       document.getElementById('car9_price').innerHTML=all_cars[i][j];
       j++;
      }
      i++;

      j=1;
     while(j<=4){
       document.getElementById("car10_model").innerHTML=all_cars[i][j];
       j++;
       document.getElementById('car10_year').innerHTML=all_cars[i][j];
       j++;
       document.getElementById('car10_distributor').innerHTML=all_cars[i][j];
       j++;
       document.getElementById('car10_price').innerHTML=all_cars[i][j];
       j++;
      }
      i++;
}


function set_car_info_on_pop_info(){
  if (car=='gli'){
    document.getElementById('car_company').innerHTML=car1[0];
    document.getElementById('car_model').innerHTML=car1[1];
    document.getElementById('car_year').innerHTML=car1[2];
    document.getElementById('car_distributor').innerHTML=car1[3];
    document.getElementById('car_price').innerHTML=car1[4];
    document.getElementById('car-pic-1').src="Resources/img/cars/gli/gli_1.jpg";
    document.getElementById('car-pic-2').src="Resources/img/cars/gli/gli_2.jpg";
    document.getElementById('car-pic-3').src="Resources/img/cars/gli/gli_3.jpg";
    document.getElementById('car-pic-4').src="Resources/img/cars/gli/gli_4.jpg";
    document.getElementById('car-pic-5').src="Resources/img/cars/gli/gli_5.png";
    document.getElementById('car-pic-6').src="Resources/img/cars/gli/gli_6.jpg";
  }
  else if (car=='civic'){
    document.getElementById('car_company').innerHTML=car2[0];
    document.getElementById('car_model').innerHTML=car2[1];
    document.getElementById('car_year').innerHTML=car2[2];
    document.getElementById('car_distributor').innerHTML=car2[3];
    document.getElementById('car_price').innerHTML=car2[4];
    document.getElementById('car-pic-3').src="Resources/img/cars/civic/civic_3.jpeg";
    document.getElementById('car-pic-2').src="Resources/img/cars/civic/civic_2.jpg";
    document.getElementById('car-pic-1').src="Resources/img/cars/civic/civic_1.jpg";
  }
  else if (car=='city'){
    document.getElementById('car_company').innerHTML=car3[0];
    document.getElementById('car_model').innerHTML=car3[1];
    document.getElementById('car_year').innerHTML=car3[2];
    document.getElementById('car_distributor').innerHTML=car3[3];
    document.getElementById('car_price').innerHTML=car3[4];
    document.getElementById('car-pic-3').src="Resources/img/cars/city/city_3.jpg";
    document.getElementById('car-pic-2').src="Resources/img/cars/city/city_2.jpg";
    document.getElementById('car-pic-1').src="Resources/img/cars/city/city_1.jpg";
  }
  else if (car=='grandy'){
    document.getElementById('car_company').innerHTML=car4[0];
    document.getElementById('car_model').innerHTML=car4[1];
    document.getElementById('car_year').innerHTML=car4[2];
    document.getElementById('car_distributor').innerHTML=car4[3];
    document.getElementById('car_price').innerHTML=car4[4];
    document.getElementById('car-pic-3').src="Resources/img/cars/grandy/grandy_3.jpg";
    document.getElementById('car-pic-2').src="Resources/img/cars/grandy/grandy_2.jpg";
    document.getElementById('car-pic-1').src="Resources/img/cars/grandy/grandy_1.jpg";
  }
  else if (car=='x7'){
    document.getElementById('car_company').innerHTML=car5[0];
    document.getElementById('car_model').innerHTML=car5[1];
    document.getElementById('car_year').innerHTML=car5[2];
    document.getElementById('car_distributor').innerHTML=car5[3];
    document.getElementById('car_price').innerHTML=car5[4];
    document.getElementById('car-pic-3').src="Resources/img/cars/bmw/x7_3.jpg";
    document.getElementById('car-pic-2').src="Resources/img/cars/bmw/x7_2.jpg";
    document.getElementById('car-pic-1').src="Resources/img/cars/bmw/x7_1.jpg";
  }
  else if (car=='accord'){
    document.getElementById('car_company').innerHTML=car6[0];
    document.getElementById('car_model').innerHTML=car6[1];
    document.getElementById('car_year').innerHTML=car6[2];
    document.getElementById('car_distributor').innerHTML=car6[3];
    document.getElementById('car_price').innerHTML=car6[4];
    document.getElementById('car-pic-3').src="Resources/img/cars/accord/accord_3.jpg";
    document.getElementById('car-pic-2').src="Resources/img/cars/accord/accord_2.jpg";
    document.getElementById('car-pic-1').src="Resources/img/cars/accord/accord_1.jpg";
  }
  else if (car=='fortuner'){
    document.getElementById('car_company').innerHTML=car7[0];
    document.getElementById('car_model').innerHTML=car7[1];
    document.getElementById('car_year').innerHTML=car7[2];
    document.getElementById('car_distributor').innerHTML=car7[3];
    document.getElementById('car_price').innerHTML=car7[4];
    document.getElementById('car-pic-3').src="Resources/img/cars/fortuner/fortuner_3.jpg";
    document.getElementById('car-pic-2').src="Resources/img/cars/fortuner/fortuner_2.jpg";
    document.getElementById('car-pic-1').src="Resources/img/cars/fortuner/fortuner_1.jpg";
  }
  else if (car=='civic_2015'){
    document.getElementById('car_company').innerHTML=car8[0];
    document.getElementById('car_model').innerHTML=car8[1];
    document.getElementById('car_year').innerHTML=car8[2];
    document.getElementById('car_distributor').innerHTML=car8[3];
    document.getElementById('car_price').innerHTML=car8[4];
    document.getElementById('car-pic-3').src="Resources/img/cars/civic2015/civic_2015_3.jpg";
    document.getElementById('car-pic-2').src="Resources/img/cars/civic2015/civic_2015_2.jpg";
    document.getElementById('car-pic-1').src="Resources/img/cars/civic2015/civic_2015_1.jpg";
  }
  else if (car=='ciaz'){
    document.getElementById('car_company').innerHTML=car9[0];
    document.getElementById('car_model').innerHTML=car9[1];
    document.getElementById('car_year').innerHTML=car9[2];
    document.getElementById('car_distributor').innerHTML=car9[3];
    document.getElementById('car_price').innerHTML=car9[4];
    document.getElementById('car-pic-3').src="Resources/img/cars/suzuki/ciaz_3.jpg";
    document.getElementById('car-pic-2').src="Resources/img/cars/suzuki/ciaz_2.jpg";
    document.getElementById('car-pic-1').src="Resources/img/cars/suzuki/ciaz_1.jpg";
  }
  else if (car=='xli'){
    document.getElementById('car_company').innerHTML=car10[0];
    document.getElementById('car_model').innerHTML=car10[1];
    document.getElementById('car_year').innerHTML=car10[2];
    document.getElementById('car_distributor').innerHTML=car10[3];
    document.getElementById('car_price').innerHTML=car10[4];
    document.getElementById('car-pic-3').src="Resources/img/cars/xli/xli_3.jpg";
    document.getElementById('car-pic-2').src="Resources/img/cars/xli/xli_2.jpg";
    document.getElementById('car-pic-1').src="Resources/img/cars/xli/xli_1.jpg";
  }
   else {
     alert("Car information unavailable!");
   }
}
