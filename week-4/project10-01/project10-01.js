"use strict";
/*    JavaScript 7th Edition
      Chapter 10
      Project 10-01

      Project to create a drag and drop jigsaw puzzle
      Author: Angelica Gutierrez
      Date:   June 23, 2024

      Filename: project10-01.js
*/

// Reference to the puzzle board
let puzzleBoard = document.getElementById("puzzleBoard");
// Counter for the zIndex style of each puzzle piece
let zCounter = 1;
// Array of integers from 1 to 48
let intList = new Array(48);
// pointerX and pointerY will contain the initial coordinates of the pointerX
// pieceX and pieceY will contain the initial coordinates of a puzzle piece
let pointerX, pointerY, pieceX, pieceY;

// Sort the integers from 1 to 48 in random order
for (let i = 0; i < 48; i++) {
  intList[i] = i + 1;
}
intList.sort(function () {
  return 0.5 - Math.random();
});

// generate randomly-sorted puzzle pieces
for (let i = 0; i < 48; i++) {
  let piece = document.createElement("img");
  piece.src = "piece" + intList[i] + ".png";
  let rowNum = Math.ceil((i + 1) / 8);
  let colNum = (i + 1) - (rowNum - 1) * 8;
  piece.style.top = (rowNum - 1) * 98 + 7 + "px";
  piece.style.left = (colNum - 1) * 98 + 7 + "px";
  piece.draggable = false; // override the default draggability of images
  puzzleBoard.appendChild(piece);
}

// Node list representing the puzzle pieces
let pieces = document.querySelectorAll("div#puzzleBoard img");

// Add event listeners to each puzzle piece for the 'pointerdown' event - as in when a puzzle piece is picked up
pieces.forEach(piece => {
  piece.addEventListener('pointerdown', grabPiece);
});

// grabPiece function
function grabPiece(e) {
  pointerX = e.clientX; // setting pointerX to value clientX
  pointerY = e.clientY; // setting pointerY to value clientY

  e.target.style.touchAction = 'none'; // setting touchAction to event target none

  zCounter++; // increase value of zCounter by 1
  e.target.style.zIndex = zCounter; // zCounter  to zIndex style of event target

  pieceX = e.target.offsetLeft; // setting pieceX to value offsetLeft
  pieceY = e.target.offsetTop; // setting pieceY to value offsetTop

  e.target.addEventListener('pointermove', movePiece); // event listener for movePiece in response to pointermove
  e.target.addEventListener('pointerup', dropPiece); // event listener for dropPiece in response to pointerup
}

// movePiece function
function movePiece(e) {
  let diffX = e.clientX - pointerX; // declare diffX, setting to e.clientX & pointerX
  let diffY = e.clientY - pointerY; // declare diffY, setting to e.clientY & pointerY

  e.target.style.left = `${pieceX + diffX}px`; // set left style to sum of pieceX and diffX plus text string "px"
  e.target.style.top = `${pieceY + diffY}px`; // set top style to sum of pieceY and diffY plus text string "px"
}

// dropPiece function
function dropPiece(e) {
  e.target.removeEventListener('pointermove', movePiece); // remove movePiece() from event for pointermove
  e.target.removeEventListener('pointerup', dropPiece); // remove dropPiece() from event for pointerup
}