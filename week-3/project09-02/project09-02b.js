"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-01

      Project to read field values from session storage
      Author: Angelica Gutierrez
      Date:   16 June 2024

      Filename: project09-02b.js
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

riderName.textContent = sessionStorage.getItem("riderName"); // retrieve value of riderName key from session storage + store value in riderName object in web page
ageGroup.textContent = sessionStorage.getItem("ageGroup"); // retrieve value of ageGroup key from session storage + store value in ageGroup object in web page
bikeOption.textContent = sessionStorage.getItem("bikeOption"); // retrieve value of bikeOption key from session storage + store value in bikeOption object in web page
routeOption.textContent = sessionStorage.getItem("routeOption"); // retrieve value of routeOption key from session storage + store value in routeOption object in web page
accOption.textContent = sessionStorage.getItem("accOption"); // retrieve value of accOption key from session storage + store value in accOption object in web page
region.textContent = sessionStorage.getItem("region"); // retrieve value of region key from session storage + store value in region object in web page
miles.textContent = sessionStorage.getItem("miles"); // retrieve value of miles key from session storage + store value in miles object in web page
comments.textContent = sessionStorage.getItem("comments"); // retrieve value of comments key from session storage + store value in comments object in web page
