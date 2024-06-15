"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-02

      Project to read field values from web storage
      Author: Angelica Gutierrez
      Date:   16 June 2024

      Filename: project09-02a.js
*/

/* Page Objects */

let riderName = document.getElementById("riderName");
let ageGroup = document.getElementById("ageGroup");
let bikeOption = document.getElementById("bikeOption");
let routeOption = document.getElementById("routeOption");
let accOption = document.getElementById("accOption");
let region = document.getElementById("region");
let miles = document.getElementById("miles");
let comments = document.getElementById("comments");

document.getElementById("submitButton").onclick = showData; //  runs showData() when Submit button is clicked

function showData(){
  sessionStorage.setItem("riderName", riderName.value); // store value of riderName object in a session storage object named riderName
  sessionStorage.setItem("ageGroup", ageGroup.value); // store value of ageGroup object in a session storage object named ageGroup
  sessionStorage.setItem("bikeOption", bikeOption.value); // store value of bikeOption object in a session storage object named nikeOption
  sessionStorage.setItem("routeOption", routeOption.value); // store value of routeOption object in a session storage object named routeOption
  sessionStorage.setItem("accOption", accOption.value); // store value of accOption object in a session storage object named accOption
  sessionStorage.setItem("region", region.value);// store value of region object in a session storage object named region
  sessionStorage.setItem("miles", miles.value);// store value of miles object in a session storage object named miles
  sessionStorage.setItem("comments", comments.value);// store value of comments object in a session storage object named comments

  location.href = "project09-02b.html"; // changes the value of the location.href object to project09-02b.html
}