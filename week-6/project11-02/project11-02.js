"use strict";
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-02

      Project to city and state information from a provided postal code
      Author: Angelica Gutierrez
      Date:   July 7, 2024

      Filename: project11-02.js
*/

let postalCode = document.getElementById("postalCode");
let place = document.getElementById("place");
let region = document.getElementById("region");
let country = document.getElementById("country");

postalCode.onblur = function () {

  let codeValue = postalCode.value; // Declare codeValue, set equal to the value of postalCode
  let countryValue = country.value; // Declare countryValue, set equal to value of the country

  place.value = ""; // set value of place to empty text string
  region.value = ""; // set value of region to empty text string

  // Use Fetch to access the API where country is the value of the countryValue variable and code is the value of the codeValue variable
  fetch(`http://api.zippopotam.us/${countryValue}/${codeValue}`)

    .then(response => response.json()) // add a then() method to parse the JSON response object

    // add then() method using arrow function with a one parameter named json
    .then(json => {
      place.value = json.places[0]["place name"]; // place element to place property for the postal code
      region.value = json.places[0]["state abbreviation"] // region element to the state abbreviation property
    })

    .catch(error => console.log(error)); // response rejected, write the error text to the console log
}


