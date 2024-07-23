"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-03

      Project to show a recipe with expanding/contracting content
      Author: Angelica Gutierrez
      Date:   28 July 2024

      Filename: project12-03.js
*/

$( () => {

  //apply the click() method to the article > h2 selector
  $("article > h2").click(e => {
    let heading = $(e.target); // Declare the heading variable referencing the target of the click event.
    let list = $(heading).next(); // Declare the list variable referencing the next sibling element of the heading variable
    let headingImage = $(heading).children("img"); // Declare the headingImage variable referencing the children of the heading variable whose tag name is “img”

    //jquery slidetoggle
    $(list).slideToggle(500)

    if($(headingImage).attr("src") === "plus.pg") { // Change symbol displayed headingImage variable to get the value of the src attribute
      $(headingImage).attr("src", "minus.png"); // set src attribute to “minus.png”
    } else {
      $(headingImage).attr("src", "plus.png"); // set src value to “plus.png”
    }
  });
});