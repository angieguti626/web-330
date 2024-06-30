/*
  Pragmatic JavaScript
  Chapter 2
  Programming Assignment

  Author: Angelica Gutierrez
  Date: June 30, 2024
  Filename: script.js
*/

// Create an in-memory object array for each table in the restaurant
let tables = [
  // Add your table objects here
  {
    tableNumber: 1,       // table 1
    capacity: 2,          // capcity 2
    isReserved: false     // is not reserved
  },
  {
    tableNumber: 2,       // table 2
    capacity: 2,          // capacity 2
    isReserved: false     // is not reserved
  },
  {
    tableNumber: 3,       // table 3
    capacity: 4,          // capacity 4
    isReserved: false     // is not reserved
  },
  {
    tableNumber: 4,       // table 4
    capacity: 4,          // capacity 4
    isReserved: false     // is not reserved
  },
  {
    tableNumber: 5,       // table 5
    capacity: 8,          // capacity 8
    isReserved: false     // is not reserved
  },
  {
    tableNumber: 6,       // table 6
    capacity: 8,          // capacity 8
    isReserved: false     // is not reserved
  },
  {
    tableNumber: 7,       // table 7
    capacity: 10,         // capacity 10
    isReserved: false     // is not reserved
  },
  {
    tableNumber: 8,       // table 8
    capacity: 10,         // capacity 10
    isReserved: false     // is not reserved
  }
];

// Create a function reserveTable
function reserveTable(tableNumber, callback, time) {
  // Add your code here
  let yourtable = tables.find(t => t.tableNumber === tableNumber);

  if (yourtable && !yourtable.isReserved) { // if your table # and is not reserved, then
    yourtable.isReserved = true; // your table is able to be reserved
    callback(`Table ${tableNumber} reserved successfully.`); // success message
    setTimeout(() => { // timeout window for reservation
      yourtable.isReserved = false;
    }, time);
  }
  else { // if your table # and is reserved, then
    callback(`Table ${tableNumber} is not available for reservation.`); // unable to reserve message
  }
}

// When the form is submitted, call the reserveTable function
document
  .getElementById("reservationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    //Add your code here
    const tableNumber = parseInt(document.getElementById("tableNumber").value); // get tableNumber
    const messageElement = document.getElementById("message"); // get message

    reserveTable(tableNumber, function (message) {
      messageElement.textContent = message; // display message context
    }, 8000); // 8 seconds window
  });