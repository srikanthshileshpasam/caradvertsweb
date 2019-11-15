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

var car1_d = "The Audi R8 is a mid-engine, 2-seater sports car, which uses Audi's trademark quattro permanent all-wheel drive system. It was introduced by the German car manufacturer Audi AG in 2006. The car is exclusively designed, developed, and manufactured by Audi AG's private subsidiary company manufacturing high performance automotive parts, Audi Sport GmbH (formerly quattro GmbH), and is based on the Lamborghini Gallardo and presently the Huracán platform. The fundamental construction of the R8 is based on the Audi Space Frame, and uses an aluminium monocoque which is built using space frame principles. The car is built by Audi Sport GmbH in a newly renovated factory at Audi's 'aluminium site' at Neckarsulm in Germany."

var car2_d= "The Bugatti Chiron is a mid-engine two-seater sports car developed and manufactured in Molsheim, France by French automobile manufacturer Bugatti Automobiles S.A.S. as the successor to the Bugatti Veyron.[6] The Chiron was first shown at the Geneva Motor Show on 1 March 2016. The car is based on the Bugatti Vision Gran Turismo concept car. The car is named after the Monegasque driver Louis Chiron. The car shares the name with the 1999 Bugatti 18/3 Chiron concept car."

var car3_d= "The Ferrari F12berlinetta (also unofficially referred to as the F12 Berlinetta or the F12, and unofficially stylized as the F12B for short)(Type F152) is a front mid-engine, rear-wheel-drive grand tourer produced by Italian automobile manufacturer Ferrari. The F12berlinetta debuted at the 2012 Geneva Motor Show, and replaces the 599 grand tourer. The naturally aspirated 6.3 litre Ferrari V12 engine used in the F12berlinetta has won the 2013 International Engine of the Year Award in the Best Performance category and Best Engine above 4.0 litres. The F12berlinetta was named 'The Supercar of the Year 2012' by car magazine Top Gear. The F12berlinetta was replaced by the 812 Superfast in 2017. In 2014, the F12berlinetta was awarded the XXIII Premio Compasso d'oro ADI. Accepting the award was Ferrari’s Senior Vice President of Design, Flavio Manzoni."

var car4_d = "The Ford GT is an American mid-engine two-seater sports car manufactured and marketed by Ford for model year 2005 in conjunction with the company's 2003 centenary. The second generation Ford GT became available for the 2017 model year. The GT recalls Ford's historically significant GT40, a consecutive four-time winner of the 24 Hours of Le Mans (1966–1969), including a 1-2-3 finish in 1966."

var car5_d = "The McLaren P1 is a limited-production plug-in hybrid sports car produced by British automobile manufacturer McLaren Automotive. Debuted at the 2012 Paris Motor Show, sales of the P1 began in the United Kingdom in October 2013 and all 375 units were sold out by November. Production ended in early December 2015. The United States accounted for 34% of the units and Europe for 26%. It is considered by the automotive press to be the successor to the F1, utilising hybrid power and Formula 1 technology, but does not have the same three-seat layout. It was later confirmed that the Speedtail served as the actual successor to the F1. Like the F1, the P1 has a mid-engine, rear wheel drive design that used a carbon fibre monocoque and roof structure safety cage concept called MonoCage, which is a development of the MonoCell first used in the MP4-12C and then in subsequent models."

var car6_d = "Mercedes-AMG GmbH, commonly known as AMG, is the high-performance division of Mercedes-Benz. AMG independently hires engineers and contracts with manufacturers to customize Mercedes-Benz AMG vehicles. Mercedes-AMG is headquartered in Affalterbach, Baden-Württemberg, Germany. AMG was originally an independent engineering firm specializing in performance improvements for Mercedes-Benz vehicles; DaimlerChrysler AG took a controlling interest in 1999, then became sole owner of AMG in 2005. Mercedes-AMG GmbH is now a wholly owned subsidiary of Daimler AG. AMG models typically have more aggressive looks, a higher level of performance, better handling, better stability and more extensive use of carbon fibre than their regular Mercedes-Benz counterparts. AMG models are typically the most expensive and highest-performing variant of each Mercedes-Benz class."

var car7_d = "The Ford Mustang is an American car manufactured by Ford. It was originally based on the platform of the second generation North American Ford Falcon, a compact car. The original 1962 Ford Mustang I two-seater concept car had evolved into the 1963 Mustang II four-seater concept car which Ford used to pretest how the public would take interest in the first production Mustang. The 1963 Mustang II concept car was designed with a variation of the production model's front and rear ends with a roof that was 2.7 inches shorter. Introduced early on April 17, 1964 (16 days after the Plymouth Barracuda), and thus dubbed as a '1964' by Mustang fans, the 1965 Mustang was the automaker's most successful launch since the Model A. The Mustang has undergone several transformations to its current sixth generation."

var car8_d = "The Porsche 550 was a racing sports car produced by Porsche from 1953 to 1956. In that time only 90 Porsche 550s were produced, but it quickly established dominance in the 1.1- and 1.5- liter classes. The Porsche 550 is a mid-engine car with an air-cooled four-cylinder engine, following the precedent of the 1948 Porsche 356/1 prototype designed by Ferry Porsche.  The mid-engine racing design was further developed with Porsche's 718 model; its advantages led to it becoming the dominant design for top-level racing cars by the mid-1960s. The Porsche 550 has a solid racing history; the first race it entered, the Nurburgring Eifel Race in May 1953, it won. The 550 Spyder would usually finish top 3 in its class. Each Spyder was designed and customized to be raced."

var car9_d = "The Porsche Boxster and Porsche Cayman are mid-engined two-seater sports cars manufactured and marketed by German automobile manufacturer Porsche across four generations — as a 2-door, 2-seater roadster (Boxster) and a 3-door, 2-seater fastback coupé (Cayman). The first generation Boxster was introduced in 1996; the second generation Boxster and the Cayman arrived in late 2005; and the third generation launched in 2012. Since the introduction of the fourth generation in 2016, the two models have been marketed as the Porsche 718 Boxster and Porsche 718 Cayman. The Boxster and Cayman have been manufactured in Stuttgart (Zuffenhausen), Germany (1996–present) as well as Uusikaupunki, Finland by Valmet (1997–2011) and Osnabrück, Germany (2012–present). The nameplate Boxster is a portmanteau of boxer, a reference to its flat or boxer engine, and roadster, a reference to the body style. The nameplate Cayman is an alternative spelling of caiman, a member of the alligator family."

var car10_d = "The Lamborghini Veneno (Spanish pronunciation: [beˈneno]) is a limited production high performance sports car manufactured by Italian automobile manufacturer Lamborghini. Based on the Lamborghini Aventador, the Veneno was developed to celebrate Lamborghini’s 50th anniversary. It was introduced at the 2013 Geneva Motor Show. When introduced, it had a price of US$4,000,000, making it one of the most expensive production cars in the world. The prototype, Car Zero, is finished in Grigio Telesto (medium grey) and includes an Italian flag vinyl on both sides of the car."

function sign_in(){
  alert(`This page will lead to the sign in section in the future!`)
}


function loadJSON(callback) {

var xobj = new XMLHttpRequest();
xobj.overrideMimeType("application/json");
xobj.open('GET', 'data/car_data.json', true);
xobj.onreadystatechange = function () {
if (xobj.readyState == 4 && xobj.status == "200") {

// .open will NOT return a value but simply returns undefined in async mode so use a callback
callback(xobj.responseText);

}
}
xobj.send(null);

}

// Call to function with anonymous callback
loadJSON(function(response) {
// Do Something with the response e.g.
//jsonresponse = JSON.parse(response);

// Assuming json data is wrapped in square brackets as Drew suggests
//console.log(jsonresponse[0].name);

});


function start(){

  document.getElementById('car-pic-1').src="Resources/img/cars/car1/car_1.jpg";
  document.getElementById('car-pic-2').src="Resources/img/cars/car2/car_1.jpg";
  document.getElementById('car-pic-3').src="Resources/img/cars/car3/car_1.jpg";
  document.getElementById('car-pic-4').src="Resources/img/cars/car4/car_1.jpg";
  document.getElementById('car-pic-5').src="Resources/img/cars/car5/car_1.jpg";
  document.getElementById('car-pic-6').src="Resources/img/cars/car6/car_1.jpg";
  document.getElementById('car-pic-7').src="Resources/img/cars/car7/car_1.jpg";
  document.getElementById('car-pic-8').src="Resources/img/cars/car8/car_1.jpg";
  document.getElementById('car-pic-9').src="Resources/img/cars/car9/car_1.jpg";
  document.getElementById('car-pic-10').src="Resources/img/cars/car10/car_1.jpg";


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
    document.getElementById('car_description').innerHTML=car1_d;
    document.getElementById('car-pic-1').src="Resources/img/cars/car1/car_1.jpg";
    document.getElementById('car-pic-2').src="Resources/img/cars/car1/car_2.jpg";
    document.getElementById('car-pic-3').src="Resources/img/cars/car1/car_3.jpg";
    document.getElementById('car-pic-4').src="Resources/img/cars/car1/car_4.jpg";
    document.getElementById('car-pic-5').src="Resources/img/cars/car1/car_5.jpg";
  }
  else if (car=='car2'){
    document.getElementById('car_company').innerHTML=all_cars[1][0];
    document.getElementById('car_model').innerHTML=all_cars[1][1];
    document.getElementById('car_year').innerHTML=all_cars[1][2];
    document.getElementById('car_distributor').innerHTML=all_cars[1][3];
    document.getElementById('car_price').innerHTML=all_cars[1][4];
    document.getElementById('car_description').innerHTML=car2_d;
    document.getElementById('car-pic-1').src="Resources/img/cars/car2/car_1.jpg";
    document.getElementById('car-pic-2').src="Resources/img/cars/car2/car_2.jpg";
    document.getElementById('car-pic-3').src="Resources/img/cars/car2/car_3.jpg";
    document.getElementById('car-pic-4').src="Resources/img/cars/car2/car_4.jpg";
    document.getElementById('car-pic-5').src="Resources/img/cars/car2/car_5.jpg";
  }
  else if (car=='car3'){
    document.getElementById('car_company').innerHTML=all_cars[2][0];
    document.getElementById('car_model').innerHTML=all_cars[2][1];
    document.getElementById('car_year').innerHTML=all_cars[2][2];
    document.getElementById('car_distributor').innerHTML=all_cars[2][3];
    document.getElementById('car_price').innerHTML=all_cars[2][4];
    document.getElementById('car_description').innerHTML=car3_d;
    document.getElementById('car-pic-1').src="Resources/img/cars/car3/car_1.jpg";
    document.getElementById('car-pic-2').src="Resources/img/cars/car3/car_2.jpg";
    document.getElementById('car-pic-3').src="Resources/img/cars/car3/car_3.jpg";
    document.getElementById('car-pic-4').src="Resources/img/cars/car3/car_4.jpg";
    document.getElementById('car-pic-5').src="Resources/img/cars/car3/car_5.jpg";
  }
  else if (car=='car4'){
    document.getElementById('car_company').innerHTML=all_cars[3][0];
    document.getElementById('car_model').innerHTML=all_cars[3][1];
    document.getElementById('car_year').innerHTML=all_cars[3][2];
    document.getElementById('car_distributor').innerHTML=all_cars[3][3];
    document.getElementById('car_price').innerHTML=all_cars[3][4];
    document.getElementById('car_description').innerHTML=car4_d;
    document.getElementById('car-pic-1').src="Resources/img/cars/car4/car_1.jpg";
    document.getElementById('car-pic-2').src="Resources/img/cars/car4/car_2.jpg";
    document.getElementById('car-pic-3').src="Resources/img/cars/car4/car_3.jpg";
    document.getElementById('car-pic-4').src="Resources/img/cars/car4/car_4.jpg";
    document.getElementById('car-pic-5').src="Resources/img/cars/car4/car_5.jpg";
  }
  else if (car=='car5'){
    document.getElementById('car_company').innerHTML=all_cars[4][0];
    document.getElementById('car_model').innerHTML=all_cars[4][1];
    document.getElementById('car_year').innerHTML=all_cars[4][2];
    document.getElementById('car_distributor').innerHTML=all_cars[4][3];
    document.getElementById('car_price').innerHTML=all_cars[4][4];
    document.getElementById('car_description').innerHTML=car5_d;
    document.getElementById('car-pic-1').src="Resources/img/cars/car5/car_1.jpg";
    document.getElementById('car-pic-2').src="Resources/img/cars/car5/car_2.jpg";
    document.getElementById('car-pic-3').src="Resources/img/cars/car5/car_3.jpg";
    document.getElementById('car-pic-4').src="Resources/img/cars/car5/car_4.jpg";
    document.getElementById('car-pic-5').src="Resources/img/cars/car5/car_5.jpg";
  }
  else if (car=='car6'){
    document.getElementById('car_company').innerHTML=all_cars[5][0];
    document.getElementById('car_model').innerHTML=all_cars[5][1];
    document.getElementById('car_year').innerHTML=all_cars[5][2];
    document.getElementById('car_distributor').innerHTML=all_cars[5][3];
    document.getElementById('car_price').innerHTML=all_cars[5][4];
    document.getElementById('car_description').innerHTML=car6_d;
    document.getElementById('car-pic-1').src="Resources/img/cars/car6/car_1.jpg";
    document.getElementById('car-pic-2').src="Resources/img/cars/car6/car_2.jpg";
    document.getElementById('car-pic-3').src="Resources/img/cars/car6/car_3.jpg";
    document.getElementById('car-pic-4').src="Resources/img/cars/car6/car_4.jpg";
    document.getElementById('car-pic-5').src="Resources/img/cars/car6/car_5.jpg";
  }
  else if (car=='car7'){
    document.getElementById('car_company').innerHTML=all_cars[6][0];
    document.getElementById('car_model').innerHTML=all_cars[6][1];
    document.getElementById('car_year').innerHTML=all_cars[6][2];
    document.getElementById('car_distributor').innerHTML=all_cars[6][3];
    document.getElementById('car_price').innerHTML=all_cars[6][4];
    document.getElementById('car_description').innerHTML=car7_d;
    document.getElementById('car-pic-1').src="Resources/img/cars/car7/car_1.jpg";
    document.getElementById('car-pic-2').src="Resources/img/cars/car7/car_2.jpg";
    document.getElementById('car-pic-3').src="Resources/img/cars/car7/car_3.jpg";
    document.getElementById('car-pic-4').src="Resources/img/cars/car7/car_4.jpeg";
    document.getElementById('car-pic-5').src="Resources/img/cars/car7/car_5.jpeg";
  }
  else if (car=='car8'){
    document.getElementById('car_company').innerHTML=all_cars[7][0];
    document.getElementById('car_model').innerHTML=all_cars[7][1];
    document.getElementById('car_year').innerHTML=all_cars[7][2];
    document.getElementById('car_distributor').innerHTML=all_cars[7][3];
    document.getElementById('car_price').innerHTML=all_cars[7][4];
    document.getElementById('car_description').innerHTML=car8_d;
    document.getElementById('car-pic-1').src="Resources/img/cars/car8/car_1.jpg";
    document.getElementById('car-pic-2').src="Resources/img/cars/car8/car_2.jpg";
    document.getElementById('car-pic-3').src="Resources/img/cars/car8/car_3.jpg";
    document.getElementById('car-pic-4').src="Resources/img/cars/car8/car_4.jpg";
    document.getElementById('car-pic-5').src="Resources/img/cars/car8/car_5.jpg";
  }
  else if (car=='car9'){
    document.getElementById('car_company').innerHTML=all_cars[8][0];
    document.getElementById('car_model').innerHTML=all_cars[8][1];
    document.getElementById('car_year').innerHTML=all_cars[8][2];
    document.getElementById('car_distributor').innerHTML=all_cars[8][3];
    document.getElementById('car_price').innerHTML=all_cars[8][4];
    document.getElementById('car_description').innerHTML=car9_d;
    document.getElementById('car-pic-1').src="Resources/img/cars/car9/car_1.jpg";
    document.getElementById('car-pic-2').src="Resources/img/cars/car9/car_2.jpg";
    document.getElementById('car-pic-3').src="Resources/img/cars/car9/car_3.jpg";
    document.getElementById('car-pic-4').src="Resources/img/cars/car9/car_4.jpg";
    document.getElementById('car-pic-5').src="Resources/img/cars/car9/car_5.jpg";
  }
  else if (car=='car10'){
    document.getElementById('car_company').innerHTML=all_cars[9][0];
    document.getElementById('car_model').innerHTML=all_cars[9][1];
    document.getElementById('car_year').innerHTML=all_cars[9][2];
    document.getElementById('car_distributor').innerHTML=all_cars[9][3];
    document.getElementById('car_price').innerHTML=all_cars[9][4];
    document.getElementById('car_description').innerHTML=car10_d;
    document.getElementById('car-pic-1').src="Resources/img/cars/car10/car_1.jpg";
    document.getElementById('car-pic-2').src="Resources/img/cars/car10/car_2.jpg";
    document.getElementById('car-pic-3').src="Resources/img/cars/car10/car_3.jpg";
    document.getElementById('car-pic-4').src="Resources/img/cars/car10/car_4.jpg";
    document.getElementById('car-pic-5').src="Resources/img/cars/car10/car_5.jpg";
  }
   else {
     alert("Car information unavailable!");
   }
}
