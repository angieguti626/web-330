/*
  Pragmatic JavaScript
  Chapter 3
  Programming Assignment

  Author: Angelica Gutierrez
  Date: July 14, 2024
  Filename: chefs.js
*/

"use strict";

// TODO: Define an array of chef objects
let chefs = [
  // Each chef object should have a name, specialty, weakness, and restaurantLocation
  // Had to look up information on this, so if it is wrong, I apologize!
  { id: "Chef1", name: "Bobby Flay", specialty: "Southwestern cuisine", weakness: "Desserts", restaurantLocation: "New York" },
  { id: "Chef2", name: "Gordon Ramsay", specialty: "Beef Wellington", weakness: "Temper", restaurantLocation: "London" },
  { id: "Chef3", name: "Wolfgang Puck", specialty: "Pizza", weakness: "Meat", restaurantLocation: "California" }
];

// TODO: Define a function to retrieve the first chef's information
function retrieveChef1() {
return new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(chefs[0]);
    resolve("Chef1 data displayed");
  }, 4000);
});
}

// TODO: Define a function to retrieve the second chef's information
function retrieveChef2() {
  // This function should return a promise that resolves with the chef's information after a delay
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(chefs[1]);
      resolve("Chef2 data displayed");
    }, 4000);
  });
}

// TODO: Define a function to retrieve the third chef's information
function retrieveChef3() {
  // This function should return a promise that resolves with the chef's information after a delay
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(chefs[2]);
      resolve("Chef3 data displayed");
    }, 4000);
  });
}

// TODO: Use Promise.allSettled to retrieve all chefs' information and update the webpage accordingly
Promise.allSettled([
  retrieveChef1(),
  retrieveChef2(),
  retrieveChef3()
]).then((results) => {
    //If promise was fulfilled, display the chef data.
  results.forEach((result, index) => {
    const chefInfo = document.getElementById(`chef${index + 1}`);
      if (result.status === "fulfilled") {
        chefInfo.innerHTML = `<h2>${result.name}</h2><p>Specialty: ${result.specialty}</p><p>Weakness: ${result.weakness}</p><p>Location: ${result.location}</p>`;
      } else {
        chefInfo.innerHTML = `<p>Error: ${result.reason}</p>`;
    }
  });
});