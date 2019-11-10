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
