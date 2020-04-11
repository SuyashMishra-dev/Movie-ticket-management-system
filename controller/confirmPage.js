let threater = new Threater();
let movie = new Movie();

// UI Variables
let thName = document.querySelector(".threater-name");
let movName = document.querySelector(".movie-name");
let showTime = document.querySelector(".show-time");
let poster = document.querySelector("#poster");
let seats = document.querySelector(".seats");

document.addEventListener("DOMContentLoaded", () => {
  let thId = localStorage.getItem("threater_id");
  let threaterDetail = threater.getThreateByID(thId);

  let movieId = localStorage.getItem("movie_id");
  let movieDetail = movie.getMovieById(movieId);

  // Details
  threaterAndMovieDetails(threaterDetail, movieDetail);
});

function threaterAndMovieDetails(threaterDetails, movieDetails) {
  seats.innerHTML = "";

  let bookedSeats = JSON.parse(localStorage.getItem("selected"));

  // Append threater name
  thName.innerHTML = "Venue Name : " + threaterDetails.name;

  // Append movie name
  movName.innerHTML = "Movie Name : " + movieDetails.movie;

  // Append Show Time
  showTime.innerHTML = "Start Time : " + movieDetails.start;

  poster.src = movieDetails.poster;

  bookedSeats.forEach((item) => {
    let span = document.createElement("span");
    span.style.margin = "0px 5px";
    span.className = "badge badge-info";
    span.innerHTML = item;
    seats.appendChild(span);
  });

  let hour = movieDetails.hour;
  let min = movieDetails.min;
  // Append Movie Duration
  duration.innerHTML = `${hour} hr ${min} min`;
}
