/*
  Pragmatic JavaScript
  Chapter 4
  Programming Assignment

  Author: Angelica Gutierrez
  Date: 21 July 2024
  Filename: script.js
*/

"use strict";

const movies = [
  // Add your movie objects here
  {
    title: "Turning Red",
    director: "Domee Shi",
    releaseYear: 2022,
    synopsis: "Trying to juggle her burgeoning independence and the family's expectations is about to become even more complicated when 13-year-old high-achiever Mei Lee makes an eye-opening discovery. And as her hyperactive teenage hormones kick in, having a mind of their own, Mei's emotions also take on a life of their own: whenever she gets too stressed or excited about something, Mei triggers a strange, radical metamorphosis."
  },
  {
    title: "Up",
    director: "Pete Doctor, Bob Peterson",
    releaseYear: 2009,
    synopsis: "Ten-year-old Carl Fredricksen idolizes famed explorer Charles Muntz, who is discredited when a giant bird skeleton he brought back from Paradise Falls in South America is deemed a fake."
  },
  {
    title:"Toy Story",
    director:"John Lasseter",
    releaseYear: 1955,
    synopsis:"A group of sentient toys, who pretend to be lifeless when humans are around, are preparing to move into a new house with their young owner Andy Davis, his infant sister Molly and their single mother Mrs. Davis."
  },
  {
    title:"Inside Out",
    director:"Pete Docter, Ronnie Del Carmen",
    releaseYear: 2015,
    synopsis:"After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate a new city, house, and school."
  },
  {
    title: "Soul",
    director:"Pete Docter, Kemp Powers",
    releaseYear:2020,
    synopsis:"Joe is a middle-school band teacher whose life hasn't quite gone the way he expected. His true passion is jazz and he's good. But when he travels to another realm to help someone find their passion, he soon discovers what it means to have soul."
  },
  {
    title: "Coco",
    director:"Lee Unkrich, Adrian Molina",
    releaseYear:2017,
    synopsis:"Despite his family's baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events."
  },
  {
    title: "Luca",
    director: "Enrico Casarosa",
    releaseYear: 2021,
    synopsis:"A young boy experiences an unforgettable seaside summer on the Italian Riviera filled with gelato, pasta and endless scooter rides. Luca shares these adventures with his newfound best friend, but all the fun is threatened by a deeply-held secret: he is a sea monster from another world just below the ocean's surface."
  },
  {
    title:"Cars",
    director:"John Lasseter, Joe Ranft",
    releaseYear: 2006,
    synopsis:"While traveling to California for the dispute of the final race of the Piston Cup against The King and Chick Hicks, the famous Lightning McQueen accidentally damages the road of the small town Radiator Springs and is sentenced to repair it. Lightning McQueen has to work hard and finds friendship and love in the simple locals, changing its values during his stay in the small town and becoming a true winner."
  }
];

function fetchMovie(title) {
  // Implement this function
  return new Promise((resolve,reject)=> {
    setTimeout(()=>{
      // finding if movie is in system
      const selectedmovie = movies.find(movie => movie.title.toLowerCase() === title.toLowerCase())
      // find movie
      if (selectedmovie)
        resolve(selectedmovie)
      else
      // movie is not in system
      reject("Movie does not exist in system.")
    }, 1000) // delay message
  })
}

document.getElementById("movie-form").addEventListener("submit", async (event) => {
  // Implement this function
  event.preventDefault()
  const usertitle = document.getElementById("title-input")
  try{
    const movie=await fetchMovie(usertitle.value)
    // displaying movie info
    document.getElementById("movie-title").textContent= `Title: ${movie.title}`
    document.getElementById("movie-director").textContent= `Director: ${movie.director}`
    document.getElementById("movie-year").textContent= `Year: ${movie.releaseYear}`
    document.getElementById("movie-synopsis").textContent=`Synopsis: ${movie.synopsis}`
    document.getElementById("error-message").textContent= ""
  }
  catch(error){
    document.getElementById("error-message").textContent= error
  }
});