/*
  Pragmatic JavaScript
  Chapter 1
  Programming Assignment

  Author: Angelica Gutierrez
  Date: June 9, 2024
  Filename: script.js
*/

"use strict";

//Implement this function
function createCharacter(name, gender, characterClass) {
  return {
    hName: function() {
      return name;
    },

    hGender: function() {
      return gender;
    },

    hClass: function() {
      return characterClass;
    }
  }
}

document.getElementById("generateHero").addEventListener("click", function(e) {
  e.preventDefault();

  // Get form values
  const heroName = document.getElementById("heroName").value; // getting hero name
  const heroGender = document.getElementById("heroGender").value; // getting hero gender
  const heroClass = document.getElementById("heroClass").value; // getting hero class

  //Create character
  const character = createCharacter (heroName, heroGender, heroClass); // putting character together

  //Display character information
  const outputName = document.getElementById("inputName");
  outputName.innerHTML = character.hName(); // displaying name

  const outputGender = document.getElementById("inputGender");
  outputGender.innerHTML = character.hGender(); // displaying gender

  const outputClass = document.getElementById("inputClass");
  outputClass.innerHTML = character.hClass(); // displaying class
});