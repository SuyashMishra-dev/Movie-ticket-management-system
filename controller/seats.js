let threater = new Threater();
let movie = new Movie();
// UI variables
let seats = document.getElementById("seats");
let priceDiv = document.getElementById("price-details");
let thName = document.querySelector(".threater-name");
let movName = document.querySelector(".movie-name");
let showTime = document.querySelector(".show-time");
let duration = document.querySelector(".duration");

let selectedSeat = [];

document.addEventListener("DOMContentLoaded", () => {
  let thId = localStorage.getItem("threater_id");
  let threaterDetail = threater.getThreateByID(thId);

  let movieId = localStorage.getItem("movie_id");
  let movieDetail = movie.getMovieById(movieId);
  console.log(movieDetail);
  // Details
  threaterAndMovieDetails(threaterDetail, movieDetail);

  //   Populate Seats

  populateSeats(
    threaterDetail.seats.platinum.count,
    "platinum",
    threaterDetail.seats.platinum.price
  );
  setPrice("platinum", threaterDetail.seats.platinum.price);
  populateSeats(
    threaterDetail.seats.gold.count,
    "gold",
    threaterDetail.seats.gold.price
  );
  setPrice("gold", threaterDetail.seats.gold.price);
  populateSeats(
    threaterDetail.seats.silver.count,
    "silver",
    threaterDetail.seats.silver.price
  );
  setPrice("silver", threaterDetail.seats.silver.price);
});

function populateSeats(seatNo, type, price) {
  let seatDiv = document.createElement("div");
  let p = document.createElement("p");
  p.innerHTML = type.toUpperCase();
  seatDiv.className = "grid-seats";
  seatDiv.appendChild(p);
  let inner = document.createElement("div");
  inner.className = "seats-flex";
  for (let i = 0; i < seatNo; i++) {
    let seat = document.createElement("i");
    seat.addEventListener("click", (e) => {
      selectSeat(e, `${type[0].toUpperCase()}-${i}`);
    });
    seat.id = `${type[0].toUpperCase()}-${i}`;
    seat.className = "fas fa-chair " + type;
    inner.appendChild(seat);
  }

  seatDiv.appendChild(inner);

  seats.appendChild(seatDiv);
}

function setPrice(type, price) {
  let para = document.createElement("p");
  let span1 = document.createElement("span");
  span1.classList.add("price" + type);
  let showPrice = document.createElement("span");
  showPrice.classList.add("ml-2");
  showPrice.innerHTML = `${type.toUpperCase()} ${price} Rs`;
  para.appendChild(span1);
  para.appendChild(showPrice);
  priceDiv.appendChild(para);
}

function selectSeat(e, seatID) {
  if (selectedSeat.length == 6) {
    alert("You have Exceeded Number Of Seats");
    return false;
  }
  let seat = document.getElementById(seatID);
  if (!selectedSeat.includes(seatID)) {
    selectedSeat.push(seatID);
  }
  seat.style.color = "black";
  updateBillInformation(selectedSeat);
}

function updateBillInformation(selectedSeat) {
  let silCount = document.querySelector(".sel-silver");
  let goldCount = document.querySelector(".sel-gold");
  let platinumCount = document.querySelector(".sel-platinum");
  let silPrice = document.querySelector(".sel-silver-price");
  let selSeat = document.querySelector("#selected-seat");
  let goldPrice = document.querySelector(".sel-gold-price");
  let plaitnumPrice = document.querySelector(".sel-platinum-price");

  let sl = 0;
  let gd = 0;
  let pt = 0;

  selSeat.innerHTML = "";

  for (let i = 0; i < selectedSeat.length; i++) {
    if (selectedSeat[i][0] == "P") {
      pt += 1;
    } else if (selectedSeat[i][0] == "S") {
      sl += 1;
    } else {
      gd += 1;
    }
    let span = document.createElement("span");
    span.style.margin = "0px 5px";
    span.className = "badge badge-info";
    span.innerHTML = selectedSeat[i];
    selSeat.appendChild(span);
  }

  console.log(sl, pt, gd);

  silCount.innerHTML = sl;
  platinumCount.innerHTML = pt;
  goldCount.innerHTML = gd;

  silPrice.innerHTML = sl * 120 + " Rs";
  plaitnumPrice.innerHTML = pt * 320 + " Rs";
  goldPrice.innerHTML = gd * 220 + " Rs";

  calculateTotalPrice(sl * 120, pt * 320, gd * 220);
}

function calculateTotalPrice(sl, pt, gd) {
  let total = document.getElementById("total");
  total.innerHTML = sl + pt + gd + " Rs";
}

function threaterAndMovieDetails(threaterDetails, movieDetails) {
  // Append threater name
  thName.innerHTML = threaterDetails.name;

  // Append movie name
  movName.innerHTML = movieDetails.movie;

  // Append Show Time
  showTime.innerHTML = movieDetails.start;

  // Append Movie Duration
  duration.innerHTML = movieDetails.duration;
}
