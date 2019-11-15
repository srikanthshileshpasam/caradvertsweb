var all_cars = [['Audi', 'R8', '2019', 'Easy Cars', '40000'],
                ['Buggati', 'Chiron', '2019', 'Alex Cars', '60000'],
                ['Ferrari', 'F12', '2019', 'Trans Auto', '50000'],
                ['Ford', 'GT', '2017', 'Trans Auto', '65000'],
                ['Mclaren', 'P1', '2019', 'Alex Cars', '40000'],
                ['Mercedes', 'AMG', '2012', 'Alex Cars', '70000'],
                ['Ford', 'Mustang', '2018', 'Alex Cars', '40000'],
                ['Porsche', 'Spyder', '2015', 'Trans Auto', '80000'],
                ['Porsche', 'Cayman', '2018', 'Alex Cars', '60000'],
                ['Lamborghini', 'Veneno', '2019', 'Trans Auto', '45000']]

function sign_in(){
  alert(`This page will lead to the sign in section in the future!`)
}

function start(){

  document.getElementById('car-pic-1').src="Resources/img/cars/audi/car_1.jpg";
  document.getElementById('car-pic-2').src="Resources/img/cars/buggati/car_1.jpg";
  document.getElementById('car-pic-3').src="Resources/img/cars/ferrari/car_1.jpg";
  document.getElementById('car-pic-4').src="Resources/img/cars/ford/car_1.jpg";
  document.getElementById('car-pic-5').src="Resources/img/cars/mclaren/car_1.jpg";
  document.getElementById('car-pic-6').src="Resources/img/cars/mercedes/car_1.jpg";
  document.getElementById('car-pic-7').src="Resources/img/cars/mustang/car_1.jpg";
  document.getElementById('car-pic-8').src="Resources/img/cars/porsche/car_1.jpg";
  document.getElementById('car-pic-9').src="Resources/img/cars/porsche911/car_1.jpg";
  document.getElementById('car-pic-10').src="Resources/img/cars/veneno/car_1.jpg";


let i=0;
while(i<=9){
    let j=1;
    while(j<=4){
      document.getElementById('car1_model').innerHTML=all_cars[i][j];
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
}


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
  if (car=='car1'){
    document.getElementById('car_company').innerHTML=all_cars[0][0];
    document.getElementById('car_model').innerHTML=all_cars[0][1];
    document.getElementById('car_year').innerHTML=all_cars[0][2];
    document.getElementById('car_distributor').innerHTML=all_cars[0][3];
    document.getElementById('car_price').innerHTML=all_cars[0][4];
    document.getElementById('car-pic-1').src="Resources/img/cars/audi/car_1.jpg";
    document.getElementById('car-pic-2').src="Resources/img/cars/audi/car_2.jpg";
    document.getElementById('car-pic-3').src="Resources/img/cars/audi/car_3.jpg";
    document.getElementById('car-pic-4').src="Resources/img/cars/audi/car_4.jpg";
    document.getElementById('car-pic-5').src="Resources/img/cars/audi/car_5.png";
  }
  else if (car=='car2'){
    document.getElementById('car_company').innerHTML=all_cars[1][0];
    document.getElementById('car_model').innerHTML=all_cars[1][1];
    document.getElementById('car_year').innerHTML=all_cars[1][2];
    document.getElementById('car_distributor').innerHTML=all_cars[1][3];
    document.getElementById('car_price').innerHTML=all_cars[1][4];
    document.getElementById('car-pic-3').src="Resources/img/cars/buggati/car_3.jpeg";
    document.getElementById('car-pic-2').src="Resources/img/cars/buggati/car_2.jpg";
    document.getElementById('car-pic-1').src="Resources/img/cars/buggati/car_1.jpg";
  }
  else if (car=='car3'){
    document.getElementById('car_company').innerHTML=all_cars[2][0];
    document.getElementById('car_model').innerHTML=all_cars[2][1];
    document.getElementById('car_year').innerHTML=all_cars[2][2];
    document.getElementById('car_distributor').innerHTML=all_cars[2][3];
    document.getElementById('car_price').innerHTML=all_cars[2][4];
    document.getElementById('car-pic-3').src="Resources/img/cars/ferrari/car_3.jpg";
    document.getElementById('car-pic-2').src="Resources/img/cars/ferrari/car_2.jpg";
    document.getElementById('car-pic-1').src="Resources/img/cars/ferrari/car_1.jpg";
  }
  else if (car=='car4'){
    document.getElementById('car_company').innerHTML=all_cars[3][0];
    document.getElementById('car_model').innerHTML=all_cars[3][1];
    document.getElementById('car_year').innerHTML=all_cars[3][2];
    document.getElementById('car_distributor').innerHTML=all_cars[3][3];
    document.getElementById('car_price').innerHTML=all_cars[3][4];
    document.getElementById('car-pic-3').src="Resources/img/cars/ford/car_3.jpg";
    document.getElementById('car-pic-2').src="Resources/img/cars/ford/car_2.jpg";
    document.getElementById('car-pic-1').src="Resources/img/cars/ford/car_1.jpg";
  }
  else if (car=='car5'){
    document.getElementById('car_company').innerHTML=all_cars[4][0];
    document.getElementById('car_model').innerHTML=all_cars[4][1];
    document.getElementById('car_year').innerHTML=all_cars[4][2];
    document.getElementById('car_distributor').innerHTML=all_cars[4][3];
    document.getElementById('car_price').innerHTML=all_cars[4][4];
    document.getElementById('car-pic-3').src="Resources/img/cars/mclaren/car_3.jpg";
    document.getElementById('car-pic-2').src="Resources/img/cars/mclaren/car_2.jpg";
    document.getElementById('car-pic-1').src="Resources/img/cars/mclaren/car_1.jpg";
  }
  else if (car=='car6'){
    document.getElementById('car_company').innerHTML=all_cars[5][0];
    document.getElementById('car_model').innerHTML=all_cars[5][1];
    document.getElementById('car_year').innerHTML=all_cars[5][2];
    document.getElementById('car_distributor').innerHTML=all_cars[5][3];
    document.getElementById('car_price').innerHTML=all_cars[5][4];
    document.getElementById('car-pic-3').src="Resources/img/cars/mercedes/car_3.jpg";
    document.getElementById('car-pic-2').src="Resources/img/cars/mercedes/car_2.jpg";
    document.getElementById('car-pic-1').src="Resources/img/cars/mercedes/car_1.jpg";
  }
  else if (car=='car7'){
    document.getElementById('car_company').innerHTML=all_cars[6][0];
    document.getElementById('car_model').innerHTML=all_cars[6][1];
    document.getElementById('car_year').innerHTML=all_cars[6][2];
    document.getElementById('car_distributor').innerHTML=all_cars[6][3];
    document.getElementById('car_price').innerHTML=all_cars[6][4];
    document.getElementById('car-pic-3').src="Resources/img/cars/mustang/car_3.jpg";
    document.getElementById('car-pic-2').src="Resources/img/cars/mustang/car_2.jpg";
    document.getElementById('car-pic-1').src="Resources/img/cars/mustang/car_1.jpg";
  }
  else if (car=='car8'){
    document.getElementById('car_company').innerHTML=all_cars[7][0];
    document.getElementById('car_model').innerHTML=all_cars[7][1];
    document.getElementById('car_year').innerHTML=all_cars[7][2];
    document.getElementById('car_distributor').innerHTML=all_cars[7][3];
    document.getElementById('car_price').innerHTML=all_cars[7][4];
    document.getElementById('car-pic-3').src="Resources/img/cars/porsche/car_3.jpg";
    document.getElementById('car-pic-2').src="Resources/img/cars/porsche/car_2.jpg";
    document.getElementById('car-pic-1').src="Resources/img/cars/porsche/car_1.jpg";
  }
  else if (car=='car9'){
    document.getElementById('car_company').innerHTML=all_cars[8][0];
    document.getElementById('car_model').innerHTML=all_cars[8][1];
    document.getElementById('car_year').innerHTML=all_cars[8][2];
    document.getElementById('car_distributor').innerHTML=all_cars[8][3];
    document.getElementById('car_price').innerHTML=all_cars[8][4];
    document.getElementById('car-pic-3').src="Resources/img/cars/porsche911/car_3.jpg";
    document.getElementById('car-pic-2').src="Resources/img/cars/porsche911/car_2.jpg";
    document.getElementById('car-pic-1').src="Resources/img/cars/porsche911/car_1.jpg";
  }
  else if (car=='car10'){
    document.getElementById('car_company').innerHTML=all_cars[9][0];
    document.getElementById('car_model').innerHTML=all_cars[9][1];
    document.getElementById('car_year').innerHTML=all_cars[9][2];
    document.getElementById('car_distributor').innerHTML=all_cars[9][3];
    document.getElementById('car_price').innerHTML=all_cars[9][4];
    document.getElementById('car-pic-1').src="Resources/img/cars/veneno/car_1.jpg";
    document.getElementById('car-pic-2').src="Resources/img/cars/veneno/car_2.jpg";
    document.getElementById('car-pic-3').src="Resources/img/cars/veneno/car_3.jpg";
  }
   else {
     alert("Car information unavailable!");
   }
}
