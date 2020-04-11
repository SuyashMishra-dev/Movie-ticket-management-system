class Movie {
  constructor() {
    this.movies = JSON.parse(localStorage.getItem("movies")) || [];
  }
  getAllMoviesOfThreater(id) {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open("GET", "http://localhost:5000/movies");
      xhr.onload = () => {
        if (xhr.status === 200) {
          let data = JSON.parse(xhr.response);
          let filteredMovie = data.filter((item) =>
            item.threater.includes(parseInt(id))
          );
          localStorage.setItem("movies", JSON.stringify(filteredMovie));
          resolve(filteredMovie);
        } else {
          reject(xhr.response);
        }
      };
      xhr.send();
    });
  }
  getMovieOnFilter(movies, lang, genre) {
    if (genre == "" && lang == "") {
      return movies;
    } else if (genre != "" && lang == "") {
      let filteredMovie = [];
      movies.forEach((elem) => {
        if (elem.type == genre) {
          filteredMovie.push(elem);
        }
      });
      return filteredMovie;
    } else if (genre == "" && lang != "") {
      console.log("Hsh");
      let filteredMovie = [];
      movies.forEach((elem) => {
        if (elem.lang == lang) {
          filteredMovie.push(elem);
        }
      });
      return filteredMovie;
    } else if (genre != "" && lang != "") {
      let filteredMovie = [];
      movies.forEach((elem) => {
        if (elem.type == genre && elem.lang == lang) {
          filteredMovie.push(elem);
        }
      });
      return filteredMovie;
    }
    return movies;
  }

  getMovieById(id) {
    let movie = this.movies.filter((item) => item.id == parseInt(id));
    return movie[0];
  }
}
