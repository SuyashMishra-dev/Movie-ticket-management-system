const movie = new Movie();

// Get threater id from local storage

let threaterId = localStorage.getItem("threater_id");

document.addEventListener("DOMContentLoaded", async () => {
  let movies = await movie.getAllMoviesOfThreater(threaterId);
  displayMovies(movies);
});

const displayMovies = (movieList) => {
  // UI div for append all cards
  let movieDiv = document.querySelector(".movies");
  // Empty value of div
  movieDiv.innerHTML = "";

  movieList.forEach((item) => {
    // Create card div
    let cardDiv = document.createElement("div");
    cardDiv.setAttribute("class", "card mx-2 mt-3");
    // Create img
    let img = document.createElement("img");
    img.setAttribute("src", item.poster);
    console.log(item.poster, item);

    img.setAttribute("class", "card-img-top");
    // Create card body div
    let cardBodyDiv = document.createElement("div");
    cardBodyDiv.setAttribute("class", "card-body");
    // Create card h5
    let h5 = document.createElement("h5");
    h5.setAttribute("class", "card-title");
    // Add name in h5
    h5.innerHTML = item.movie;
    // Create p1 para
    let p1 = document.createElement("p");
    p1.setAttribute("class", "card-text");
    // Add show time in inner html
    p1.innerHTML = "Show Time: " + item.start;
    // Create p2 para
    let p2 = document.createElement("p");
    p2.setAttribute("class", "card-text");
    // Add show duration in para p2
    p2.innerHTML = "Duration " + item.hour + " hours " + item.min + " min";
    // Create card link
    let link = document.createElement("a");
    link.setAttribute("class", "btn btn-primary");
    link.addEventListener("click", (e) => bookMovies(e, item.id));
    link.innerHTML = "Book";
    // Append h5 in card body
    cardBodyDiv.appendChild(h5);
    // Append p1 in card body
    cardBodyDiv.appendChild(p1);
    // Append p2 in card body
    cardBodyDiv.appendChild(p2);
    // Append link in card body
    cardBodyDiv.appendChild(link);
    // Append img in card div
    cardDiv.appendChild(img);
    // Append card body div in card div
    cardDiv.appendChild(cardBodyDiv);
    // Append card into threater div
    movieDiv.appendChild(cardDiv);
  });
};
