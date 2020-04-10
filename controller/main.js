const region = new Region();
const threater = new Threater();

// Init application
document.addEventListener("DOMContentLoaded", async () => {
  let locations = await region.getLocation();
  populateLocation(locations);

  // Get Select Box From HTML
  let selectBox = document.getElementById("location");

  // Add Event Listener
  selectBox.addEventListener("change", fetchThreater);
});

// UI Binding

function populateLocation(locations) {
  // Get Select Box From HTML
  let selectBox = document.getElementById("location");
  locations.forEach((item) => {
    // Create option
    let option = document.createElement("option");
    // Add value in option
    option.value = item.id;
    // Add text to inner HTML
    option.innerHTML = item.name;
    // Append option in select box
    selectBox.appendChild(option);
  });
}

const fetchThreater = async (e) => {
  // Get Location Id
  let id = e.target.value;
  // Fetch all threaters by location id
  let cityTreaters = await threater.getThreateByLocation(id);
  // UI variable div
  let threaterDiv = document.querySelector(".threater");
  // Empty threater div
  threaterDiv.innerHTML = "";
  cityTreaters.forEach((item) => {
    // Create card div
    let cardDiv = document.createElement("div");
    cardDiv.setAttribute("class", "card mx-2 mt-3");
    // Create img
    let img = document.createElement("img");
    img.setAttribute("src", item.img);
    console.log(item.img);
    img.setAttribute("class", "card-img-top");
    // Create card body div
    let cardBodyDiv = document.createElement("div");
    cardBodyDiv.setAttribute("class", "card-body");
    // Create card h5
    let h5 = document.createElement("h5");
    h5.setAttribute("class", "card-title");
    // Add name in h5
    h5.innerHTML = item.name;
    // Create card link
    let link = document.createElement("a");
    link.setAttribute("class", "btn btn-primary");
    link.addEventListener("click", (e) => fetchMovies(e, item.id));
    link.innerHTML = "Book Movie";
    // Append h5 in card body
    cardBodyDiv.appendChild(h5);
    // Append link in card body
    cardBodyDiv.appendChild(link);
    // Append img in card div
    cardDiv.appendChild(img);
    // Append card body div in card div
    cardDiv.appendChild(cardBodyDiv);
    // Append card into threater div
    threaterDiv.appendChild(cardDiv);
  });
};

const fetchMovies = (e, id) => {
  e.preventDefault();
  localStorage.setItem("threater_id", id);
  window.location.href = "/views/book_movie.html";
};
